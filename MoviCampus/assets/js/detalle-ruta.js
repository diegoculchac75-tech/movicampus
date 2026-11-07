/* detalle-ruta.js · Pantalla 5 · Detalle de ruta: esquema ilustrativo, paradas, horarios y descripción. */
/* Esquema ilustrativo del recorrido (sin GPS) */
const mapa = (n) => {
  const p = [...Array(n)].map((_, i) => [
    Math.round(40 + i * (520 / (n - 1))),
    i == 0 || i == n - 1 ? 100 : i % 2 ? 62 : 138,
  ]);
  const d = 'M' + p.map((x) => x.join(' ')).join(' L');
  return `<svg class="map" viewBox="0 0 600 200" role="img" aria-label="Esquema ilustrativo del recorrido con ${n} paradas, sin ubicación en tiempo real"><rect width="600" height="200" rx="14" fill="var(--pl)"/><path d="M0 40H600M0 164H600M120 0V200M300 0V200M480 0V200" stroke="var(--sf)" stroke-width="10" opacity=".7"/><path id="rt" d="${d}" fill="none" stroke="var(--pr)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>${p
    .map((x, i) => {
      const L = i == n - 1;
      return `<circle cx="${x[0]}" cy="${x[1]}" r="${i == 0 || L ? 15 : 12}" fill="${L ? 'var(--pr)' : 'var(--sf)'}" stroke="var(--pr)" stroke-width="4"/><text x="${x[0]}" y="${x[1] + 5}" text-anchor="middle" font-size="14" font-weight="700" fill="${L ? 'var(--pt)' : 'var(--pr)'}">${i + 1}</text>`;
    })
    .join(
      '',
    )}<circle r="7" fill="var(--tx)" class="bs"><animateMotion dur="9s" repeatCount="indefinite"><mpath href="#rt"/></animateMotion></circle></svg>`;
};

V.detalle = (id) => {
  const r = R.find((x) => x.id == id) || R[0],
    i = Q.dir == 'in',
    z = i ? r.z : [...r.z].reverse();
  const o = z[0],
    d = z.at(-1),
    jr = { m: [360, 720], t: [720, 1080], n: [1080, 1440] };
  const draw2 = () => {
    const n = tm(r).filter((m) => m >= jr[J][0] && m < jr[J][1]);
    app.innerHTML = `<div class="w"><a class="bt ol" href="resultados.html">${I.bk} Volver a los resultados</a><div style="margin-top:16px"><p class="ey">Ruta ${r.c} · ${r.k}</p><h1>${r.n}</h1><p class="mu" style="margin:0">${r.m} min aprox. · Sin transbordos · ${i ? 'Hacia' : 'Desde'} el campus</p></div>
  <div class="dt"><div><section class="cd"><h2>${I.m} Esquema del recorrido</h2>${mapa(z.length)}<p class="nt" style="margin-top:8px">${I.i}Esquema ilustrativo. No muestra la ubicación de los buses en tiempo real.</p></section>
  <section class="cd"><h2>Horarios de salida</h2><p class="mu sm">Lunes a viernes · Cada ${r.p} min · Desde ${o}</p><div class="tb" role="group" aria-label="Jornada" style="margin:10px 0 0">${[
    ['m', 'Mañana'],
    ['t', 'Tarde'],
    ['n', 'Noche'],
  ]
    .map(
      ([k, t]) =>
        `<button type="button" data-j="${k}" aria-pressed="${J == k}">${t}</button>`,
    )
    .join(
      '',
    )}</div><div class="ts" aria-live="polite">${n.length ? n.map((m) => `<span class="ch">${hm(m)}</span>`).join('') : '<p class="mu sm">No hay salidas en esta jornada.</p>'}</div></section></div>
  <div><section class="cd"><h2>Información de la ruta</h2><div class="ks"><div><small>Punto de origen</small>${o}</div><div><small>Destino</small>${d}</div><div><small>Duración</small>${r.m} min aprox.</div><div><small>Frecuencia</small>Cada ${r.p} min</div></div></section>
  <section class="cd"><h2>Paradas principales</h2><ol class="tl">${z.map((s, k) => `<li><b>${k + 1}</b>${s}${k == 0 ? ' <span class="mu sm">(origen)</span>' : k == z.length - 1 ? ' <span class="mu sm">(destino)</span>' : ''}</li>`).join('')}</ol></section>
  <section class="cd"><h2>Descripción del recorrido</h2><p style="margin:0">${r.d}</p></section></div></div>
  <p class="nt">${I.i}Recorridos y horarios de ejemplo. La información es orientativa.</p></div>`;
    document.querySelectorAll('[data-j]').forEach(
      (b) =>
        (b.onclick = () => {
          J = b.dataset.j;
          draw2();
        }),
    );
  };
  draw2();
};

startPage('detalle');
