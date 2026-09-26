// Renders soozybot's art to disc-assets/soozybot/ with headless Chromium (Playwright from
// the chat.suzy.gg install), waiting for the web fonts before each shot.
//   node src/soozybot/render.js            everything
//   node src/soozybot/render.js avatar     only outputs whose name contains "avatar"
const { chromium } = require("C:/Users/hovar/Documents/Projects/Suzy/chat.suzy.gg/node_modules/playwright");
const path = require("path");
const fs = require("fs");

const here = __dirname;
const out = path.join(here, "..", "..", "soozybot");
// [page#variant, css width, css height, scale, output file]
const JOBS = [
  ["avatar.html", 512, 512, 2, "soozybot-avatar.png"],
  ["avatar.html#blue", 512, 512, 2, "soozybot-avatar-blue.png"],
  ["avatar.html#pink", 512, 512, 2, "soozybot-avatar-pink.png"],
  ["avatar.html#sleep", 512, 512, 2, "soozybot-avatar-sleep.png"],
  ["discord-square.html", 512, 512, 2, "soozybot-discord-square.png"],
  ["robot.html", 512, 512, 2, "soozybot-robot.png"],
  ["robot.html#wink", 512, 512, 2, "soozybot-robot-wink.png"],
  ["robot.html#sleep", 512, 512, 2, "soozybot-robot-sleep.png"],
  ["robot.html?sticker", 512, 512, 2, "soozybot-robot-sticker.png"],
  ["twitch-banner.html", 1200, 480, 2, "soozybot-twitch-banner.png"],
  ["offline.html", 1920, 1080, 1, "soozybot-twitch-offline.png"],
  ["discord-banner.html", 680, 240, 2, "soozybot-discord-banner.png"],
  ...["about", "commands", "suzy", "discord", "kick", "dashboard"].map((p) => [`panel.html#${p}`, 320, 100, 2, `panels/panel-${p}.png`]),
  // pineapple version: the old pineapple mascot redrawn in the sticker style (pineapple/)
  ["avatar.html?pine", 512, 512, 2, "pineapple/soozybot-pineapple-avatar.png"],
  ["avatar.html?pine#lilac", 512, 512, 2, "pineapple/soozybot-pineapple-avatar-lilac.png"],
  ["avatar.html?pine#pink", 512, 512, 2, "pineapple/soozybot-pineapple-avatar-pink.png"],
  ["twitch-banner.html?pine", 1200, 480, 2, "pineapple/soozybot-pineapple-twitch-banner.png"],
  ["offline.html?pine", 1920, 1080, 1, "pineapple/soozybot-pineapple-twitch-offline.png"],
  ["discord-banner.html?pine", 680, 240, 2, "pineapple/soozybot-pineapple-discord-banner.png"],
  ...["about", "commands", "suzy", "discord", "kick", "dashboard"].map((p) => [`panel.html?pine#${p}`, 320, 100, 2, `pineapple/panels/panel-${p}.png`]),
  // pixel version: the old pineapple mascot under the sea (pixel/)
  ["pixel/avatar.html", 512, 512, 2, "pixel/soozybot-pixel-avatar.png"],
  ["pixel/avatar.html#plain", 512, 512, 2, "pixel/soozybot-pixel-avatar-plain.png"],
  ["pixel/twitch-banner.html", 1200, 480, 2, "pixel/soozybot-pixel-twitch-banner.png"],
  ["pixel/offline.html", 1920, 1080, 1, "pixel/soozybot-pixel-twitch-offline.png"],
  ["pixel/discord-banner.html", 680, 240, 2, "pixel/soozybot-pixel-discord-banner.png"],
  ...["about", "commands", "suzy", "discord", "kick", "dashboard"].map((p) => [`pixel/panel.html#${p}`, 320, 100, 2, `pixel/panels/panel-${p}.png`]),
];

(async () => {
  const only = process.argv[2];
  for (const dir of ["panels", "pixel/panels", "pineapple/panels"]) fs.mkdirSync(path.join(out, dir), { recursive: true });
  const browser = await chromium.launch();
  for (const [page, w, h, scale, file] of JOBS) {
    if (only && !file.includes(only)) continue;
    const p = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: scale });
    // the page's file, then its ?query (the pineapple version) and #hash (the variant)
    const file0 = page.match(/^[^?#]+/)[0];
    await p.goto("file:///" + path.join(here, file0).replace(/\\/g, "/") + page.slice(file0.length));
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(300);
    // panels float on Twitch's page, so they keep a transparent background
    await p.screenshot({ path: path.join(out, file), omitBackground: file.includes("panels/") || file.includes("-robot") });
    await p.close();
    console.log("wrote soozybot/" + file, `${w * scale}x${h * scale}`);
  }
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
