/* resultados.js · Pantalla 4 · Resultados: alternativas de transporte con salidas programadas. */
const rc = (r) => {
  const i = Q.dir == 'in',
    o = i ? r.o : CAM,
    d = i ? CAM : r.o,
    T = tmin(Q.t),
    n = tm(r)
      .filter((m) => m >= T)
      .slice(0, 3);
  return `<article class="cd rc"><div class="row"><span class="cd1">${r.c}</span><span class="mu sm">${r.k}</span></div><h3>${r.n}</h3><p class="mu sm">${r.m} min aprox. · Sin transbordos</p><div class="od"><div>${I.o}<span><small>Origen</small>${o}</span></div><div>${I.p}<span><small>Destino</small>${d}</span></div></div><p class="mu sm">${r.d}</p><hr><h4>${I.c} Salidas programadas</h4><p class="mu sm">Lunes a viernes · Desde las ${Q.t}</p><div class="cs">${n.length ? n.map((m) => `<span class="ch">${hm(m)}</span>`).join('') : '<span class="mu sm">Sin salidas después de esa hora</span>'}</div><p class="mu sm">Cada ${r.p} min · ${hm(r.a)} a ${hm(r.b)}</p><a class="bt" href="detalle-ruta.html?id=${r.id}">Ver detalles ${I.ar}</a></article>`;
};

V.resultados = () => {
  const i = Q.dir == 'in',
    l = R.filter((r) => r.o == Q.st);
  app.innerHTML = `<div class="w"><p class="ey">Tu movilidad universitaria</p><h1>Resultados de búsqueda</h1><p class="mu" style="margin:0">Compara las alternativas para llegar al campus.</p>
 <section class="pn"><div class="row"><b style="color:var(--pr);font-size:.8rem">${i ? 'Llegar al campus' : 'Salir del campus'}</b><a href="buscar-rutas.html" style="font-size:.8rem;font-weight:600">Modificar búsqueda</a></div><div class="g4" style="margin-top:10px"><div class="od"><div>${I.o}<span><small>Origen</small>${i ? Q.st : CAM}</span></div></div><div class="od"><div>${I.p}<span><small>Destino</small>${i ? CAM : Q.st}</span></div></div><div class="od"><div>${I.c}<span><small>Salida desde</small>${Q.t} · Lunes a viernes</span></div></div></div></section>
 <section class="sec"><h2 style="margin:0" role="status">${l.length} ${l.length == 1 ? 'ruta disponible' : 'rutas disponibles'}</h2><p class="mu sm" style="margin-bottom:12px">Mismo origen y destino. Elige el recorrido que mejor se adapte a ti.</p><div class="g3">${l.map(rc).join('')}</div><p class="nt">${I.i}Recorridos y horarios de ejemplo. Las salidas son programadas y no se muestra información en tiempo real.</p></section></div>`;
};

startPage('resultados');
