# OPUS34_SKILL.md
## Master Context File — Read This Before Every Session
## Owner: Future Batoli | Location: Gaborone, Botswana
## Last Updated: 2026-05-30

---

## READ THIS FIRST

This file is the single source of truth for the Opus34 project. Every agent session must start by reading this file completely before touching any code. Do not assume anything not written here. Do not guess the state of files. Read what is on disk.

The owner's name is Future. Address him directly.

---

## WHAT OPUS34 IS

Opus34 is a live quantitative algorithmic trading system built in Python on MetaTrader 5. It trades Forex and is running on a funded prop account. It is NOT a hobby project — it is a live system with real money.

The full name used in branding is **Opus34 — Command Center**.

**Current account balance:** ~$6,180 USD
**Trading pairs active:** GBPUSD, EURUSD, USDJPY, EURJPY
**Broker:** MT5-connected prop firm

---

## REPOSITORY STRUCTURE

```
C:\Users\user\Documents\BAC\ict_trading_bot\
│
├── 01_LIVE_BOT\
│   ├── memory\                    ← SQLite database: trading_memory_5047375529.db
│   └── python\
│       ├── setups\                ← All setup detector files (see below)
│       ├── web\                   ← Flask dashboard assets
│       ├── ict_strategy.py        ← Main strategy orchestrator (analyze())
│       ├── bot_engine.py          ← Live bot engine, order placement
│       ├── confidence_model.py    ← Standalone confidence calibration engine
│       ├── risk_manager.py        ← Position sizing, daily loss guard
│       ├── trading_memory.py      ← Database interface layer
│       ├── backtester.py          ← Backtest engine (120KB — large)
│       ├── liquidity_map.py       ← Liquidity level mapping
│       ├── liquidity_flip.py      ← Liquidity flip arbitrator
│       ├── hybrid_gate.py         ← Entry gate layer
│       ├── brain_gate.py          ← XGBoost ML gate
│       ├── trading_brain.py       ← Adaptive brain component
│       ├── pattern_gate.py        ← Pattern brain live integration
│       ├── api_server.py          ← Flask API + dashboard endpoints
│       └── [50+ supporting files]
│
├── 02_BACKTESTER\                 ← Backtester support files
├── 03_BACKTEST_RESULTS\           ← Backtest output files
│
├── 04_BRAIN\                      ← Pattern discovery engine (NEW)
│   ├── data_prep.py               ← CSV → clean parquet
│   ├── feature_engineer.py        ← Feature matrix builder
│   ├── outcome_labeler.py         ← Option C outcome labeling
│   ├── pattern_discovery.py       ← Pattern discovery (trees + clustering)
│   ├── strategy_extractor.py      ← Human-readable strategy documents
│   ├── run_discovery.py           ← Master pipeline runner
│   ├── data\                      ← Parquet files (generated)
│   ├── discovered_patterns\       ← patterns.json
│   └── strategies\                ← strategy_XX.txt files (76 discovered)
│
├── 05_DATA\                       ← 16 months of historical CSV candle data
│   └── [GBPUSD_M15.csv, EURUSD_H4.csv, etc. — 39 CSV files, 8 symbols]
│
├── 06_CONFIG\
│   └── settings.json              ← Master config file
│
└── 07_LOGS\                       ← Bot runtime logs
```

---

## SETUP FILES — setups/ directory

These are the individual setup detector files. Each is a Python mixin class:

