# Mi Ritmo Digital — sitio público

Sitio React + Vite desplegado en GitHub Pages (https://www.miritmodigital.com). Ver
`app_development/CLAUDE.md` para detalles de despliegue (`npm run deploy`, doble repo, etc.).

## Área del curso (contenido con clave)

La ruta `/curso` es la plataforma de implementación del curso para las familias
tratadas del estudio: blogs, quizzes e imágenes a los que los padres pueden
volver cuando quieran. Está protegida con una clave de acceso y el contenido se
separa por brazo de tratamiento:

| Brazo | Clave | Qué ve |
|-------|-------|--------|
| RS | `RITMO2026` | Contenido básico del curso |
| RS+PP | `AGUILA2026` | Todo el contenido (incluye lo exclusivo del programa para padres) |

- Las claves viven en `src/curso/access.js` (`ARM_CODES`). Son un candado del
  lado del cliente: suficiente para evitar el acceso casual del grupo control,
  no es seguridad criptográfica. Si una clave se filtra, cámbiala ahí y vuelve
  a desplegar.
- La clave ingresada se normaliza (mayúsculas, tildes, espacios) y el brazo
  desbloqueado se guarda en `localStorage` (`mrd_curso_arm`), así los padres no
  tienen que reingresarla en cada visita. El botón "Salir" la borra.
- El grupo control no recibe ninguna clave y por lo tanto no ve el contenido.

### Cómo agregar un recurso nuevo

1. Crea la página en `src/pages/curso/` envuelta en `<CursoLayout>` (el layout
   pone el candado, la navegación y el fondo).
2. Regístrala en `src/curso/recursos.js` con su `slug`, título, descripción y
   `arms` (`['rs', 'rspp']` para todos los tratados, `['rspp']` solo para RS+PP).
3. Agrega la ruta en `src/App.jsx`.
4. Agrega la copia estática del deep link en el script `build` de
   `package.json` (`dist/curso/<slug>/index.html`), como ya se hace con
   `estilos-de-crianza`, para que la URL funcione con HTTP 200 en GitHub Pages.

Recursos existentes:

- `/curso/estilos-de-crianza` — blog + quiz "¿Qué tipo de cuidador o cuidadora
  eres?" (Toro / Pato / Águila, material de la Sesión 0). Ambos brazos.

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run lint
npm run build    # incluye copias estáticas de deep links + prerender
npm run deploy   # build + gh-pages
```

Nota: cualquier cambio aquí debe committearse en **ambos** repos (el repo
interno del sitio y el repo padre `PHONES Colombia`) — ver CLAUDE.md.
