# soozybot branding

Art for soozybot, suzy's chat bot on Twitch, Kick and Discord, in the same sticker style as
her Discord art and stream alerts. The mascot is a lilac chat bubble with a robot face (a
screen with mint eyes, pink blush, bolts for ears) and suzy's crescent moon on its antenna.
Lilac is the bot's colour, the way pink is suzy's.

Sources are in `disc-assets/src/soozybot/` (one HTML page per piece, sharing `brand.css`
and the mascot in `bot.js`). Re-render everything with:

```
node src/soozybot/render.js
```

run from `disc-assets` (or `node src/soozybot/render.js panel` for one group).

## Files and where they go

| File | Size | Where it goes |
|---|---|---|
| `soozybot-avatar.png` | 1024x1024 | Twitch: Creator Dashboard > Settings > Channel > Brand > Profile picture. Discord: Developer Portal > the bot's app > Bot > Icon (and General Information > App icon). Both crop it to a circle. |
| `soozybot-avatar-blue.png`, `soozybot-avatar-pink.png` | 1024x1024 | Alternatives to the mint one. Mint keeps the bot apart from suzy's blue avatar in chat. |
| `soozybot-discord-square.png` | 1024x1024 | Square Discord picture, laid out for the whole square (robot bigger, stickers in the corners) for places that show it uncropped or with rounded corners. Same upload spot as the avatar. |
| `soozybot-robot.png` | 1024x1024, transparent | The robot on its own, with its hard shadow. `-wink` and `-sleep` are the other moods. |
| `soozybot-robot-sticker.png` | 1024x1024, transparent | The same with a white cut line round it, so its dark outline still reads on dark backgrounds (Discord's dark theme). |
| `soozybot-twitch-banner.png` | 2400x960 (1200x480 at 2x) | Twitch: Creator Dashboard > Settings > Channel > Brand > Profile banner. |
| `soozybot-twitch-offline.png` | 1920x1080 | Twitch: Creator Dashboard > Settings > Channel > Brand > Video player banner (the offline screen). |
| `panels/panel-*.png` | 640x200 (320x100 at 2x) | Twitch: the bot's channel > About > Edit panels > add an image panel per file. Transparent background. |
| `soozybot-discord-banner.png` | 1360x480 (680x240 at 2x) | Discord: Developer Portal > the bot's app > Bot > Banner. The lower left stays empty for the profile picture Discord lays over it. |

## Panels and their links

| Panel | Link it to |
|---|---|
| `panel-about.png` | nothing, or a text panel below it explaining the bot |
| `panel-commands.png` | the bot's public commands page (what `!commands` sends) |
| `panel-dashboard.png` | https://bot.suzy.gg |
| `panel-suzy.png` | https://twitch.tv/suzy |
| `panel-discord.png` | https://discord.gg/suzy |
| `panel-kick.png` | https://kick.com/ddooyaa |

The banners, offline screens and panels show suzy's links next to the platform logos
(twitch.tv/suzy, kick.com/ddooyaa, discord.gg/suzy, from suzy.gg's own links). The Discord
banners show the logos only: Discord shows the banner at about half size, too small for the
addresses to read.

## Pineapple version (`pineapple/`)

The old pineapple mascot (the pixel one with sunglasses) redrawn in the sticker style: a
butter pineapple with warm crosshatching, mint and lime leaves, big black sunglasses with
white glints, pink blush, suzy's crescent moon clipped to a leaf, and bubble stickers for the
under-the-sea feel. Same pages and sizes as above, rendered with `?pine` in the address
(the mascot is `pineapple()` in `src/soozybot/bot.js`). Asleep on the offline screen, with its
glasses pushed up.

Files: `soozybot-pineapple-avatar.png` (blue water; `-pink`, `-lilac`),
`soozybot-pineapple-twitch-banner.png`, `soozybot-pineapple-twitch-offline.png`,
`soozybot-pineapple-discord-banner.png`, `panels/panel-*.png`, `contact-sheet.png`.

## Pixel version (`pixel/`)

The same set with the old pineapple mascot (sunglasses, `bot.suzy.gg/local/assets/soozybot_icon.png`)
on the underwater pixel scene, pixel type and game text boxes. Same sizes and places as above:
`soozybot-pixel-avatar.png` (`-plain`: flat water), `soozybot-pixel-twitch-banner.png`,
`soozybot-pixel-twitch-offline.png`, `soozybot-pixel-discord-banner.png`, `panels/panel-*.png`,
and `contact-sheet.png`. The pineapple is always drawn at a whole multiple of its 280px size
so its pixels stay square; the panel icons redraw it from its pixel grid.

The underwater scene (`src/soozybot/pixel/seafloor.webp`) carries Gemini's sparkle mark in its
bottom right corner; it shows in the pixel Twitch banner and offline screen.

Twitch's menu names move around now and then; if one is not where the table says, the
same settings are under the channel's profile settings.
