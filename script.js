function verificarTareas() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar mensajes anteriores

  const errores = [];
  const alertas = [];

  // Revisar tareas obligatorias
  for (let i = 1; i <= 4; i++) {
    const radios = document.getElementsByName(`tarea_obligatoria_${i}`);
    const seleccionada = Array.from(radios).find(r => r.checked);

    if (seleccionada && seleccionada.value === "no") {
      errores.push(`❌ Error en la tarea obligatoria ${i}`);
    }
  }

  // Revisar tareas opcionales
  for (let i = 1; i <= 4; i++) {
    const radios = document.getElementsByName(`tarea_opcional_${i}`);
    const seleccionada = Array.from(radios).find(r => r.checked);

    if (seleccionada && seleccionada.value === "no") {
      alertas.push(`⚠️ Alerta, revisa tarea opcional ${i}`);
    }
  }

  if (errores.length === 0 && alertas.length === 0) {
    const correcto = document.createElement("div");
    correcto.className = "correcto";
    correcto.textContent = "✅ Correcto, se cumple todo";
    resultado.appendChild(correcto);
  } else {
    for (const mensaje of errores) {
      const div = document.createElement("div");
      div.className = "incorrecto";
      div.textContent = mensaje;
      resultado.appendChild(div);
    }

    for (const mensaje of alertas) {
      const div = document.createElement("div");
      div.className = "alerta";
      div.textContent = mensaje;
      resultado.appendChild(div);
    }
  }
}

function mostrarInfo(mensaje) {
    alert(mensaje);
}