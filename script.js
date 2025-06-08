function aufgabenBestaetigen() {
  const ergebnis = document.getElementById("ergebnis");
  ergebnis.innerHTML = "";

  const fehler = [];
  const warnings = [];

  for (let i = 1; i <= 6; i++) {
    const radios = document.getElementsByName(`verpflichtende_angabe_${i}`);
    const ausgewaehlt = Array.from(radios).find(r => r.checked);

    if (ausgewaehlt && ausgewaehlt.value === "nein") {
      fehler.push(`❌ Achtung! Die zentrale Pflichtangabe ${i} wurde mit „Nein“ beantwortet.
        Das bedeutet, dass deine Datenschutzerklärung aktuell nicht vollständig im Sinne der DSGVO ist.`);
    }
  }

  for (let i = 1; i <= 6; i++) {
    const radios = document.getElementsByName(`einzelfallbezogene_angabe_${i}`);
    const ausgewaehlt = Array.from(radios).find(r => r.checked);

    if (ausgewaehlt && ausgewaehlt.value === "nein") {
      warnings.push(`⚠️ Hinweis: Die kontextabhängige Frage ${i} wurde mit „Nein“ beantwortet.
        Diese Angaben sind nicht in jedem Fall erforderlich, können aber bei bestimmten Verarbeitungsvorgängen verpflichtend sein.`);
    }
  }

  if (fehler.length === 0 && warnings.length === 0) {
    const richtig = document.createElement("div");
    richtig.className = "richtig";
    richtig.textContent = "✅ Glückwunsch! Alle Pflichtangaben wurden bejaht und bei den kontextabhängigen Fragen liegt entweder ein „Ja“ oder ein „Nicht anwendbar“ vor.\n\nDeine Datenschutzerklärung erfüllt die zentralen Anforderungen der DSGVO - zumindest aus Sicht der hier geprüften Punkte.\nBehalte deine Datenschutzerklärung im Blick, wenn sich Funktionen oder Datenflüsse auf deiner Website ändern. Datenschutz ist eine laufende Aufgabe.  "; // TODO: translate
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