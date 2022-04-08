const sectors = [
  { color: "#f82", label: "Stack" },
  { color: "#0bf", label: "10" },
  { color: "#fb0", label: "200" },
  { color: "#0fb", label: "50" },
  { color: "#b0f", label: "100" },
  { color: "#f0b", label: "5" },
  { color: "#bf0", label: "500" },
];

const tot = sectors.length;
const ctx = document.querySelector("#wheel").getContext("2d");
const dia = ctx.canvas.width;
const rad = dia / 2;
const PI = Math.PI;
const TAU = 2 * PI;
const arc = TAU / sectors.length;

const getIndex = () => Math.floor(tot - (ang / TAU) * tot) % tot;

function drawSector(sector, i) {
  const ang = arc * i;
  ctx.save();
  // COLOR
  ctx.beginPath();
  ctx.fillStyle = sector.color;
  ctx.moveTo(rad, rad);
  ctx.arc(rad, rad, rad, ang, ang + arc);
  ctx.lineTo(rad, rad);
  ctx.fill();
  // TEXT
  ctx.translate(rad, rad);
  ctx.rotate(ang + arc / 2);
  ctx.textAlign = "right";
  ctx.fillStyle = "#fff";
  ctx.font = "bold 30px sans-serif";
  ctx.fillText(sector.label, rad - 10, 10);
  //
  ctx.restore();
}

function rotate() {
  ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;
}

function engine() {
  requestAnimationFrame(engine);
}

// INIT
sectors.forEach(drawSector);
