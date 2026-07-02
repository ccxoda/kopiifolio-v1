function tick() {
  const n = new Date();
  document.getElementById("tb-clock").textContent =
    String(n.getHours()).padStart(2, "0") +
    ":" +
    String(n.getMinutes()).padStart(2, "0");
}
tick();
setInterval(tick, 1000);