| File | Setup | Status | Notes |
|------|-------|--------|-------|
| `choch.py` | Change of Character | ✅ LIVE | 7/9 filters. Phase 3 hardened. |
| `liquidity_sweep.py` | LSR (Liquidity Sweep Reversal) | ✅ LIVE | 7/9 filters. Best structured setup. Negative EV historically. |
| `fvg.py` | FVG_ENTRY + FVG_CONTINUATION | ✅ LIVE | 6/9 filters. Golden setup uses `fvg_golden.py` (SetupType.FVG). |
| `stop_hunt.py` | Stop Hunt | ✅ LIVE | 6/9 filters. Fallback disabled. Mapped path only. |
| `engulfing.py` | Engulfing | ✅ LIVE | 6/9 filters. Best EV: +$2.06, 64.49% WR. |
| `turtle_soup.py` | Turtle Soup | ✅ LIVE | 6/9 filters. N-bar bug fixed. Zero trades yet. |
| `order_block.py` | Order Block | 🔒 DISABLED | Exists, not in enabled_setups |
| `bos.py` | Break of Structure | 🔒 DISABLED | HTF bias gate added. Not enabled. |
| `trend_continuation.py` | HH_HL / LH_LL Continuation | 🔒 DISABLED | |
| `power_of_3.py` | Power of 3 | 🔒 DISABLED | Asian range window bug known |
| `nr7_breakout.py` | NR7/NR4 Breakout | 🔒 DISABLED | |
| `opening_range.py` | Opening Range Breakout | 🔒 DISABLED | |
| `oops_gap.py` | Oops Gap Reversal | 🔒 DISABLED | |
| `gold_session_sweep.py` | Gold Session Sweep | 🔒 DISABLED | XAUUSD only |
| `pin_bar.py` | Pin Bar | ⛔ RETIRED | 0/9 filters |
| `sniper.py` | Sniper | ⛔ RETIRED | 1/9 filters |
| `scalp.py` | Scalp + Manipulation | ⛔ RETIRED | Deprecated, still in code |
| `htf_bias.py` | assess_htf_bias() | 🔧 UTILITY | Not a setup — shared HTF bias function |
| `common.py` | Shared helpers | 🔧 UTILITY | _atr(), _pip_size(), _inside_trade_session(), etc. |
| `base_types.py` | Data types | 🔧 UTILITY | SetupType enum, ICTSetupSignal, SIGNAL_QUALITY tiers |
| `library.py` | scan_all_setups() | 🔧 ORCHESTRATOR | Wires all setups together |

---

## THE 9 PRECISION FILTERS (Context Score)

Every setup is scored out of 9. Minimum 6/9 required to fire live:

1. HTF bias alignment (Daily or H4 confirmed direction)
2. Kill zone (hard gate — LONDON_OPEN, NY_OPEN, or LONDON_CLOSE only)
3. Premium/discount zone (price in correct half of structural range)
4. Liquidity level proximity (near PDH/PDL/equal high/low/mapped level)
5. MSS — Market Structure Shift
6. Displacement candle (body > 55% of range)
7. FVG or OB retest (entry into imbalance zone)
8. Sweep event (prior liquidity grab)
9. Momentum confirmation (2/3 recent candles confirm direction)

---

## KILL ZONE TIMES (CAT = UTC+2)

| Session | CAT | UTC |
|---------|-----|-----|
| LONDON_OPEN | 04:00–07:00 | 02:00–05:00 |
| NY_OPEN | 09:00–12:00 | 07:00–10:00 |
| LONDON_CLOSE | 12:00–14:00 | 10:00–12:00 |
| DEAD_ZONE | Everything else | — |

**CRITICAL:** `_session_name_cat()` in `common.py` was previously wrong. Was fixed in Phase 3 (commit ee437e4). Always verify times are in CAT before touching session logic.

---

## CONFIDENCE ENGINE (confidence_model.py)

A standalone calibration model that replaced the old additive confidence layer system.

**Architecture:**
- **Lockout mode** (< 50 clean trades): All setups start at base confidence **0.52**. Context adjustments only (±0.15 max). Ceiling **0.68**.
- **Calibrated mode** (≥ 50 clean trades): Base = empirical win rate from clean post-Phase3 data. Ceiling = win_rate + 0.10 (max 0.82).

