// soozybot: the mascot and shared glyphs for the bot's art. Every element with data-bot
// gets the mascot (data-bot="happy" | "sleep" | "wink"); every [data-logo] gets a platform
// logo (twitch, kick, discord, moon).
//
// The mascot is a chat bubble with a robot face: a lilac speech bubble (its tail points
// down-left, like the bubbles in suzy's stream alerts) with a dark screen for a face, mint
// eyes and smile, pink blush, bolts for ears, and an antenna topped with suzy's crescent
// moon. viewBox 200x200; it sits inside that box with room for its drop shadow.
(() => {
  const INK = "#1B1A33";
  const MOON = "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z";
  // head: a rounded rectangle with a speech tail off its lower left
  const HEAD = "M64 52H136A34 34 0 0 1 170 86V126A34 34 0 0 1 136 160H74C64 172 46 179 30 177C41 169 46 160 45 152A34 34 0 0 1 30 126V86A34 34 0 0 1 64 52Z";
  const FACES = {
    happy: `<rect x="76" y="90" width="15" height="25" rx="7.5" fill="#9FE6CE"/><rect x="109" y="90" width="15" height="25" rx="7.5" fill="#9FE6CE"/>` +
      `<path d="M89 124q11 9 22 0" fill="none" stroke="#9FE6CE" stroke-width="5.5" stroke-linecap="round"/>`,
    sleep: `<path d="M74 104q9 8 18 0M108 104q9 8 18 0" fill="none" stroke="#9FE6CE" stroke-width="5.5" stroke-linecap="round"/>` +
      `<path d="M94 126q6 4 12 0" fill="none" stroke="#9FE6CE" stroke-width="5" stroke-linecap="round"/>`,
    wink: `<rect x="76" y="90" width="15" height="25" rx="7.5" fill="#9FE6CE"/><path d="M107 104q9-8 18 0" fill="none" stroke="#9FE6CE" stroke-width="5.5" stroke-linecap="round"/>` +
      `<path d="M89 124q11 9 22 0" fill="none" stroke="#9FE6CE" stroke-width="5.5" stroke-linecap="round"/>`,
  };
  const bot = (mood) => `<svg class="bot" viewBox="0 0 200 200">` +
    // bolts (ears), behind the head
    `<g stroke="${INK}" stroke-width="4.5"><circle cx="29" cy="106" r="11" fill="#F4A7D8"/><circle cx="171" cy="106" r="11" fill="#F4A7D8"/></g>` +
    // antenna and its moon
    `<path d="M100 52V26" stroke="${INK}" stroke-width="5.5" stroke-linecap="round"/>` +
    `<g transform="translate(84 2) scale(1.45)"><path d="${MOON}" fill="#FBE0A0" stroke="${INK}" stroke-width="1.7" stroke-linejoin="round"/></g>` +
    // head, with its hard shadow
    `<path d="${HEAD}" fill="${INK}" transform="translate(8 10)"/>` +
    `<path d="${HEAD}" fill="#C9AEFF" stroke="${INK}" stroke-width="5.5" stroke-linejoin="round"/>` +
    // a highlight on the head's top edge
    `<path d="M66 64H128" stroke="#FFFFFF" stroke-opacity=".6" stroke-width="6" stroke-linecap="round"/>` +
    // screen face
    `<rect x="52" y="74" width="96" height="68" rx="24" fill="${INK}"/>` +
    FACES[mood || "happy"] +
    // blush on the screen's edges
    `<ellipse cx="66" cy="126" rx="8" ry="4.6" fill="#F4A7D8"/><ellipse cx="134" cy="126" rx="8" ry="4.6" fill="#F4A7D8"/>` +
    `</svg>`;

  // platform logos, viewBox 24x24 (Twitch and Kick as in the stream alerts; Discord's mark)
  const LOGO = {
    twitch: '<svg viewBox="0 0 800 800"><path fill-rule="evenodd" d="M125,50l-50,125v475h150v100h100l100-100h125l175-175V50H125ZM650,450l-100,100h-150l-100,100v-100h-125V125h475v325Z"/><rect x="500" y="223.44" width="75" height="201.56"/><rect x="325" y="223.44" width="75" height="201.56"/></svg>',
    kick: '<svg viewBox="0 0 800 800"><polygon points="112.86 50 337.68 50 337.68 205.35 412.5 205.35 412.5 127.68 487.32 127.68 487.32 50 712.14 50 712.14 283.48 637.32 283.48 637.32 361.16 562.51 361.16 562.51 438.84 637.32 438.84 637.32 516.52 712.14 516.52 712.14 750 487.32 750 487.32 672.32 412.5 672.32 412.5 594.65 337.68 594.65 337.68 750 112.86 750 112.86 50"/></svg>',
    discord: '<svg viewBox="0 0 24 24"><path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.1.246.198.373.292a.077.077 0 0 1-.007.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.029 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>',
    moon: `<svg viewBox="0 0 24 24"><path d="${MOON}"/></svg>`,
  };
  // The pineapple version (?pine in the page's address): the old pixel pineapple mascot
  // redrawn in the sticker style. A butter pineapple with warm crosshatching and mint
  // leaves, big black sunglasses with white glints, pink blush, a smile, and suzy's crescent
  // moon clipped to a leaf. Moods: happy and wink wear the glasses; sleep has them pushed up
  // onto its head with its eyes closed. Same 200x200 box as the bubble bot.
  let clipN = 0;
  const pineapple = (mood) => {
    const id = "pinebody" + clipN++;
    const BODY = "M100 58C134 58 158 88 158 124S134 188 100 188S42 160 42 124S66 58 100 58Z";
    // back row first, the tall middle leaf last
    const LEAVES = [
      "M92 80C72 78 52 74 36 60C58 56 80 62 97 72Z",
      "M108 80C128 78 148 74 164 60C142 56 120 62 103 72Z",
      "M95 76C78 64 62 50 54 24C76 32 92 48 102 68Z",
      "M105 76C122 64 138 50 146 24C124 32 108 48 98 68Z",
      "M100 74C86 54 88 28 100 6C112 28 114 54 100 74Z",
    ];
    let hatch = "";
    for (let k = -120; k <= 120; k += 22) hatch += `M${100 + k - 80} 40L${100 + k + 80} 200M${100 + k + 80} 40L${100 + k - 80} 200`;
    const glasses = (y, s) => `<g transform="translate(100 ${y}) scale(${s}) translate(-100 -112)">` +
      `<path d="M46 108H154" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>` +
      `<rect x="50" y="98" width="44" height="30" rx="12" fill="${INK}"/><rect x="106" y="98" width="44" height="30" rx="12" fill="${INK}"/>` +
      `<path d="M60 121L72 104M68 124L73 117M116 121L128 104M124 124L129 117" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/></g>`;
    const face = mood === "sleep"
      ? glasses(80, 0.78) +
        `<path d="M62 118q10 8 20 0M118 118q10 8 20 0" fill="none" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>` +
        `<path d="M94 144q6 5 12 0" fill="none" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>`
      : glasses(112, 1) +
        `<path d="M86 146q14 12 28 0" fill="none" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>` +
        (mood === "wink" ? `<path d="M152 88l4 8 8 4-8 4-4 8-4-8-8-4 8-4z" fill="#FFFFFF" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>` : "");
    return `<svg class="bot" viewBox="0 0 200 200">` +
      // leaves, each with its shadow
      LEAVES.map((d) => `<path d="${d}" fill="${INK}" transform="translate(6 7)"/>`).join("") +
      LEAVES.map((d, i) => `<path d="${d}" fill="${i % 2 ? "#9FE6CE" : "#B6F5A0"}" stroke="${INK}" stroke-width="4.5" stroke-linejoin="round"/>`).join("") +
      // suzy's moon, clipped to the right leaf
      `<g transform="translate(142 8) rotate(20) scale(1.5)"><path d="${MOON}" fill="#FBE0A0" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/></g>` +
      // body, shadow, crosshatch and outline
      `<defs><clipPath id="${id}"><path d="${BODY}"/></clipPath></defs>` +
      `<path d="${BODY}" fill="${INK}" transform="translate(8 10)"/>` +
      `<path d="${BODY}" fill="#FBE0A0"/>` +
      `<path d="${hatch}" clip-path="url(#${id})" stroke="#F2B36B" stroke-width="4" fill="none"/>` +
      `<path d="M70 76C82 68 96 66 108 67" stroke="#FFFFFF" stroke-opacity=".75" stroke-width="6" stroke-linecap="round" fill="none"/>` +
      `<path d="${BODY}" fill="none" stroke="${INK}" stroke-width="5.5"/>` +
      // blush and face
      `<ellipse cx="60" cy="142" rx="10" ry="5.5" fill="#F4A7D8"/><ellipse cx="140" cy="142" rx="10" ry="5.5" fill="#F4A7D8"/>` +
      face + `</svg>`;
  };
  const PINE = /(^|[?&])pine\b/.test(location.search);
  if (PINE) document.documentElement.classList.add("pine");
  for (const el of document.querySelectorAll("[data-bot]")) el.innerHTML = PINE ? pineapple(el.dataset.bot) : bot(el.dataset.bot);
  for (const el of document.querySelectorAll("[data-logo]")) el.innerHTML = LOGO[el.dataset.logo];
  // pineapple version: bubble stickers where the page lists them (data-bubbles="x,y,size;...")
  if (PINE) for (const stage of document.querySelectorAll("[data-bubbles]")) {
    for (const spot of stage.dataset.bubbles.split(";")) {
      const [x, y, z] = spot.split(",").map(Number);
      stage.insertAdjacentHTML("beforeend", `<svg class="bub" style="left:${x}px;top:${y}px;width:${z}px;height:${z}px" viewBox="0 0 24 24">` +
        `<circle cx="12" cy="12" r="10" fill="#FFFFFF" fill-opacity=".45" stroke="${INK}" stroke-width="1.6"/>` +
        `<path d="M6.8 10.2a5.6 5.6 0 0 1 4-4" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/></svg>`);
    }
  }
  // variants: the page's #hash is added to <html> as a class (e.g. #blue -> .v-blue)
  if (location.hash) document.documentElement.classList.add("v-" + location.hash.slice(1));
})();
