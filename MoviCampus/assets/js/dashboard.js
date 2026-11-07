/* dashboard.js · Pantalla 2 · Dashboard: bienvenida, buscador, accesos rápidos y rutas destacadas. */
const fc = (r) =>
  `<a class="cd fc" href="detalle-ruta.html?id=${r.id}"><div class="row"><span class="cd1">${r.c}</span><span class="mu sm">${r.k}</span></div><h3>${r.n}</h3><div class="od"><div>${I.o}<span>${r.o}</span></div><div>${I.p}<span>${CAM}</span></div></div><p class="mu sm">Vía ${r.z[1]} · ${r.z[2]}</p><hr><p class="mu sm">Lunes a viernes</p><p class="sm"><b>${hm(r.a)} - ${hm(r.b)}</b></p><p class="mu sm">Cada ${r.p} min · ${r.m} min aprox.</p><p class="row" style="color:var(--pr);font-weight:600;font-size:.85rem;margin:8px 0 0">Ver recorrido y horarios ${I.ar}</p></a>`;

V.inicio = () => {
  draw = () => {
    app.innerHTML = `<div class="w"><div class="hero"><div><p class="ey">Tu movilidad universitaria</p><h1>¡Hola, ${esc(P.n.split(' ')[0])}!</h1><p class="mu" style="margin:0">Planea tu viaje al campus o de regreso a casa.</p></div>${BUS}</div>
 <section class="pn"><h2>¿A dónde vas?</h2>${sf(0)}</section>
 <section class="sec"><h2>Accesos rápidos</h2><div class="g4">
 <a class="cd qa" href="buscar-rutas.html"><span class="bx">${I.m}</span><b>Consultar rutas</b><span class="mu sm">Encuentra cómo llegar y volver.</span></a>
 <a class="cd qa" href="resultados.html"><span class="bx">${I.c}</span><b>Ver horarios</b><span class="mu sm">Organiza tu salida con anticipación.</span></a>
 <a class="cd qa" href="detalle-ruta.html?id=u01"><span class="bx">${I.p}</span><b>Explorar recorridos</b><span class="mu sm">Conoce las paradas de cada ruta.</span></a>
 <a class="cd qa" href="resultados.html"><span class="bx">${I.sw}</span><b>Otras alternativas</b><span class="mu sm">Compara bus público y universitario.</span></a></div></section>
 <section class="sec"><div class="row"><div><h2 style="margin:0">Rutas destacadas</h2><p class="mu sm">Recorridos para llegar y salir del campus.</p></div><a class="row" href="resultados.html" style="gap:6px;font-weight:600;font-size:.85rem;text-decoration:none">Ver todas las rutas ${I.ar}</a></div><div class="g3" style="margin-top:10px">${['u01', 'u03', 'p02'].map((id) => fc(R.find((r) => r.id == id))).join('')}</div>
 <p class="nt">${I.i}Recorridos y horarios de ejemplo. La información es orientativa y no corresponde a datos en tiempo real.</p></section></div>`;
    bindSf(0);
  };
  draw();
};

startPage('inicio');