**Clean data boundary:** `2026-05-22` (Phase 3 commit ee437e4)
**Lockout threshold:** 50 clean trades per setup
**Floor:** 0.50 — below this, no trade fires

**Key config block in settings.json:**
```json
"confidence_engine": {
    "enabled": true,
    "lockout_threshold": 50,
    "clean_data_boundary": "2026-05-22",
    "lockout_base_confidence": 0.52,
    "lockout_ceiling": 0.68,
    "floor": 0.50
}
```

---

## WHAT HAS BEEN BUILT (Phase History)

### Phase 1 — Architecture Fixes (commit: ee437e4)
- Unified `analyze()` around `assess_htf_bias()` — removed `get_htf_bias()`
- PDH/PDL now passed to `scan_all_setups()` from `analyze()`
- Kill zone hard gate added (not advisory bonus)
- CAT session times fixed in `_session_name_cat()`
- FVG mitigation standardised to close-based everywhere
- Dead code removed from LSR implementation

### Phase 2 — Setup Quality Fixes
- Turtle Soup N-bar bug fixed (reference period excluded sweep candle)
- FVG_CONTINUATION SL bug fixed (was `fvg.low * 0.998` = 25 pip SL on GBPUSD)
- Stop Hunt fallback path disabled (mapped path only)
- Engulfing requires liquidity map (not optional)
- LSR phantom confidence bonuses (+0.06, +0.05, +0.03) replaced with named scoring
- CHOCH sweep validation added (wick + close-back rejection + 2 pip minimum)
- ATR-scaled SL buffers throughout

### Phase 3 — Precision Gates (commit: ee437e4)
- HTF bias hard gate added to every enabled setup
- Kill zone hard gate added to every enabled setup
- Premium/discount zone filter added to CHOCH, ENGULFING, FVG_ENTRY, FVG_CONTINUATION
- Stop Hunt fallback → return None
- Turtle Soup requires mapped liquidity near swept N-bar level
- `htf_bias` and `session_time_cat` now passed through `scan_all_setups()` to all setups
- Hard-veto cache fixed in `bot_engine.py` (was no-op `pass`)
- SCALP and MANIPULATION added to disabled_setups

### Phase 4 — Confidence Engine
- `confidence_model.py` built from scratch
- Replaces 7-layer additive confidence system
- 50-trade lockout before calibration data influences anything
- Pre-Phase3 trade data excluded (boundary: 2026-05-22)
- `/confidence/calibration` API endpoint added

### Phase 5 — Pattern Brain (04_BRAIN/)
- 16 months of CSV data processed (39 files, 8 symbols)
- 38 features engineered per M15 bar
- Option C outcome labeling (max up/down move in 50 forward bars)
- 76 strategy documents discovered and written
- **8 VALIDATED patterns (survived holdout test):**
  1. XAUUSD Wednesday SELL — 64% train → **81.8% validation** 🔥
  2. XAUUSD London Close SESSION SELL — 65.3% → **77.1%**
  3. XAUUSD London Close HOURLY SELL (x2) — 66-68% → **75%**
  4. EURJPY Friday SELL — 61% → **72.6%**
  5. XAUUSD Monday BUY — 69.6% → **66.7%**
  6. EURJPY Asian BUY — 71.2% → 63%
  7. EURJPY London BUY — 61% → 62.5%
- Large-sample tree patterns (GBPUSD 3,503 occ, USDJPY 2,411 occ) — **pending validation** (next task: fix validate_patterns_on_holdout() to test tree rules)

### Phase 6 — FVG Golden Setup Promotion (2026-06-01)
- Demoted `FVG_ENTRY` and promoted `FVG` (using `SetupType.FVG`) as the primary high-conviction/golden setup per Future's instructions.
- Refactored `fvg_entry_golden.py` into `fvg_golden.py` (using `detect_fvg_golden`).
- Refactored `golden_library.py`, `ict_strategy.py`, `golden_validator.py`, `run_golden_revalidation.py`, `run_golden_edge_test.py`, and `settings.json` to seamlessly integrate `SetupType.FVG`.
- Mapped both `"FVG"` and `"FVG_ENTRY"` to FVG ML features in `brain_gate.py` and calibration counts in `confidence_model.py` for backward compatibility.

