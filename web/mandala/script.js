const storageKey = "mandala-detail-hold-seconds";

const cx = 54.78;
const cy = 50.25;

function polar(rx, ry, degrees) {
  const radians = (degrees * Math.PI) / 180;
  return {
    x: cx + rx * Math.cos(radians),
    y: cy + ry * Math.sin(radians),
  };
}

const size = {
  center: "clamp(320px, 38vw, 560px)",
  continent: "clamp(300px, 36vw, 540px)",
  subcontinent: "clamp(260px, 31vw, 460px)",
  offering: "clamp(300px, 35vw, 520px)",
  wideOffering: "clamp(360px, 42vw, 620px)",
  jewel: "clamp(300px, 35vw, 520px)",
  deity: "clamp(340px, 39vw, 580px)",
  celestial: "clamp(300px, 34vw, 500px)",
};

const calibratedPos = {
  1: { x: 47.4, y: 49.6 },
  2: { x: 47.6, y: 84.6 },
  3: { x: 9.8, y: 49.0 },
  4: { x: 47.3, y: 10.8 },
  5: { x: 85.0, y: 49.2 },
  6: { x: 34.5, y: 82.4 },
  7: { x: 58.6, y: 82.5 },
  8: { x: 10.7, y: 38.0 },
  9: { x: 10.9, y: 58.8 },
  10: { x: 58.8, y: 13.8 },
  11: { x: 36.4, y: 13.8 },
  12: { x: 84.8, y: 56.4 },
  13: { x: 84.8, y: 38.4 },
  14: { x: 47.4, y: 79.4 },
  15: { x: 16.0, y: 48.8 },
  16: { x: 47.5, y: 17.5 },
  17: { x: 78.5, y: 48.8 },
  18: { x: 47.4, y: 73.6 },
  19: { x: 22.5, y: 48.7 },
  20: { x: 47.5, y: 23.9 },
  21: { x: 73.3, y: 48.6 },
  22: { x: 34.6, y: 62.1 },
  23: { x: 34.5, y: 36.4 },
  24: { x: 61.5, y: 36.1 },
  25: { x: 61.5, y: 61.4 },
  26: { x: 47.4, y: 67.8 },
  27: { x: 28.8, y: 48.0 },
  28: { x: 47.5, y: 29.8 },
  29: { x: 67.4, y: 48.6 },
  30: { x: 38.7, y: 56.9 },
  31: { x: 38.6, y: 39.6 },
  32: { x: 57.3, y: 39.0 },
  33: { x: 57.4, y: 57.5 },
  34: { x: 47.5, y: 61.0 },
  35: { x: 47.4, y: 36.2 },
  36: { x: 35.0, y: 48.8 },
  37: { x: 60.6, y: 48.7 },
};

const circleLabels = {
  1: ["1", "须弥"],
  2: ["2", "东胜"],
  3: ["3", "南瞻"],
  4: ["4", "西牛"],
  5: ["5", "北俱"],
  6: ["6", "身洲"],
  7: ["7", "胜身"],
  8: ["8", "拂洲"],
  9: ["9", "妙拂"],
  10: ["10", "行洲"],
  11: ["11", "胜道"],
  12: ["12", "恶音"],
  13: ["13", "恶对"],
  14: ["14", "宝山"],
  15: ["15", "宝树"],
  16: ["16", "宝牛"],
  17: ["17", "稻"],
  18: ["18", "金轮"],
  19: ["19", "如意"],
  20: ["20", "玉女"],
  21: ["21", "大臣"],
  22: ["22", "大象"],
  23: ["23", "绀马"],
  24: ["24", "将军"],
  25: ["25", "宝瓶"],
  26: ["26", "嬉女"],
  27: ["27", "鬘女"],
  28: ["28", "歌女"],
  29: ["29", "舞女"],
  30: ["30", "花女"],
  31: ["31", "香女"],
  32: ["32", "灯女"],
  33: ["33", "涂香"],
  34: ["34", "日"],
  35: ["35", "月"],
  36: ["36", "宝伞"],
  37: ["37", "胜幢"],
};

