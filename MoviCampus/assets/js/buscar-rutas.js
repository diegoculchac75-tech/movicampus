/* buscar-rutas.js · Pantalla 3 · Búsqueda de rutas: origen, destino y horario. */
V.buscar = () => {
  draw = () => {
    app.innerHTML = `<div class="w"><p class="ey">Tu movilidad universitaria</p><h1>Buscar rutas</h1><p class="mu" style="margin:0">Encuentra cómo llegar al campus o volver a casa.</p>
 <section class="pn"><h2 style="margin-bottom:2px">¿A dónde vas?</h2><p class="mu sm" style="margin-bottom:12px">Elige tu trayecto y la hora de salida.</p>${sf(1)}<p class="mu sm">Hora aproximada de salida, en formato de 24 horas.</p><p class="mu sm">Para el regreso, elige “Salir del campus”. El campus será tu lugar de origen.</p></section></div>`;
    bindSf(1);
  };
  draw();
};

startPage('buscar');
