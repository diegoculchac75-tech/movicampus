/* perfil.js · Pantalla 6 · Mi perfil: consultar y editar datos básicos, cerrar sesión. */
V.perfil = () => {
  draw = () => {
    const dl = `<dl class="dl"><div><dt>Nombre completo</dt><dd>${esc(P.n)}</dd></div><div><dt>Correo electrónico</dt><dd>${esc(P.e)}</dd></div><div><dt>Tipo de usuario</dt><dd>${P.t}</dd></div></dl>`;
    const fm = `<form class="fm" id="pf" novalidate><div><label for="pn">Nombre completo</label><input class="f" id="pn" value="${esc(P.n)}" autocomplete="name"></div><div><label for="pe">Correo electrónico</label><input class="f" id="pe" type="email" value="${esc(P.e)}"></div><div><label for="pt">Tipo de usuario</label>${sel('pt', ['Estudiante', 'Docente', 'Administrativo'], P.t)}</div><p class="er" id="pr" role="alert"></p><div class="row"><button class="bt" type="submit">Guardar cambios</button><button class="bt ol" type="button" id="cn">Cancelar</button></div></form>`;
    app.innerHTML = `<div class="w"><p class="ey">Tu cuenta</p><h1>Mi perfil</h1><p class="mu" style="margin:0">Consulta y actualiza tus datos básicos.</p>
  <div class="pf"><section class="cd ctr"><div class="av big" role="img" aria-label="Avatar con las iniciales ${ini()}">${ini()}</div><h2>${esc(P.n)}</h2><p class="mu sm" style="overflow-wrap:anywhere">${esc(P.e)}</p><span class="chip">${P.t}</span><button class="bt ol dg" id="lo" style="margin-top:12px;width:100%">${I.out} Cerrar sesión</button></section>
  <section class="cd"><div class="row"><h2 style="margin:0">Datos básicos</h2>${E ? '' : `<button class="bt ol" id="ed">${I.ed} Editar datos</button>`}</div>${E ? fm : dl}<p class="ok" id="ms" role="status">${draw.m || ''}</p></section></div></div>`;
    draw.m = '';
    $('#lo').onclick = () => {
      on = 0;
      E = 0;
      save();
      location.href = 'index.html';
    };
    if ($('#ed'))
      $('#ed').onclick = () => {
        E = 1;
        draw();
      };
    if ($('#cn'))
      $('#cn').onclick = () => {
        E = 0;
        draw();
      };
    if ($('#pf')) {
      $('#pn').focus();
      $('#pf').onsubmit = (e) => {
        e.preventDefault();
        const n = $('#pn').value.trim(),
          m = $('#pe').value.trim(),
          er = $('#pr');
        if (!n) {
          er.textContent = 'El nombre no puede estar vacío.';
          $('#pn').focus();
          return;
        }
        if (!/^\S+@\S+\.\S+$/.test(m)) {
          er.textContent = 'Escribe un correo válido.';
          $('#pe').focus();
          return;
        }
        P = { n, e: m, t: $('#pt').value };
        save();
        E = 0;
        draw.m = 'Datos actualizados correctamente.';
        hdr('perfil');
        draw();
      };
    }
  };
  draw();
};

startPage('perfil');