const items = [
  { id: 1, name: "须弥山王", width: size.center, edge: 23 },
  { id: 2, name: "东胜身洲", width: size.continent, edge: 19 },
  { id: 3, name: "南瞻部洲", width: size.continent, edge: 19 },
  { id: 4, name: "西牛货洲", width: size.continent, edge: 19 },
  { id: 5, name: "北俱卢洲", width: size.continent, edge: 19 },
  { id: 6, name: "身洲", width: size.subcontinent, edge: 15 },
  { id: 7, name: "胜身洲", width: size.subcontinent, edge: 15 },
  { id: 8, name: "拂洲", width: size.subcontinent, edge: 15 },
  { id: 9, name: "妙拂洲", width: size.subcontinent, edge: 15 },
  { id: 10, name: "行洲", width: size.subcontinent, edge: 15 },
  { id: 11, name: "胜道行洲", width: size.subcontinent, edge: 15 },
  { id: 12, name: "恶音洲", width: size.subcontinent, edge: 15 },
  { id: 13, name: "恶音对洲", width: size.subcontinent, edge: 15 },
  { id: 14, name: "珍宝山", width: size.offering, edge: 18 },
  { id: 15, name: "如意树", width: size.offering, edge: 18 },
  { id: 16, name: "如意牛", width: size.wideOffering, edge: 20 },
  { id: 17, name: "自然稻", width: size.wideOffering, edge: 20 },
  { id: 18, name: "金轮宝", width: size.jewel, edge: 18 },
  { id: 19, name: "如意宝", width: size.jewel, edge: 18 },
  { id: 20, name: "玉女宝", width: size.jewel, edge: 18 },
  { id: 21, name: "大臣宝", width: size.jewel, edge: 18 },
  { id: 22, name: "大象宝", width: size.jewel, edge: 18 },
  { id: 23, name: "绀马宝", width: size.jewel, edge: 18 },
  { id: 24, name: "将军宝", width: size.jewel, edge: 18 },
  { id: 25, name: "宝藏瓶", width: size.jewel, edge: 18 },
  { id: 26, name: "嬉女", width: size.deity, edge: 18 },
  { id: 27, name: "鬘女", width: size.deity, edge: 18 },
  { id: 28, name: "歌女", width: size.deity, edge: 18 },
  { id: 29, name: "舞女", width: size.deity, edge: 18 },
  { id: 30, name: "花女", width: size.deity, edge: 18 },
  { id: 31, name: "香女", width: size.deity, edge: 18 },
  { id: 32, name: "灯女", width: size.deity, edge: 18 },
  { id: 33, name: "涂香女", width: size.deity, edge: 18 },
  { id: 34, name: "日", width: size.celestial, edge: 18 },
  { id: 35, name: "月", width: size.celestial, edge: 18 },
  { id: 36, name: "珍宝伞", width: size.celestial, edge: 18 },
  { id: 37, name: "尊胜幢", width: size.celestial, edge: 18 },
].map((item) => ({
  ...item,
  pos: calibratedPos[item.id],
  label: circleLabels[item.id],
  src: item.id <= 13
    ? ""
    : `./assets/details/${String(item.id).padStart(2, "0")}-${item.name}.${imageExt(item.id)}`,
}));

function imageExt(id) {
  if ([14, 15, 16, 17, 25, 36, 37].includes(id)) return "png";
  if (id >= 18 && id <= 35) return "jpg";
  return "png";
}

const stage = document.querySelector("#stage");
const mandalaSvg = document.querySelector("#mandalaSvg");
const detail = document.querySelector("#detail");
const detailImage = document.querySelector("#detailImage");
const detailText = document.querySelector("#detailText");
const detailCaption = document.querySelector("#detailCaption");
const marker = document.querySelector("#marker");
const connector = document.querySelector("#connector");
const connectorLine = document.querySelector("#connectorLine");
const connectorOrigin = document.querySelector("#connectorOrigin");
const statusToast = document.querySelector("#statusToast");
const statusIcon = document.querySelector("#statusIcon");
const statusTitle = document.querySelector("#statusTitle");
const statusMeta = document.querySelector("#statusMeta");
const vectorItemNodes = new Map();
const imageCache = new Map();
let radianceLayer = null;

let playing = false;
let paused = true;
let currentIndex = 0;
let elapsed = 0;
let lastFrame = 0;
let frameId = 0;
let currentItem = null;
let durationSeconds = savedSeconds();
let activeStartPoint = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let activeFinalPoint = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let statusTimer = 0;
let pointerState = null;
let ignoreNextDblClickUntil = 0;
let imageLoadToken = 0;

const enterMs = 920;
const exitMs = 560;
const transparentPixel = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
const svgNS = "http://www.w3.org/2000/svg";

function svgEl(tag, attrs = {}, children = []) {
  const el = document.createElementNS(svgNS, tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      el.setAttribute(key, String(value));
    }
  });
  children.forEach((child) => el.appendChild(child));
  return el;
}

function renderMandala() {
  mandalaSvg.replaceChildren();
  vectorItemNodes.clear();
  radianceLayer = svgEl("g", { class: "mandala-active-radiance", "aria-hidden": "true" });
  mandalaSvg.appendChild(radianceLayer);

  items.forEach((item) => {
    const group = svgEl("g", {
      class: `mandala-item mandala-${vectorKind(item.id)}`,
      "data-id": item.id,
      transform: `translate(${item.pos.x} ${item.pos.y})`,
    });
    renderVectorCircle(group, item);
    mandalaSvg.appendChild(group);
    vectorItemNodes.set(item.id, group);
  });
}