---

## CURRENT KNOWN BUGS AND OUTSTANDING TASKS

### 🔴 CRITICAL — Fix Before Any Live Session
1. **Daily loss cap = 0.00** in settings.json — guard is disabled
2. **Total open risk cap = 0.00** — disabled
3. **bypass_rr_checks = true** — minimum RR check disabled
4. **Correlation guard disabled** — EURUSD/GBPUSD double exposure possible
5. **Brain model path mismatch** — `brain_gate.py` looks in `01_LIVE_BOT/04_BRAIN`, model is in root `04_BRAIN`
6. **ML brain fails open** — if model missing, all trades allowed

### 🟡 OUTSTANDING WORK
- Validate large-sample tree patterns (prompt written, not yet run)
- Backtester parity test (prompt written: `backtest_parity_test.py` exists)
- Integrate 8 validated brain patterns into `pattern_gate.py` as confidence adjusters
- CHOCH and BOS detector hardening (prompt written — sweep validation, momentum quality, structural SL, candle timestamp fix)
- `test_trading_journal_bias_priority` — pre-existing failing test, do not fix yet

---

## PERFORMANCE DATA (from DB: trading_memory_5047375529.db)

**Overall (1,378 closed trades, all history):**
- Net P&L: **-$4,679.17**
- Win rate: **44.56%**
- Realised RR: **0.95** ($26.98 avg win / $27.13 avg loss — below 1.0)
- EV/trade: **-$3.40**
- Daily P&L: **-$123.14**

**By Session:**
| Session | Trades | Win Rate | Net P&L | PF |
|---------|--------|----------|---------|-----|
| DEAD_ZONE | 774 | 44.57% | **-$3,085.63** | 0.75 |
| LONDON_OPEN | 199 | 47.74% | -$1,137 | 0.71 |
| NY_OPEN | 149 | 52.35% | **+$124.14** | 1.07 |
| LONDON_CLOSE | 42 | 50.00% | -$101 | 0.86 |

**By Setup (post-Phase3 estimate):**
| Setup | WR | EV/trade | Status |
|-------|-----|----------|--------|
| ENGULFING | 64.49% | +$2.06 | 🟢 Only positive EV |
| STOP_HUNT | 50.00% | +$0.22 | 🟡 Marginal |
| CHOCH | 43.33% | -$1.63 | 🔴 Negative EV |
| FVG_ENTRY | 50.93% | -$2.81 | 🔴 Negative EV |
| LSR | 39.47% | -$12.56 | 🔴 Worst — disable? |
| TURTLE_SOUP | N/A | N/A | No data yet |

---

## DESIGN PRINCIPLES (NEVER VIOLATE)

1. **Precision over frequency.** Trade frequency magnifies what exists. If the edge is bad, more trades make more losses faster.
2. **One source of truth for HTF bias.** `assess_htf_bias()` in `htf_bias.py`. No other bias system. No parallel computation.
3. **Kill zone is a hard gate.** Not a confidence bonus. Signals outside kill zones are blocked, period.
4. **50-trade lockout.** No calibration data influences confidence until 50 clean post-Phase3 trades exist per setup.
5. **Clean data boundary.** Pre-2026-05-22 trade data is not used for calibration. The old system was broken.
6. **Legacy code stays behind flags.** The old additive confidence system is behind `USE_CALIBRATED_CONFIDENCE = False`. Do not delete it.
7. **No new setups.** Fix the precision of existing setups before adding anything new.
8. **All confidence decisions produce a log line.** `CONFIDENCE_CALIBRATION:` must appear in every calibration decision.
9. **NEVER run backtests or validation scripts without explicit instructions.** Do not run backtests (e.g. revalidation or edge discovery) unless Future explicitly commands you to do so.

