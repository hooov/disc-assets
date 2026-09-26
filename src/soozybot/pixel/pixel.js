// soozybot, pixel version: draws the small pixel pieces.
//   [data-pine="<cells px>"]  the pineapple from its 18x18 grid (for icons too small for the
//                              280px image; the image's few half-pixel details are dropped)
//   [data-bubble="<px>"]       a pixel air bubble, px per pixel
//   [data-zzz="<px>"]          pixel z's
(() => {
  // the mascot (bot.suzy.gg/local/assets/soozybot_icon.png), 18x18, majority colour per cell
  const PAL = { a: "#212A37", b: "#79D17D", c: "#47717B", d: "#61B480", e: "#D4614C", f: "#E4A467", g: "#F9D06D", h: "#344257", i: "#161618", j: "#F3F8FC" };
  const PINE = [
    "....abbbccbbba....",
    ".....adddcdda.....",
    ".....aaeeffaa.....",
    "....ageeeeggfa....",
    "...aeeeggggegga...",
    "...afgegggfegga...",
    "..ahhhhhhhhhhhha..",
    "..hiijiheehiijih..",
    "..hijiiihhiijiih..",
    "..hjiiihffhjiiih..",
    "..hiiiheegfhiiih..",
    "..ahhheggggehhha..",
    "..aeffeggfeggeea..",
    "..aeffeggfeggeea..",
    "...aeeffeeffeea...",
    "....aeffeeffea....",
    ".....aaeeeeaa.....",
    ".......aaaa.......",
  ];
  const BUBBLE = [
    "..wwww..",
    ".w....w.",
    "w.hh...w",
    "w.h....w",
    "w......w",
    "w......w",
    ".w....w.",
    "..wwww..",
  ];
  const ZZZ = [
    "wwwww",
    "...w.",
    "..w..",
    ".w...",
    "wwwww",
  ];
  const svgGrid = (rows, pal, px) => {
    const w = rows[0].length, h = rows.length;
    let r = "";
    rows.forEach((row, y) => [...row].forEach((ch, x) => { if (pal[ch]) r += `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${pal[ch]}"/>`; }));
    return `<svg width="${w * px}" height="${h * px}" viewBox="0 0 ${w} ${h}" shape-rendering="crispEdges">${r}</svg>`;
  };
  for (const el of document.querySelectorAll("[data-pine]")) el.innerHTML = svgGrid(PINE, PAL, +el.dataset.pine);
  for (const el of document.querySelectorAll("[data-bubble]")) el.innerHTML = svgGrid(BUBBLE, { w: "#F3F8FC", h: "#FFFFFF" }, +el.dataset.bubble);
  for (const el of document.querySelectorAll("[data-zzz]")) el.innerHTML = svgGrid(ZZZ, { w: "#F3F8FC" }, +el.dataset.zzz);
  if (location.hash) document.documentElement.classList.add("v-" + location.hash.slice(1));
})();