function preloadDetailImages() {
  items.forEach((item) => {
    if (!item.src) return;
    const image = new Image();
    image.decoding = "async";
    image.src = item.src;
    imageCache.set(item.id, image);
  });
}

function vectorKind(id) {
  if (id === 1) return "center";
  if (id >= 2 && id <= 5) return "continent";
  if (id >= 6 && id <= 13) return "subcontinent";
  if (id >= 14 && id <= 17) return "offering";
  if (id >= 18 && id <= 25) return "treasure";
  if (id >= 26 && id <= 33) return "goddess";
  return "celestial";
}

function vectorRadius(id) {
  if (id === 1) return 4.8;
  if (id >= 2 && id <= 5) return 5.0;
  if (id >= 6 && id <= 13) return 3.85;
  if (id >= 14 && id <= 17) return 4.15;
  return 4.0;
}

function renderVectorCircle(group, item) {
  const radius = vectorRadius(item.id);
  group.appendChild(svgEl("circle", { class: "mandala-source-ring", r: radius + 0.9 }));
  group.appendChild(svgEl("circle", { class: "mandala-circle", r: radius }));
  const text = svgEl("text", {
    class: `mandala-text${item.label.join("").length > 4 ? " mandala-text--small" : ""}`,
  });
  item.label.forEach((line, index) => {
    text.appendChild(svgEl("tspan", {
      x: 0,
      dy: index === 0 ? "-0.62em" : "1.12em",
    }, [document.createTextNode(line)]));
  });
  group.appendChild(text);
}

function drawMountain(group) {
  group.appendChild(svgEl("path", { class: "mandala-icon", d: "M-1.25 .85 L0 -1.35 L1.25 .85 Z" }));
  group.appendChild(svgEl("path", { class: "mandala-red", d: "M-.72 .84 L0 -.36 L.72 .84 Z" }));
  group.appendChild(svgEl("rect", { class: "mandala-icon", x: -1.05, y: 0.82, width: 2.1, height: 0.34, rx: 0.08 }));
  group.appendChild(svgEl("circle", { class: "mandala-gem", cx: 0, cy: -0.25, r: 0.22 }));
}

function drawContinent(group, id) {
  const shapes = {
    2: "M-1.35 0 C-.8 -.7 .8 -.7 1.35 0 C.8 .7 -.8 .7 -1.35 0Z",
    3: "M-1.18 -.62 L1.18 -.62 L.76 .72 L-.76 .72 Z",
    4: "M-1.25 -.35 C-.4 -1.05 .4 -1.05 1.25 -.35 C.72 .95 -.72 .95 -1.25 -.35Z",
    5: "M-1.05 -.85 L1.05 -.85 L1.05 .85 L-1.05 .85 Z",
  };
  group.appendChild(svgEl("path", { class: "mandala-icon", d: shapes[id] }));
  group.appendChild(svgEl("circle", { class: "mandala-gem", cx: 0, cy: 0, r: 0.22 }));
}

function drawSubcontinent(group, id) {
  const angle = ((id - 6) % 8) * 45;
  group.appendChild(svgEl("ellipse", { class: "mandala-icon", cx: 0, cy: 0, rx: 1.05, ry: 0.46, transform: `rotate(${angle})` }));
  group.appendChild(svgEl("circle", { class: "mandala-gem", cx: 0, cy: 0, r: 0.16 }));
}

function drawGemMountain(group) {
  group.appendChild(svgEl("path", { class: "mandala-icon", d: "M-1.05 .8 L-.45 -.28 L0 -1.05 L.45 -.28 L1.05 .8 Z" }));
  group.appendChild(svgEl("circle", { class: "mandala-gem", cx: 0, cy: -0.28, r: 0.22 }));
}

function drawTree(group) {
  group.appendChild(svgEl("path", { class: "mandala-leaf", d: "M0 -1.18 C-.95 -.96 -1.25 -.22 -.54 .1 C-1 .55 -.55 1.1 0 .62 C.55 1.1 1 .55 .54 .1 C1.25 -.22 .95 -.96 0 -1.18Z" }));
  group.appendChild(svgEl("path", { class: "mandala-icon", d: "M-.12 .2 L.12 .2 L.18 1.12 L-.18 1.12 Z" }));
}

function drawCow(group) {
  group.appendChild(svgEl("ellipse", { class: "mandala-white", cx: 0, cy: 0.18, rx: 1.02, ry: 0.52 }));
  group.appendChild(svgEl("circle", { class: "mandala-white", cx: 0.92, cy: -0.12, r: 0.34 }));
  group.appendChild(svgEl("path", { class: "mandala-icon", d: "M.74 -.45 L.52 -.8 M1.06 -.45 L1.28 -.8 M-.62 .58 L-.62 1 M.34 .58 L.34 1" }));
}

