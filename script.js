window.addEventListener("load", function() {
  const boton = document.getElementById("btnAñadir");
  boton.addEventListener("click", function() {
    const nombre = document.getElementById('nombreFruta').value.trim();
    const color = document.getElementById('colorFruta').value.trim();

    if (!nombre || !color) {
      alert('Completa ambos campos');
      return;
    }

    const tabla = document.getElementById('tablaFrutas').getElementsByTagName('tbody')[0];
    const fila = tabla.insertRow();
    const celda1 = fila.insertCell(0);
    const celda2 = fila.insertCell(1);

    celda1.textContent = nombre;
    celda2.textContent = color;

    document.getElementById('nombreFruta').value = '';
    document.getElementById('colorFruta').value = '';
  });
});
