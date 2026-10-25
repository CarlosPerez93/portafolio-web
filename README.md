# Portafolio web — Carlos Pérez

SPA de portafolio construida con **React 19, TypeScript y CSS Modules**. Todo lo que aparece en la página proviene de dos fuentes verificables: la API pública de GitHub y la identidad de LinkedIn. No hay datos de relleno.

---

## Qué hay aquí

Una sola página con cinco secciones y un índice fijo:

| Sección          | Contenido                                               | Procedencia                        |
| ---------------- | ------------------------------------------------------- | ---------------------------------- |
| 01 · Perfil      | Presentación, foco de trabajo y datos de cuenta         | GitHub + LinkedIn                  |
| 02 · Proyectos   | 4 destacados y 8 secundarios, con enlaces reales        | GitHub (repositorios y demos)      |
| 03 · Habilidades | Peso real de cada lenguaje en bytes + grupos de trabajo | API de lenguajes de GitHub         |
| 04 · Trayectoria | Cinco hitos por año                                     | Fechas de creación de repositorios |
| 05 · Contacto    | Correo y perfiles                                       | LinkedIn + GitHub                  |

## Stack

- **React 19** con `StrictMode`, sin librerías de UI ni de animación.
- **TypeScript 5.8** en modo estricto (`strict`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`).
- **Vite 7** para desarrollo y build.
- **CSS Modules** para cada componente, más tres hojas globales: `tokens.css`, `reset.css` y `global.css`.
- **ESLint 9** (flat config) + **Prettier 3**.

Sin dependencias de runtime más allá de `react` y `react-dom`.

## Puesta en marcha

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script                 | Qué hace                                  |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Servidor de desarrollo con HMR            |
| `npm run build`        | `tsc -b` + build de producción en `dist/` |
| `npm run preview`      | Sirve el build local                      |
| `npm run lint`         | ESLint sobre todo el proyecto             |
| `npm run typecheck`    | Comprobación de tipos sin emitir          |
| `npm run format`       | Prettier sobre todo el proyecto           |
| `npm run format:check` | Verifica el formato sin escribir          |

## Estructura

Organizada por tipo de fichero, con una carpeta por componente:

```text
public/og-image.jpg         # tarjeta Open Graph 1200×630
src/
├── assets/images/          # avatar (única imagen del sitio)
├── components/
│   ├── layout/             # Header, Footer, Section (marco de sección)
│   ├── sections/           # Perfil, Proyectos, Habilidades, Trayectoria, Contacto
│   └── ui/                 # ArrowLink, Chip, LanguageBar, ProjectCard,
│                           # Reveal, SectionMarker, SocialIcon, SocialLinks
├── data/                   # contenido como módulos de datos tipados
├── hooks/                  # useActiveSection, useInView,
│                           # usePrefersReducedMotion, useScrollProgress
├── styles/                 # tokens.css, reset.css, global.css
├── types/                  # modelo de dominio (portfolio.ts)
├── utils/                  # cx, formatNumber, formatPercent
├── App.tsx                 # composición de la página
└── main.tsx                # punto de entrada
```

Cada componente vive en su carpeta con la misma forma:

```text
Componente/
├── Componente.tsx          # implementación
├── Componente.module.css   # estilos encapsulados
├── Componente.types.ts     # contrato de props
└── index.ts                # superficie pública
```

## Decisiones de arquitectura

**Los datos no conocen la interfaz y la interfaz no conoce los datos.** `src/data` exporta entidades tipadas; `src/App.tsx` las inyecta como props. Ningún componente importa de `src/data`, así que una sección se puede reutilizar con otra fuente sin arrastrar el contenido.

**Una responsabilidad por capa:**

- `types/` — forma del dominio.
- `data/` — contenido verificado.
- `utils/` — funciones puras sin estado (`cx`, `formatNumber`, `formatPercent`).
- `hooks/` — comportamiento con estado o efectos del navegador.
- `components/` — presentación.

**Un componente, dos escalas.** `ProjectCard` sirve tanto a las fichas destacadas como a la lista compacta mediante una prop `variant`; el CSS solo ajusta escala tipográfica, no estructura.

**Inversión de tema sin duplicar valores.** La sección oscura redefine los mismos nombres de token (`--paper`, `--ink`, `--line`, `--accent`) en su propio ámbito. No hay literales de color en los componentes ni una segunda paleta que mantener.

## Accesibilidad

- Enlace «Saltar al contenido» como primer elemento enfocable.
- `main`, `header`, `footer`, `nav`, `section` con `aria-labelledby` hacia el `h2` de cada sección.
- `aria-current="true"` en el ítem activo del índice: la posición no depende solo del color.
- SVG decorativos con `aria-hidden="true"` y `focusable="false"`.
- Listas normalizadas con `role="list"` para que VoiceOver no las anuncie como prosa cuando se quita el marcador visual.
- Anillo de foco visible (`:focus-visible`) y contraste de texto revisado sobre ambos fondos.
- Aviso «(se abre en una pestaña nueva)» en los enlaces externos.
- `prefers-reduced-motion` respetado en CSS **y** en JavaScript: las animaciones de entrada se muestran resueltas, no se ejecutan.

## Diseño

Papel cálido, tinta casi negra y un terracota como único acento. Tres familias con un papel cada una: **Fraunces** para el titular, **IBM Plex Mono** para etiquetas y cifras, y la sans del sistema para el cuerpo. Retícula de 76 px apenas visible, filetes de 1 px, esquinas rectas y numeración monoespaciada.

El movimiento es mínimo y con intención: un filete que se dibuja una sola vez bajo el nombre, tarjetas que revelan un acento en el borde inferior al enfocar, barras de lenguaje que se llenan en secuencia y una entrada de 14 px al hacer scroll. Nada se mueve dos veces y nada depende de la animación para entenderse.

## Procedencia de los datos

- **GitHub** (`@CarlosPerez93`): repositorios, lenguajes, fechas de creación, estrellas y URLs de demo.
- **LinkedIn** (`/in/carlos-perez93`): nombre, correo e identidad del perfil.
- Habilidades: peso en bytes por lenguaje según la API de GitHub sobre 17 repositorios públicos (638.982 bytes clasificados).
- Trayectoria: los hitos se derivan de fechas de creación de repositorios.

Dos notas de honestidad que también aparecen en la propia página:

1. Los porcentajes se redondean a un decimal de forma independiente, así que la columna puede no sumar exactamente 100 %.
2. La trayectoria no incluye empleos ni formación: no fueron aportados ni constan en los perfiles consultados. Se prefirió un hueco visible a un dato inventado.

## Secretos y credenciales

El repositorio no contiene claves, tokens ni `.env`. `.gitignore` excluye `.env`, `.env.*` y `*.local` por si se añaden más adelante. El proyecto no realiza peticiones autenticadas: todo el contenido está compilado en el bundle a partir de datos públicos.

## Metadatos sociales

`index.html` declara `og:type`, `og:title`, `og:description`, `og:locale`, `og:url` y `og:image` (1200×630, en `public/og-image.jpg`), más `twitter:card`.

`og:url` y `og:image` son **absolutas** porque los rastreadores sociales no resuelven rutas relativas. Hoy apuntan al repositorio; al publicar el sitio en un dominio propio, cambia `og:image` por la URL del dominio.

## Despliegue

El build es estático (`dist/`), así que sirve en cualquier host de ficheros estáticos. Para Netlify o Vercel: comando `npm run build`, directorio de publicación `dist`.