function drawRice(group) {
  group.appendChild(svgEl("path", { class: "mandala-icon", d: "M0 1.08 C.05 .35 .02 -.32 0 -1.05" }));
  [-0.46, -0.22, 0.02, 0.26, 0.5].forEach((y, index) => {
    const side = index % 2 === 0 ? -1 : 1;
    group.appendChild(svgEl("ellipse", { class: "mandala-leaf", cx: side * 0.34, cy: y, rx: 0.18, ry: 0.38, transform: `rotate(${side * 34} ${side * 0.34} ${y})` }));
  });
}

function drawWheel(group) {
  group.appendChild(svgEl("circle", { class: "mandala-icon", cx: 0, cy: 0, r: 0.92 }));
  group.appendChild(svgEl("circle", { class: "mandala-red", cx: 0, cy: 0, r: 0.24 }));
  for (let i = 0; i < 8; i += 1) {
    const a = (Math.PI * 2 * i) / 8;
    group.appendChild(svgEl("line", { class: "mandala-icon", x1: 0, y1: 0, x2: Math.cos(a) * 0.84, y2: Math.sin(a) * 0.84 }));
  }
}

function drawCintamani(group) {
  group.appendChild(svgEl("path", { class: "mandala-icon", d: "M-.85 .78 C-.48 .05 -.25 -.55 0 -1.16 C.25 -.55 .48 .05 .85 .78 Z" }));
  group.appendChild(svgEl("circle", { class: "mandala-gem", cx: 0, cy: 0.2, r: 0.44 }));
  group.appendChild(svgEl("circle", { class: "mandala-gem", cx: -0.38, cy: 0.46, r: 0.28 }));
  group.appendChild(svgEl("circle", { class: "mandala-gem", cx: 0.38, cy: 0.46, r: 0.28 }));
}

function drawLady(group) {
  drawSeatedFigure(group, "mandala-red");
  group.appendChild(svgEl("path", { class: "mandala-leaf", d: "M.62 -.18 C1.15 -.62 1.16 .18 .66 .2" }));
}

function drawMinister(group) {
  drawSeatedFigure(group, "mandala-blue");
  group.appendChild(svgEl("rect", { class: "mandala-gem", x: 0.48, y: -0.1, width: 0.42, height: 0.34, rx: 0.08 }));
}

function drawGeneral(group) {
  drawSeatedFigure(group, "mandala-blue");
  group.appendChild(svgEl("path", { class: "mandala-icon", d: "M.42 .18 L1.08 -.72 M.86 -.74 L1.08 -.72 L1.04 -.5" }));
}

function drawSeatedFigure(group, robeClass) {
  group.appendChild(svgEl("circle", { class: "mandala-white", cx: 0, cy: -0.58, r: 0.28 }));
  group.appendChild(svgEl("path", { class: robeClass, d: "M-.68 .72 C-.28 -.1 .28 -.1 .68 .72 Z" }));
  group.appendChild(svgEl("path", { class: "mandala-icon", d: "M-.46 -.84 L0 -1.14 L.46 -.84 M-.82 .78 C-.32 1.06 .32 1.06 .82 .78" }));
}

function drawElephant(group) {
  group.appendChild(svgEl("ellipse", { class: "mandala-white", cx: -0.12, cy: 0.16, rx: 1.02, ry: 0.56 }));
  group.appendChild(svgEl("circle", { class: "mandala-white", cx: 0.74, cy: -0.12, r: 0.38 }));
  group.appendChild(svgEl("path", { class: "mandala-icon", d: "M1.02 .08 C1.38 .45 .9 .72 .82 .2 M-.7 .62 L-.78 1 M.2 .62 L.16 1 M-.45 -.42 L.28 -.42 L.12 -.78 L-.28 -.78 Z" }));
}

function drawHorse(group) {
  group.appendChild(svgEl("ellipse", { class: "mandala-white", cx: -0.1, cy: 0.05, rx: 0.98, ry: 0.42 }));
  group.appendChild(svgEl("path", { class: "mandala-white", d: "M.56 -.22 L1.05 -.76 L1.2 -.18 Z" }));
  group.appendChild(svgEl("path", { class: "mandala-blue", d: "M.58 -.22 L.9 -.72 L.78 -.08 Z" }));
  group.appendChild(svgEl("path", { class: "mandala-icon", d: "M-.65 .42 L-.9 1 M-.18 .42 L-.24 1 M.34 .38 L.5 .96 M-.3 -.34 L.3 -.34 L.1 -.7 Z" }));
}

function drawVase(group) {
  group.appendChild(svgEl("path", { class: "mandala-icon", d: "M-.48 -1 L.48 -1 L.34 -.48 C.9 -.15 .75 .82 0 1.08 C-.75 .82 -.9 -.15 -.34 -.48 Z" }));
  group.appendChild(svgEl("path", { class: "mandala-leaf", d: "M-.5 .15 C-1.15 -.1 -1.12 .66 -.42 .5 M.5 .15 C1.15 -.1 1.12 .66 .42 .5" }));
  group.appendChild(svgEl("circle", { class: "mandala-gem", cx: 0, cy: -1.08, r: 0.18 }));
}

