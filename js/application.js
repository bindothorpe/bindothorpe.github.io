"use strict";

window.onload = () => {
  const btn = document.getElementById("btn-calc");
  const overcast = document.getElementById("overcast");
  const aperture = document.getElementById("aperture");
  const iso = document.getElementById("iso");

  btn.onclick = () => {
    const overcastValue = overcast.value;
    const apertureValue = aperture.value;
    const isoValue = iso.value;

    const isoMult = isoValue / 100;

    const shutterSpeed = overcastValue * apertureValue * isoMult;

    const result = document.getElementById("result-text");
    result.innerHTML = shutterSpeed;

    console.log(shutterSpeed);

    if (shutterSpeed >= 50) {
      if (result.classList.contains("error")) result.classList.remove("error");
      result.classList.add("correct");
    } else {
      if (result.classList.contains("correct"))
        result.classList.remove("correct");
      result.classList.add("error");
    }
  };
};
