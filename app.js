// clock
const hourHand = document.querySelector(".hour-hand"),
  minuteHand = document.querySelector(".minute-hand"),
  secondHand = document.querySelector(".second-hand"),
  secondCircle = document.querySelector(".second-circle"),
  minuteCircle = document.querySelector(".minute-circle"),
  hourCircle = document.querySelector(".hour-circle"),
  triangle = document.querySelector("#triangle");

const startTime = () => {
  const today = new Date();
  let h = today.getHours(),
    m = today.getMinutes(),
    s = today.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let clock = `${h} : ${m} : ${s}`;

  //clock movement
  const interval = 6;

  hourHand.style.transform = "rotate(" + (h * 30 + m / 2) + "deg)";
  minuteHand.style.transform = "rotate(" + (m * interval + s / 10) + "deg)";
  secondHand.style.transform = "rotate(" + s * interval + "deg)";

  // coordinations
  let rectSC = secondCircle.getBoundingClientRect(),
    scx = rectSC.x - 1,
    scy = rectSC.y - 24;

  let rectMC = minuteCircle.getBoundingClientRect(),
    mcx = rectMC.x + 8,
    mcy = rectMC.y - 14;

  let rectHC = hourCircle.getBoundingClientRect(),
    hcx = rectHC.x + 19,
    hcy = rectHC.y - 4;

  //moving traingle
  const cords = [scx, scy, mcx, mcy, hcx, hcy],
    cordsString = cords.join(" ");

  triangle.setAttribute("fill", "lightgreen");
  triangle.setAttribute("opacity", "0.7");
  triangle.setAttribute("points", `${cordsString}`);

  //second background changing
  function colorChanging() {
    let second = s * interval;
    if (
      second == 0 ||
      second == 30 ||
      second == 60 ||
      second == 90 ||
      second == 120 ||
      second == 150 ||
      second == 180 ||
      second == 210 ||
      second == 240 ||
      second == 270 ||
      second == 300 ||
      second == 330
    ) {
      secondCircle.style.background = "cyan";
    } else {
      secondCircle.style.transform = "scale(1.0)";
      secondCircle.style.background = "yellow";
    }
  }

  time.innerHTML = clock;
  setTimeout(startTime);
  colorChanging();
};

startTime();