function drawOfferingGoddess(group, id) {
  drawSeatedFigure(group, id % 2 === 0 ? "mandala-red" : "mandala-leaf");
  if (id === 27) group.appendChild(svgEl("path", { class: "mandala-icon", d: "M-.72 -.08 C-.25 -.58 .25 -.58 .72 -.08" }));
  if (id === 28) group.appendChild(svgEl("path", { class: "mandala-icon", d: "M-.82 .08 C-.2 -.42 .42 -.26 .82 -.7" }));
  if (id === 29) group.appendChild(svgEl("path", { class: "mandala-icon", d: "M-.8 -.12 C-.36 .18 .36 .18 .8 -.12" }));
  if (id === 30) group.appendChild(svgEl("circle", { class: "mandala-red", cx: 0.66, cy: -0.1, r: 0.22 }));
  if (id === 31) group.appendChild(svgEl("path", { class: "mandala-icon", d: "M.54 .2 C.9 -.12 .42 -.38 .72 -.76" }));
  if (id === 32) group.appendChild(svgEl("path", { class: "mandala-icon", d: "M.44 .18 L.78 .18 L.7 -.24 L.52 -.24 Z M.61 -.28 C.5 -.55 .76 -.55 .65 -.28" }));
  if (id === 33) group.appendChild(svgEl("circle", { class: "mandala-gem", cx: 0.64, cy: 0, r: 0.2 }));
}

function drawSun(group) {
  group.appendChild(svgEl("circle", { class: "mandala-red", cx: 0, cy: 0, r: 0.62 }));
  for (let i = 0; i < 12; i += 1) {
    const a = (Math.PI * 2 * i) / 12;
    group.appendChild(svgEl("line", { class: "mandala-icon", x1: Math.cos(a) * 0.76, y1: Math.sin(a) * 0.76, x2: Math.cos(a) * 1.1, y2: Math.sin(a) * 1.1 }));
  }
}

function drawMoon(group) {
  group.appendChild(svgEl("path", { class: "mandala-white", d: "M.74 -1 C-.8 -.78 -.82 .78 .74 1 C-.14 .52 -.14 -.52 .74 -1Z" }));
}

function drawUmbrella(group) {
  group.appendChild(svgEl("path", { class: "mandala-icon", d: "M-1 .1 C-.58 -.9 .58 -.9 1 .1 Z M0 .1 L0 1.1 M-.48 .48 L.48 .48" }));
}

function drawBanner(group) {
  group.appendChild(svgEl("path", { class: "mandala-icon", d: "M-.35 -1 L.55 -.75 L.18 -.35 L.6 .08 L-.35 .08 Z M-.35 -1 L-.35 1.05" }));
}

function savedSeconds() {
  const parsed = Number.parseFloat(readSavedValue());
  return Number.isFinite(parsed) && parsed > 0 ? Math.max(1.2, parsed) : 3;
}

function readSavedValue() {
  try {
    return window.localStorage.getItem(storageKey);
  } catch {
    return null;
  }
}

function cycleMs() {
  return durationSeconds * 1000;
}

function itemTimings() {
  const total = Math.max(1200, cycleMs());
  const enter = Math.min(enterMs, Math.max(520, total * 0.32));
  const exit = Math.min(exitMs, Math.max(320, total * 0.2));
  return {
    total,
    enter,
    exit,
    hold: Math.max(0, total - enter - exit),
  };
}

function saveSeconds() {
  try {
    window.localStorage.setItem(storageKey, String(durationSeconds));
  } catch {
    // Local file pages can be storage-restricted in some privacy modes.
  }
}

function adjustSeconds(delta) {
  const next = Math.max(1.2, durationSeconds + delta);
  durationSeconds = Number(next.toFixed(1));
  saveSeconds();
  showTimeStatus();
}

