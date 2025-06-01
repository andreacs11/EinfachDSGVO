// Lista fija de tareas que deben estar marcadas
const idsDeTareasNecesarias = ["tarea1", "tarea2", "tarea4"];

function verificarChecklist() {
  const faltantes = [];

  for (const id of idsDeTareasNecesarias) {
    const checkbox = document.getElementById(id);
    if (!checkbox.checked) {
      faltantes.push(id);
    }
  }

  const resultado = document.getElementById("resultado");

  if (faltantes.length === 0) {
    resultado.textContent = "¡Correcto! Todas las tareas necesarias están marcadas.";
    resultado.className = "correcto";
  } else {
  const nombresFaltantes = [];
    for(const id of faltantes){
      const checkbox = document.getElementById(id);
const nombreFaltante = checkbox.parentElement.textContent;
      nombresFaltantes.push(nombreFaltante);
    }
    resultado.innerHTML = `❌ Faltan por marcar: ${nombresFaltantes.join(", ")}`;
    resultado.className = "incorrecto";
  }
}