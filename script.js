// const popLabels = {
//   about: "👤 about",
//   skills: "🛠 skills",
//   awards: "🏆 awards",
//   coding: "💻 coding",
//   artworks: "🖼 artworks",
//   message: "📨 message",
// };

const opened = {};
let topZ = 30,
  drag = null,
  dox = 0,
  doy = 0;

function tick() {
  const n = new Date();
  document.getElementById("tb-clock").textContent =
    String(n.getHours()).padStart(2, "0") +
    ":" +
    String(n.getMinutes()).padStart(2, "0");
}
tick();
setInterval(tick, 1000);

function openPop(id) {
  const elem = document.getElementById("popup-" + id);
  if (!elem) return;
  opened[id] = true;
  elem.classList.add("open");
  elem.style.zIndex = ++topZ;
  if (elem.style.transform && drag === null) {
  }
}

function closePop(id) {
  const elem = document.getElementById("popup-" + id);
  if (!elem) return;
  opened[id] = false;
  elem.classList.remove("open");
}

function startDrag(e, id) {
  const elem = document.getElementById(id);
  if (!elem) return;
  elem.style.zIndex = ++topZ;
  drag = elem;
  const r = elem.getBoundingClientRect();
  dox = e.clientX - r.left;
  doy = e.clientY - r.top;
  e.preventDefault();
}

document.addEventListener("mousemove", (e) => {
  if (!drag) return;
  const dr = document.documentElement.getBoundingClientRect();
  let x = Math.max(
    0,
    Math.min(dr.width - drag.offsetWidth, e.clientX - dr.left - dox),
  );
  let y = Math.max(
    0,
    Math.min(dr.height - drag.offsetHeight, e.clientY - dr.top - doy),
  );
  drag.style.left = x + "px";
  drag.style.top = y + "px";
  drag.style.right = "auto";
  drag.style.bottom = "auto";
});

document.addEventListener("mouseup", () => {
  drag = null;
});

function toggleDropdown(header) {
  const dropdown = header.parentElement;
  dropdown.classList.toggle("open");
}

function initMusicPlayer() {
  const mp = document.getElementById("popup-mp");
  const dr = document.documentElement.getBoundingClientRect();

  mp.style.left = dr.width - mp.offsetWidth - 20 + "px";
  mp.style.top = dr.height - mp.offsetHeight - 20 + "px";
}
window.addEventListener("load", initMusicPlayer);