function formatSeconds(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function showStatus({ icon, title, meta, persistent = false, timeout = 1150, type = "pause" }) {
  window.clearTimeout(statusTimer);
  statusIcon.textContent = icon;
  statusTitle.textContent = title;
  statusMeta.textContent = meta;
  statusToast.classList.toggle("status-toast--time", type === "time");
  statusToast.classList.add("is-visible");
  statusToast.setAttribute("aria-hidden", "false");

  if (!persistent) {
    statusTimer = window.setTimeout(() => {
      hideStatus();
      if (paused) {
        showPauseStatus();
      }
    }, timeout);
  }
}

function hideStatus() {
  window.clearTimeout(statusTimer);
  statusToast.classList.remove("is-visible");
  statusToast.setAttribute("aria-hidden", "true");
}

function showPauseStatus(meta = "空格继续") {
  showStatus({
    icon: "Ⅱ",
    title: "暂停",
    meta,
    persistent: true,
    type: "pause",
  });
}

function showTimeStatus() {
  showStatus({
    icon: "秒",
    title: `间隔 ${formatSeconds(durationSeconds)} 秒`,
    meta: "右侧滑动 / ↑↓",
    timeout: 1150,
    type: "time",
  });
}

function stagePoint(pos) {
  const rect = stage.getBoundingClientRect();
  return {
    x: rect.left + (rect.width * pos.x) / 100,
    y: rect.top + (rect.height * pos.y) / 100,
  };
}

function estimatedHalfSize() {
  const measuredWidth = detail.offsetWidth;
  const measuredHeight = detail.offsetHeight;
  const width = measuredWidth || Math.min(window.innerWidth * 0.43, 680);
  const height = measuredHeight || Math.min(window.innerHeight * 0.34, 680);
  return { width: width / 2, height: height / 2 };
}

function presentationPoint(origin) {
  const half = estimatedHalfSize();
  const margin = window.innerWidth < 720 ? 14 : 22;
  const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const towardCenter = { x: center.x - origin.x, y: center.y - origin.y };
  const distance = Math.hypot(towardCenter.x, towardCenter.y);

  if (distance < 18) {
    return center;
  }

  const unit = { x: towardCenter.x / distance, y: towardCenter.y / distance };
  const edgeDistance = Math.min(
    Math.abs(unit.x) > 0.001 ? half.width / Math.abs(unit.x) : Number.POSITIVE_INFINITY,
    Math.abs(unit.y) > 0.001 ? half.height / Math.abs(unit.y) : Number.POSITIVE_INFINITY,
  );
  const gap = window.innerWidth < 720 ? 18 : 30;
  const preferredDistance = edgeDistance + gap;
  const preferred = {
    x: origin.x + unit.x * preferredDistance,
    y: origin.y + unit.y * preferredDistance,
  };

  return {
    x: Math.min(window.innerWidth - half.width - margin, Math.max(half.width + margin, preferred.x)),
    y: Math.min(window.innerHeight - half.height - margin, Math.max(half.height + margin, preferred.y)),
  };
}

function connectorEndPoint(center, scale) {
  const dx = activeStartPoint.x - center.x;
  const dy = activeStartPoint.y - center.y;
  const halfWidth = Math.max(12, ((detail.offsetWidth || 360) * scale) / 2);
  const halfHeight = Math.max(12, ((detail.offsetHeight || 360) * scale) / 2);

  if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
    return { x: center.x, y: center.y };
  }

  const edgeRatio = Math.min(
    Math.abs(dx) > 0 ? halfWidth / Math.abs(dx) : Number.POSITIVE_INFINITY,
    Math.abs(dy) > 0 ? halfHeight / Math.abs(dy) : Number.POSITIVE_INFINITY,
  );
  const insetRatio = Math.max(0, Math.min(edgeRatio * 0.92, 1));
  return {
    x: center.x + dx * insetRatio,
    y: center.y + dy * insetRatio,
  };
}

function renderConnector(center, opacity, scale) {
  const end = connectorEndPoint(center, scale);
  connectorLine.setAttribute("x1", String(activeStartPoint.x));
  connectorLine.setAttribute("y1", String(activeStartPoint.y));
  connectorLine.setAttribute("x2", String(end.x));
  connectorLine.setAttribute("y2", String(end.y));
  connectorOrigin.setAttribute("cx", String(activeStartPoint.x));
  connectorOrigin.setAttribute("cy", String(activeStartPoint.y));
  connector.style.opacity = String(Math.max(0, Math.min(0.82, opacity * 0.82)));
}

function setActiveVector(item) {
  stage.classList.add("has-active");
  vectorItemNodes.forEach((node) => node.classList.remove("is-active"));
  renderActiveRadiance(item);
  const node = vectorItemNodes.get(item.id);
  if (!node) return;
  node.classList.add("is-active");
  mandalaSvg.appendChild(node);
}

function clearActiveVector() {
  stage.classList.remove("has-active");
  vectorItemNodes.forEach((node) => node.classList.remove("is-active"));
  if (radianceLayer) {
    radianceLayer.replaceChildren();
  }
}

function renderActiveRadiance(item) {
  if (!radianceLayer) return;
  const radius = vectorRadius(item.id) + 0.95;
  const group = svgEl("g", {
    transform: `translate(${item.pos.x} ${item.pos.y})`,
  });
  group.appendChild(svgEl("circle", { class: "mandala-focus-disc", r: radius + 1.45 }));
  group.appendChild(svgEl("circle", { class: "mandala-radiance mandala-radiance--inner", r: radius }));
  group.appendChild(svgEl("circle", { class: "mandala-radiance mandala-radiance--outer", r: radius }));
  radianceLayer.replaceChildren(group);
}

