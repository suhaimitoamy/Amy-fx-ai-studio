#!/usr/bin/env bash
# Amy FX AI Studio — Fast Baseline Initialization & Verification Script (Harness Primitive)

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

echo "==> [Amy FX AI Studio] Working directory: $PWD"
echo "==> [Amy FX AI Studio] Node environment: $(node -v)"

echo "==> [Amy FX AI Studio] 1. Fast Syntax Validation..."
node --check app.js
node --check apps/shared/amy-gemini-live-bridge.js
node --check apps/shared/journal-analytics-pro.js
node --check lib/twelvedata-key-pool.mjs
echo "    ✓ Syntax validation clean (0 errors)"

echo "==> [Amy FX AI Studio] 2. Baseline Health Verification (Targeted Tests)..."
node --test tests/journal-analytics-pro.test.mjs tests/twelvedata-key-pool.test.mjs
echo "    ✓ Baseline targeted tests passed"
