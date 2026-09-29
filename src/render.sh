#!/usr/bin/env bash
# Renders event-banner.html to ../800px-event.png at 1600x640 (2x of Discord's 800x320).
# Run from Git Bash: & "C:/Program Files/Git/bin/bash.exe" src/render.sh [honeypot]
#   no argument -> the event cover, as before
#   honeypot    -> the honeypot warning banner for bot.suzy.gg (#175), 1760x600, to
#                  ../honeypot-warning.png. Copy it to bot.suzy.gg
#                  apps/bot/assets/honeypot/warning-banner.png, and an 880-wide copy to
#                  apps/web/public/honeypot-warning.png for the dashboard preview.
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
chrome="/c/Program Files/Google/Chrome/Application/chrome.exe"
page="event-banner.html"; size="800,320"; out="$here/../800px-event.png"
if [[ "${1:-}" == honeypot ]]; then
  page="honeypot-warning.html"; size="880,300"; out="$here/../honeypot-warning.png"
fi
tmp="$here/.render.png"
rm -f "$tmp"
"$chrome" --headless=new --disable-gpu --hide-scrollbars \
  --window-size="$size" --force-device-scale-factor=2 \
  --virtual-time-budget=5000 \
  --screenshot="$(cygpath -w "$tmp")" "file:///$(cygpath -m "$here/$page")" >/dev/null 2>&1
[ -s "$tmp" ] || { echo "render failed: no output" >&2; exit 1; }
mv "$tmp" "$out"
file "$out"