---

## ACTIVE CONFIG STATE (settings.json)

- **active_profile:** `Default`
- **execute_on_any_signal:** `false` (must stay false)
- **enforce_killzones:** currently advisory — Phase 3 gates are the real enforcement
- **confidence_engine.enabled:** `true`
- **bypass_rr_checks:** `true` ← MUST BE SET TO FALSE
- **daily_loss_cap:** `0.00` ← MUST BE SET (e.g. 3% = $185)
- **total_open_risk_cap:** `0.00` ← MUST BE SET
- **Enabled setups:** CHOCH, LSR, FVG_ENTRY, FVG_CONTINUATION, STOP_HUNT, ENGULFING, TURTLE_SOUP
- **Disabled setups:** SCALP, MANIPULATION, SNIPER, PIN_BAR, BOS, ORDER_BLOCK, and all continuation setups

---

## GIT STATE (last known)

- **Active branch:** `main`
- **Last commit:** `ee437e4` — "Raise enabled setup precision gates" (Phase 3)
- **Uncommitted:** `bot_engine.py` has logging changes (17-line diff)
- **Stashes:**
  - `stash@{0}` — settings/logs/backtest/old trading_memory.py — review before applying
  - `stash@{1}` — generated backtest data — drop or archive
  - `stash@{2}` — trading_memory.py change — review separately
- **Branches to delete:** `codex/revert-apr8-performance-baseline`, `codex/today-pre-rollback-2026-05-05`
- **Do NOT merge:** `codex/macro-liquidity-main` — predates Phase 3 architecture

---

## DATABASE SCHEMA (key tables)

**trades table columns:**
`id, symbol, direction, setup_type, kill_zone, entry_price, sl_price, tp_price, exit_price, pnl, commission, swap, entry_time, exit_time, exit_reason`

**Important:**
- Use `kill_zone` not `session` for session field
- Use `pnl` not `profit` for P&L field
- Use `exit_time` not `close_time`
- Commission and swap are NOT included in `pnl` — add separately for true net P&L
- Pre-Phase3 data (before 2026-05-22) is unreliable — filter it out for calibration

---

## WHAT TO START EVERY SESSION WITH

```
1. Read OPUS34_SKILL.md (this file)
2. Run: git status
3. Run: git log --oneline -5
4. Check which profile is active in settings.json
5. Confirm confidence_engine.enabled = true in settings.json
6. Ask Future what he wants to work on today
7. Do NOT assume any file matches what is described here — read it first
```

---

## FUTURE'S PREFERENCES AND CONTEXT

- Based in **Gaborone, Botswana** (CAT timezone = UTC+2)
- Runs **Greenzikh** (multi-service business) alongside this project
- Building **FirstMinds** (AI automation startup for African businesses)
- Currently completing an **IT Technician internship**
- Footballer — trains gym 3x/week + pitch 4x/week
- Deep personal Bible study (currently working through the Gospels)
- Prefers direct, no-fluff communication
- Wants brutal honesty on the bot — not encouragement
- Long-term target: **$200/day** from Opus34
- Hardware: Intel i5-7300U, 8GB RAM — no GPU (affects any local ML work)

---

## HOW TO USE THIS SKILL FILE

**For Codex/coding agents:**
Place this file at the repo root as `OPUS34_SKILL.md`. Start every session with:
```
Read OPUS34_SKILL.md completely before doing anything else.
```

**For Claude (this conversation):**
Paste the contents of this file at the start of any new conversation where context has been lost.

**Update this file** whenever:
- A new phase is completed and committed
- Config state changes significantly
- A new component is built
- Performance data is updated from the database
- Outstanding tasks are resolved

---

*This file was generated from 16+ hours of active development conversations covering the complete Opus34 architecture, audit history, and build plan.*
