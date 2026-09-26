#!/usr/bin/env bash
# Renders event-banner.html to ../800px-event.png at 1600x640 (2x of Discord's 800x320).
# Run from Git Bash: & "C:/Program Files/Git/bin/bash.exe" src/render.sh
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
chrome="/c/Program Files/Google/Chrome/Application/chrome.exe"
out="$here/../800px-event.png"
tmp="$here/.render.png"
rm -f "$tmp"
"$chrome" --headless=new --disable-gpu --hide-scrollbars \
  --window-size=800,320 --force-device-scale-factor=2 \
  --virtual-time-budget=5000 \
  --screenshot="$(cygpath -w "$tmp")" "file:///$(cygpath -m "$here/event-banner.html")" >/dev/null 2>&1
[ -s "$tmp" ] || { echo "render failed: no output" >&2; exit 1; }
mv "$tmp" "$out"
file "$out"