function updateActiveGeometry() {
  if (!currentItem) return;
  activeStartPoint = stagePoint(currentItem.pos);
  activeFinalPoint = presentationPoint(activeStartPoint);
  marker.style.left = `${activeStartPoint.x}px`;
  marker.style.top = `${activeStartPoint.y}px`;
}

function setActiveItem(item) {
  currentItem = item;
  imageLoadToken += 1;
  const token = imageLoadToken;
  const textMode = item.id <= 13;
  detail.classList.toggle("is-text", textMode);

  if (textMode) {
    detail.classList.remove("is-loading");
    detailImage.removeAttribute("src");
    detailImage.alt = "";
    detailText.textContent = item.name;
  } else {
    detailText.textContent = "";
    detailImage.alt = `${item.id} ${item.name}`;
    detail.classList.add("is-loading");
    detailImage.src = transparentPixel;
    const cachedImage = imageCache.get(item.id);
    const revealImage = () => {
      if (token !== imageLoadToken) return;
      detailImage.src = item.src;
      detail.classList.remove("is-loading");
      updateActiveGeometry();
      renderProgress();
    };

    if (cachedImage && cachedImage.complete && cachedImage.naturalWidth > 0) {
      revealImage();
    } else if (cachedImage) {
      cachedImage.addEventListener("load", revealImage, { once: true });
      cachedImage.addEventListener("error", revealImage, { once: true });
    } else {
      revealImage();
    }
  }

  detailCaption.textContent = `${item.id} ${item.name}`;
  detail.style.setProperty("--detail-width", textMode ? "clamp(180px, 24vw, 320px)" : item.width);
  setActiveVector(item);
  updateActiveGeometry();
  detail.style.left = `${activeStartPoint.x}px`;
  detail.style.top = `${activeStartPoint.y}px`;
  renderConnector(activeStartPoint, 0, 0.06);
}

function renderProgress() {
  if (!currentItem) return;
  const { total, enter, exit } = itemTimings();
  const exitStart = total - exit;
  let scale = 1;
  let opacity = 1;
  let x = activeFinalPoint.x;
  let y = activeFinalPoint.y;

  if (elapsed < enter) {
    const t = elapsed / enter;
    const moveT = easeOutCubic(t);
    scale = 0.06 + 0.94 * moveT;
    opacity = Math.min(1, t * 1.4);
    x = activeStartPoint.x + (activeFinalPoint.x - activeStartPoint.x) * moveT;
    y = activeStartPoint.y + (activeFinalPoint.y - activeStartPoint.y) * moveT;
  } else if (elapsed > exitStart) {
    const t = (elapsed - exitStart) / exit;
    scale = 1 - 0.08 * easeInCubic(t);
    opacity = 1 - t;
  } else {
    scale = 1;
  }

  detail.style.left = `${x}px`;
  detail.style.top = `${y}px`;
  detail.style.opacity = String(Math.max(0, Math.min(1, opacity)));
  detail.style.transform = `translate(-50%, -50%) scale(${Math.max(0.06, scale)})`;
  marker.style.opacity = String(Math.max(0, Math.min(1, opacity)));
  marker.style.transform = `translate(-50%, -50%) scale(${0.68 + 0.32 * opacity})`;
  renderConnector({ x, y }, opacity, Math.max(0.06, scale));
}

function easeOutBack(t) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function easeInCubic(t) {
  return t * t * t;
}

function tick(now) {
  if (!playing) return;
  if (!lastFrame) lastFrame = now;

  if (!paused) {
    elapsed += now - lastFrame;
    renderProgress();
    if (elapsed >= itemTimings().total) {
      currentIndex += 1;
      if (currentIndex >= items.length) {
        pauseAtCycleEnd();
        return;
      }
      elapsed = 0;
      setActiveItem(items[currentIndex]);
      renderProgress();
    }
  }

  lastFrame = now;
  frameId = requestAnimationFrame(tick);
}

function startPlayback() {
  saveSeconds();
  if (playing && paused) {
    paused = false;
    lastFrame = 0;
    hideStatus();
    return;
  }

  playing = true;
  paused = false;
  currentIndex = 0;
  elapsed = 0;
  lastFrame = 0;
  setActiveItem(items[currentIndex]);
  renderProgress();
  cancelAnimationFrame(frameId);
  frameId = requestAnimationFrame(tick);
  hideStatus();
}

function pausePlayback() {
  if (!playing) return;
  paused = true;
  showPauseStatus();
}

function togglePlayback() {
  if (!playing) {
    startPlayback();
    return;
  }

  if (paused) {
    paused = false;
    lastFrame = 0;
    hideStatus();
  } else {
    paused = true;
    showPauseStatus();
  }
}

function pauseAtCycleEnd() {
  playing = false;
  paused = true;
  currentIndex = 0;
  elapsed = 0;
  lastFrame = 0;
  cancelAnimationFrame(frameId);
  detail.style.opacity = "0";
  detail.style.transform = "translate(-50%, -50%) scale(0.06)";
  marker.style.opacity = "0";
  marker.style.transform = "translate(-50%, -50%) scale(0)";
  connector.style.opacity = "0";
  clearActiveVector();
  showPauseStatus("一轮播放完成");
}

