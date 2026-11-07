# MoviCampus · Frontend (Fase 2)

Prototipo navegable de MoviCampus: consulta de rutas, horarios y alternativas de transporte universitario.
Solo HTML, CSS y JavaScript. Sin backend, sin dependencias, con datos de ejemplo.

## Estructura

```
MoviCampus/
├── index.html          Pantalla 1 · Inicio de sesión
├── dashboard.html      Pantalla 2 · Dashboard
├── buscar-rutas.html   Pantalla 3 · Búsqueda de rutas
├── resultados.html     Pantalla 4 · Resultados
├── detalle-ruta.html   Pantalla 5 · Detalle de ruta (recibe ?id=u01)
├── perfil.html         Pantalla 6 · Mi perfil
└── assets/
    ├── css/styles.css  Estilos compartidos (variables, componentes, responsive)
    ├── js/main.js      Compartido: iconos, rutas de ejemplo, estado, cabecera, formulario de búsqueda
    ├── js/auth.js, dashboard.js, buscar-rutas.js, resultados.js, detalle-ruta.js, perfil.js
    └── images/favicon.svg
```

Cada HTML carga `main.js` y el JS de su pantalla; ese archivo dibuja el contenido.

## Abrirlo en Visual Studio Code

1. Copia estos archivos dentro de tu carpeta `MoviCampus` y ábrela con **File → Open Folder**.
2. Recomendado: instala la extensión **Live Server**, clic derecho en `index.html` → **Open with Live Server**.
3. También funciona haciendo doble clic en `index.html`.

## Cómo probarlo

1. En el inicio de sesión escribe cualquier correo válido y cualquier contraseña (no hay autenticación real).
2. Dashboard: prueba el buscador, los accesos rápidos y las rutas destacadas.
3. Buscar rutas: cambia entre “Llegar al campus” y “Salir del campus”, elige origen y hora, y pulsa Buscar.
4. Resultados: cambia el origen para ver otras rutas y pulsa “Ver detalles”.
5. Detalle: cambia de jornada (mañana, tarde, noche) y vuelve con “Volver a los resultados”.
6. Mi perfil: edita y guarda tus datos, y cierra sesión para volver al inicio.
7. Responsive: en el navegador pulsa F12 y usa el modo dispositivo (1440, 768 y 390 px).

## Dónde modificar cosas

- Rutas, paradas y horarios de ejemplo: arreglo `R` en `assets/js/main.js`.
- Colores y tema: variables al inicio de `assets/css/styles.css`.
- Textos de cada pantalla: el archivo `.js` con el nombre de esa pantalla.

## Subirlo a GitHub y publicarlo

```bash
git init
git add .
git commit -m "MoviCampus frontend"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/MoviCampus.git
git push -u origin main
```

Crea antes el repositorio vacío `MoviCampus` en github.com. Para publicarlo: **Settings → Pages**, elige la rama `main` y la carpeta raíz (`/`). Quedará en `https://TU-USUARIO.github.io/MoviCampus/`.

## Alcance

Sin GPS en tiempo real, pagos, reservas ni administración de conductores. Los horarios son de ejemplo.
