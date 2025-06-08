function aufgabenBestaetigen() {
  const ergebnis = document.getElementById("ergebnis");
  ergebnis.innerHTML = "";

  const fehler = [];
  const warnings = [];

  for (let i = 1; i <= 6; i++) {
    const radios = document.getElementsByName(`verpflichtende_angabe_${i}`);
    const ausgewaehlt = Array.from(radios).find(r => r.checked);

    if (ausgewaehlt && ausgewaehlt.value === "nein") {
      fehler.push(`❌ Error en la tarea obligatoria ${i}`); // TODO: translate
    }
  }

  for (let i = 1; i <= 6; i++) {
    const radios = document.getElementsByName(`einzelfallbezogene_angabe_${i}`);
    const ausgewaehlt = Array.from(radios).find(r => r.checked);

    if (ausgewaehlt && ausgewaehlt.value === "nein") {
      warnings.push(`⚠️ Alerta, revisa tarea opcional ${i}`); // TODO: translate
    }
  }

  if (fehler.length === 0 && warnings.length === 0) {
    const richtig = document.createElement("div");
    richtig.className = "richtig";
    richtig.textContent = "✅ Correcto, se cumple todo"; // TODO: translate
    ergebnis.appendChild(richtig);
  } else {
    for (const nachricht of fehler) {
      const div = document.createElement("div");
      div.className = "falsch";
      div.textContent = nachricht;
      ergebnis.appendChild(div);
    }

    for (const nachricht of warnings) {
      const div = document.createElement("div");
      div.className = "warning";
      div.textContent = nachricht;
      ergebnis.appendChild(div);
    }
  }
}

function modalOeffnen(titel, text) {
    document.getElementById("modal-titel").textContent = titel;
    document.getElementById("modal-text").textContent = text;
    document.getElementById("meinModal").style.display = "block";
  }
  
function modalSchliessen() {
document.getElementById("meinModal").style.display = "none";
}