function stopPlayback() {
  playing = false;
  paused = false;
  currentIndex = 0;
  elapsed = 0;
  lastFrame = 0;
  cancelAnimationFrame(frameId);
  detail.style.opacity = "0";
  detail.style.transform = "translate(-50%, -50%) scale(0.06)";
  marker.style.opacity = "0";
  marker.style.transform = "translate(-50%, -50%) scale(0)";
  connector.style.opacity = "0";
  clearActiveVector();
  hideStatus();
}

function touchZoneWidth() {
  return Math.max(72, Math.min(140, window.innerWidth * 0.22));
}

function isInTimeZone(event) {
  return event.clientX >= window.innerWidth - touchZoneWidth();
}

function beginPointer(event) {
  if (!event.isPrimary || (event.pointerType !== "touch" && event.pointerType !== "pen")) return;
  const timeZone = isInTimeZone(event);
  if (timeZone) {
    event.preventDefault();
  }
  pointerState = {
    id: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    lastY: event.clientY,
    timeZone,
    moved: false,
    swiping: timeZone,
  };
  if (timeZone && event.target && typeof event.target.setPointerCapture === "function") {
    event.target.setPointerCapture(event.pointerId);
  }
}

function movePointer(event) {
  if (!pointerState || event.pointerId !== pointerState.id) return;
  const dx = event.clientX - pointerState.startX;
  const dy = event.clientY - pointerState.startY;
  const absX = Math.abs(dx);
  const absY = Math.abs(dy);

  if (absX > 12 || absY > 12) {
    pointerState.moved = true;
  }

  if (pointerState.timeZone) {
    event.preventDefault();
  }

  if (pointerState.timeZone && !pointerState.swiping && absY > 18 && absY > absX * 1.15) {
    pointerState.swiping = true;
  }

  if (!pointerState.swiping) return;

  event.preventDefault();
  const stepDistance = window.innerHeight < 720 ? 34 : 42;
  const steps = Math.trunc((pointerState.lastY - event.clientY) / stepDistance);

  if (steps !== 0) {
    adjustSeconds(steps * 0.5);
    pointerState.lastY -= steps * stepDistance;
  }
}

function endPointer(event) {
  if (!pointerState || event.pointerId !== pointerState.id) return;
  const endedState = pointerState;
  pointerState = null;

  if (endedState.timeZone) {
    event.preventDefault();
    return;
  }

  if (endedState.swiping || endedState.moved) return;

  const now = window.performance.now();
  const lastTap = endPointer.lastTap || { time: 0, x: 0, y: 0 };
  const distance = Math.hypot(event.clientX - lastTap.x, event.clientY - lastTap.y);

  if (now - lastTap.time <= 320 && distance <= 34) {
    event.preventDefault();
    ignoreNextDblClickUntil = Date.now() + 450;
    endPointer.lastTap = { time: 0, x: 0, y: 0 };
    togglePlayback();
    return;
  }

  endPointer.lastTap = { time: now, x: event.clientX, y: event.clientY };
}

detailImage.addEventListener("load", () => {
  updateActiveGeometry();
  renderProgress();
});

function handleKeydown(event) {
  if (event.code === "Space") {
    event.preventDefault();
    togglePlayback();
  }

  if (["ArrowUp", "Up", "ARROWUP"].includes(event.key) || ["ArrowUp", "Up", "ARROWUP"].includes(event.code)) {
    event.preventDefault();
    adjustSeconds(0.5);
  }

  if (["ArrowDown", "Down", "ARROWDOWN"].includes(event.key) || ["ArrowDown", "Down", "ARROWDOWN"].includes(event.code)) {
    event.preventDefault();
    adjustSeconds(-0.5);
  }
}

preloadDetailImages();
renderMandala();
showPauseStatus("双击/空格开始");
window.addEventListener("pointerdown", beginPointer, { passive: false });
window.addEventListener("pointermove", movePointer, { passive: false });
window.addEventListener("pointerup", endPointer, { passive: false });
window.addEventListener("pointercancel", () => {
  pointerState = null;
});
window.addEventListener("dblclick", (event) => {
  if (Date.now() < ignoreNextDblClickUntil) return;
  event.preventDefault();
  togglePlayback();
});
window.addEventListener("keydown", handleKeydown, true);
window.addEventListener("resize", () => {
  updateActiveGeometry();
  if (currentItem && elapsed >= enterMs) {
    detail.style.left = `${activeFinalPoint.x}px`;
    detail.style.top = `${activeFinalPoint.y}px`;
    renderConnector(activeFinalPoint, Number(getComputedStyle(detail).opacity), 1);
  }
});
