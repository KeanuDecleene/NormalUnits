const kjInput = document.getElementById("kjInput");
const calResult = document.getElementById("caloriesResult");
const lbsInput = document.getElementById("lbsInput");
const kgResult = document.getElementById("kgResult");

// 1 kJ ≈ 0.239006 kcal
kjInput.addEventListener("input", () => {
  const kj = parseFloat(kjInput.value);
  if (!isNaN(kj)) {
    calResult.textContent = `${kj} kJ = ${(kj * 0.239006).toFixed(2)} cal 🔥`;
  } else {
    calResult.textContent = "= 0 cal";
  }
});

// 1 lb ≈ 0.453592 kg
lbsInput.addEventListener("input", () => {
  const lbs = parseFloat(lbsInput.value);
  if (!isNaN(lbs)) {
    kgResult.textContent = `${lbs} lbs = ${(lbs * 0.453592).toFixed(2)} kg 💪`;
  } else {
    kgResult.textContent = "= 0 kg";
  }
});
