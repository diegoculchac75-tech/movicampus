/* auth.js · Pantalla 1 · Inicio de sesión: formulario con validación básica (no es autenticación real). */
V.login = () => {
  app.innerHTML = `<div class="lgn"><section class="lp"><a class="lg" href="index.html"><span class="lm">${I.b}</span>MoviCampus</a><div><p class="ey">Movilidad universitaria</p><h1>Tu campus, a un viaje de distancia.</h1><p class="mu">Encuentra rutas, consulta horarios y conoce tus alternativas para llegar y salir del campus.</p></div>${BUS}<div class="chs"><span>${I.m}Rutas</span><span>${I.c}Horarios</span><span>${I.sw}Alternativas</span></div></section>
 <section class="rp"><form id="lf" novalidate><div><h2 style="font-size:1.6rem;margin:0">Bienvenido a MoviCampus</h2><p class="mu" style="margin:4px 0 0">Consulta tus rutas y horarios en un solo lugar.</p></div>
 <div><label for="em">Correo electrónico</label><div class="ip">${I.ml}<input class="f" id="em" type="email" placeholder="tu.correo@universidad.edu" autocomplete="email"></div></div>
 <div><label for="pw">Contraseña</label><div class="ip">${I.lk}<input class="f" id="pw" type="password" placeholder="Ingresa tu contraseña" autocomplete="current-password"><button type="button" id="ey" aria-label="Mostrar contraseña">${I.ey}</button></div></div>
 <p class="er" id="le" role="alert"></p><button class="bt" type="submit">Iniciar sesión ${I.ar}</button>
 <p class="mu sm" style="text-align:center">¿Aún no tienes cuenta? <a href="index.html" id="rg"><b>Regístrate</b></a></p><p class="mu sm" style="text-align:center">Prototipo: usa cualquier correo y contraseña.</p></form></section></div>`;
  $('#ey').onclick = () => {
    const p = $('#pw');
    p.type = p.type == 'password' ? 'text' : 'password';
  };
  $('#rg').onclick = (e) => {
    e.preventDefault();
    $('#le').style.color = 'var(--mu)';
    $('#le').textContent =
      'El registro se habilitará en la siguiente fase. Por ahora ingresa con cualquier correo.';
  };
  $('#lf').onsubmit = (e) => {
    e.preventDefault();
    const m = $('#em').value.trim(),
      p = $('#pw').value,
      er = $('#le');
    er.style.color = '';
    if (!/^\S+@\S+\.\S+$/.test(m)) {
      er.textContent =
        'Escribe un correo válido, por ejemplo tu.correo@universidad.edu.';
      $('#em').focus();
      return;
    }
    if (!p) {
      er.textContent = 'Ingresa tu contraseña.';
      $('#pw').focus();
      return;
    }
    P.e = m;
    // El nombre se toma del correo: "luis.perez@uni.edu" → "Luis Perez"
    P.n = m
      .split('@')[0]
      .split(/[._-]+/)
      .filter(Boolean)
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(' ');
    on = 1;
    save();
    location.href = 'dashboard.html';
  };
};

startPage('login');