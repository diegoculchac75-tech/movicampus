/* main.js · Piezas compartidas: iconos, datos de ejemplo (rutas), estado, cabecera y formulario de búsqueda. Se carga en todas las páginas. */
const $ = (s, e = document) => e.querySelector(s);
const ic = (d) =>
  `<svg class="ic" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const I = {
  s: ic('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
  c: ic('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  p: ic(
    '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  ),
  o: ic('<circle cx="12" cy="12" r="8"/>'),
  h: ic('<path d="M3 11 12 3l9 8v10h-6v-6H9v6H3z"/>'),
  u: ic('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>'),
  i: ic('<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>'),
  ar: ic('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  bk: ic('<path d="M19 12H5M11 6l-6 6 6 6"/>'),
  b: ic(
    '<rect x="4" y="3" width="16" height="15" rx="3"/><path d="M4 11h16M8 21v-3M16 21v-3"/>',
  ),
  m: ic(
    '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h6a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h6"/>',
  ),
  sw: ic('<path d="M7 7h12l-3-3M17 17H5l3 3"/>'),
  ey: ic(
    '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  ),
  ml: ic(
    '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  ),
  lk: ic(
    '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  ),
  out: ic('<path d="M9 21H5V3h4M16 17l5-5-5-5M21 12H9"/>'),
  ed: ic('<path d="M4 20h4L19 9l-4-4L4 16z"/>'),
};
const BUS =
  '<svg class="il" viewBox="0 0 240 120" aria-hidden="true"><rect x="20" y="30" width="60" height="62" rx="4" fill="var(--sf)" stroke="var(--pr)" stroke-opacity=".4"/><rect x="95" y="46" width="40" height="46" rx="4" fill="var(--sf)" stroke="var(--pr)" stroke-opacity=".4"/><rect x="60" y="62" width="150" height="40" rx="9" fill="var(--pr)"/><g fill="var(--pl)"><rect x="70" y="70" width="22" height="14" rx="3"/><rect x="98" y="70" width="22" height="14" rx="3"/><rect x="126" y="70" width="22" height="14" rx="3"/><rect x="154" y="70" width="22" height="14" rx="3"/><rect x="182" y="70" width="20" height="22" rx="3"/></g><circle cx="90" cy="104" r="8" fill="var(--tx)"/><circle cx="170" cy="104" r="8" fill="var(--tx)"/><path d="M8 114c60 8 164 8 224 0" stroke="var(--pr)" stroke-opacity=".5" stroke-dasharray="4 5" fill="none"/></svg>';

const ST = ['Estación Central', 'Terminal Norte', 'Parque Sur'],
  CAM = 'Campus Central';
const R = [
  {
    id: 'u01',
    c: 'U01',
    k: 'Bus universitario',
    n: 'Conexión Central',
    m: 25,
    o: ST[0],
    a: 390,
    b: 1170,
    p: 30,
    d: 'Recorrido directo por Av. del Parque y Biblioteca, con llegada al acceso principal del campus.',
    z: ['Estación Central', 'Av. del Parque', 'Biblioteca', 'Campus Central'],
  },
  {
    id: 'u02',
    c: 'U02',
    k: 'Bus universitario',
    n: 'Central Exprés',
    m: 20,
    o: ST[0],
    a: 400,
    b: 1180,
    p: 20,
    d: 'Recorrido por Av. Universidad, con paradas intermedias hasta el campus.',
    z: [
      'Estación Central',
      'Av. Universidad',
      'Parada frente al campus',
      'Campus Central',
    ],
  },
  {
    id: 'p01',
    c: 'P01',
    k: 'Bus público',
    n: 'Central por el Parque',
    m: 35,
    o: ST[0],
    a: 360,
    b: 1260,
    p: 30,
    d: 'Recorrido por Av. del Parque y Av. Universidad, con parada frente al campus.',
    z: [
      'Estación Central',
      'Plaza del Parque',
      'Av. Universidad',
      'Parada frente al campus',
      'Campus Central',
    ],
  },
  {
    id: 'u03',
    c: 'U03',
    k: 'Bus universitario',
    n: 'Conexión Norte',
    m: 35,
    o: ST[1],
    a: 360,
    b: 1200,
    p: 40,
    d: 'Recorrido desde el terminal por Plaza Norte y Av. Universidad hasta el campus.',
    z: ['Terminal Norte', 'Plaza Norte', 'Av. Universidad', 'Campus Central'],
  },
  {
    id: 'p02',
    c: 'P02',
    k: 'Bus público',
    n: 'Alternativa Sur',
    m: 40,
    o: ST[2],
    a: 330,
    b: 1260,
    p: 30,
    d: 'Recorrido por la vía Universidad y Parque Sur, con llegada al campus.',
    z: ['Parque Sur', 'Av. Sur', 'Vía Universidad', 'Campus Central'],
  },
];
// Estado de sesión y de la búsqueda: se guarda en localStorage para compartirlo entre páginas
const okLS = (() => {
  try {
    localStorage.setItem('mc-test', '1');
    return 1;
  } catch (e) {
    return 0;
  }
})();
let S = null;
try {
  S = JSON.parse(localStorage.getItem('mc'));
} catch (e) {}
let on = S ? S.on : 0,
  E = 0,
  J = 'm',
  Q = S ? S.Q : { dir: 'in', st: ST[0], t: '07:00' },
  P = S
    ? S.P
    : {
        n: 'Andrea Martínez',
        e: 'andrea.martinez@universidad.edu',
        t: 'Estudiante',
      };
const save = () => {
  try {
    localStorage.setItem('mc', JSON.stringify({ on, Q, P }));
  } catch (e) {}
};
const esc = (s) =>
  s.replace(
    /[&<>"]/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c],
  );
const ini = () =>
  P.n
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
const hm = (m) =>
  String((m / 60) | 0).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
const tmin = (s) => {
  const [h, m] = s.split(':');
  return +h * 60 + +m;
};
const tm = (r) => {
  const a = [];
  for (let m = r.a; m <= r.b; m += r.p) a.push(m);
  return a;
};
const sel = (id, arr, v) =>
  `<select class="f" id="${id}">${arr.map((x) => `<option${x == v ? ' selected' : ''}>${x}</option>`).join('')}</select>`;
const app = $('#app'),
  hd = $('#hd');

function hdr(h) {
  if (h == 'login') {
    hd.innerHTML = '';
    return;
  }
  const a = h == 'inicio' ? 'inicio' : h == 'perfil' ? 'perfil' : 'buscar';
  const l = (k, t, i) =>
    `<a href="${PG[k]}"${a == k ? ' aria-current="page"' : ''}>${I[i]}${t}</a>`;
  hd.innerHTML = `<div class="hw"><a class="lg" href="dashboard.html"><span class="lm">${I.b}</span>MoviCampus</a><nav aria-label="Principal">${l('inicio', 'Inicio', 'h')}${l('buscar', 'Buscar rutas', 's')}${l('perfil', 'Mi perfil', 'u')}</nav><a class="us" href="perfil.html"><span><b>${esc(P.n)}</b><small>${P.t}</small></span><span class="av" style="display:grid">${ini()}</span></a></div>`;
}

/* Formulario de búsqueda compartido (Inicio y Buscar rutas) */
function sf(t) {
  const i = Q.dir == 'in';
  return `<form id="sf" novalidate><div class="tb" role="group" aria-label="Sentido del viaje"><button type="button" data-d="in" aria-pressed="${i}">Llegar al campus</button><button type="button" data-d="out" aria-pressed="${!i}">Salir del campus</button></div>
 <div class="sr2${t ? ' b' : ''}"><div><label for="so">Lugar de origen</label>${i ? sel('so', ST, Q.st) : sel('so', [CAM], CAM)}</div><button type="button" class="sw" id="sw" aria-label="Intercambiar origen y destino">${I.sw}</button><div><label for="sd">Destino</label>${i ? sel('sd', [CAM], CAM) : sel('sd', ST, Q.st)}</div>${t ? `<div class="tf"><label for="th">Horario de viaje</label><input class="f" id="th" type="time" value="${Q.t}" required></div>` : ''}<button class="bt" type="submit">${I.s} Buscar rutas</button></div>
 <p class="er" id="se" role="alert"></p></form>`;
}
function bindSf(t) {
  const rd = () => {
    Q.st = $(Q.dir == 'in' ? '#so' : '#sd').value;
    if (t && $('#th')) Q.t = $('#th').value || Q.t;
    save();
  };
  document.querySelectorAll('#sf [data-d]').forEach(
    (b) =>
      (b.onclick = () => {
        rd();
        Q.dir = b.dataset.d;
        draw();
      }),
  );
  $('#sw').onclick = () => {
    rd();
    Q.dir = Q.dir == 'in' ? 'out' : 'in';
    draw();
  };
  $('#sf').onsubmit = (e) => {
    e.preventDefault();
    rd();
    if (t && !$('#th').value) {
      $('#se').textContent = 'Indica la hora aproximada de salida.';
      $('#th').focus();
      return;
    }
    location.href = 'resultados.html';
  };
}
let draw = () => {};

const V = {};

// Páginas del menú principal (la clave coincide con el nombre interno de cada pantalla)
const PG = {
  inicio: 'dashboard.html',
  buscar: 'buscar-rutas.html',
  perfil: 'perfil.html',
};

// Arranque común de cada página: protege el acceso, pinta la cabecera y la pantalla
function startPage(h) {
  if (okLS && !on && h != 'login') {
    location.replace('index.html');
    return;
  }
  document.body.dataset.v = h;
  hdr(h);
  V[h](new URLSearchParams(location.search).get('id') || '');
  scrollTo(0, 0);
}
