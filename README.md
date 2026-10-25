# Portafolio web — Carlos Pérez

SPA de portafolio construida con **React 19, TypeScript y CSS Modules**. Todo lo que aparece en la página proviene de dos fuentes verificables: la API pública de GitHub y la copia de datos del perfil de LinkedIn. No hay datos de relleno.

**Sitio publicado:** https://carlos-perez-portafolio.netlify.app

---

## Qué hay aquí

Una sola página con siete secciones y un índice fijo:

| Sección          | Contenido                                               | Procedencia                      |
| ---------------- | ------------------------------------------------------- | -------------------------------- |
| 01 · Perfil      | Presentación, foco de trabajo y datos de cuenta         | GitHub + LinkedIn                |
| 02 · Proyectos   | 4 destacados y 8 secundarios, con enlaces reales        | GitHub (repositorios y demos)    |
| 03 · Habilidades | Peso real de cada lenguaje en bytes + grupos de trabajo | API de lenguajes de GitHub       |
| 04 · Experiencia | Cuatro puestos, de 2020 a 2026                          | Copia de datos de LinkedIn       |
| 05 · Estudios    | Una titulación, un curso superior y formación abierta   | Copia de datos de LinkedIn       |
| 06 · Trayectoria | Cinco etapas de código por año, de 2022 a 2026          | Fechas de repositorios en GitHub |
| 07 · Contacto    | Correo y perfiles                                       | LinkedIn + GitHub                |

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
│   ├── sections/           # Perfil, Proyectos, Habilidades, Experiencia, Estudios, Trayectoria, Contacto
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
- **LinkedIn** (`/in/carlos-perez93`): nombre, correo, ubicación, perfil profesional y el registro completo de empleo y formación, tomado de la copia de datos del perfil. Alimenta las secciones 04 (Experiencia: puestos, empleadores, fechas, lugar y stack) y 05 (Estudios: centros, titulaciones y fechas). No se incluye el teléfono móvil que figura en esa copia.
- Habilidades: peso en bytes por lenguaje según la API de GitHub sobre 17 repositorios públicos con código (947.296 bytes clasificados). Quedan fuera este mismo sitio, que se mediría a sí mismo, y el repositorio de perfil.
- Experiencia: los cuatro puestos de la copia de datos, en el orden del documento. El registro de la Universidad Surcolombiana no trae descripción y la ficha lo dice en lugar de rellenarla. Las fechas se reproducen tal cual: dos tramos se solapan con el puesto en la Universidad de La Amazonia (IVO Internacional entre marzo y noviembre de 2022; OnPlay entre diciembre de 2022 y enero de 2023) y no se corrigen.
- Estudios: tres registros —la titulación en la Universidad de La Amazonia, el curso de Deusto Formación y la formación en midudev— con centro, denominación y fechas. La etiqueta de tipo se deduce de la propia denominación del título.
- Trayectoria: una etapa por año, de 2022 a 2026, solo con hitos de código y la fecha de creación del repositorio en GitHub. Los puestos y la formación no se repiten aquí: tienen sección propia.

Dos notas de honestidad que también aparecen en la propia página:

1. Los porcentajes se redondean a un decimal de forma independiente, así que la columna puede no sumar exactamente 100 %.
2. Las etapas de empleo y formación aparecen con lo que consta en la copia de datos de LinkedIn —empleador, cargo, fechas, lugar y stack—, sin responsabilidades ni logros añadidos. Donde la copia no describe el puesto, la ficha lo dice en lugar de rellenarlo. Las fechas se reproducen tal cual, aunque dos etapas se solapen.

## Secretos y credenciales

El repositorio no contiene claves, tokens ni `.env`. `.gitignore` excluye `.env`, `.env.*` y `*.local` por si se añaden más adelante. El proyecto no realiza peticiones autenticadas: todo el contenido está compilado en el bundle a partir de datos públicos.

## Metadatos sociales

`index.html` declara `og:type`, `og:title`, `og:description`, `og:locale`, `og:url` y `og:image` (1200×630, en `public/og-image.jpg`), más `twitter:card`.

`og:url` y `og:image` son **absolutas** porque los rastreadores sociales no resuelven rutas relativas. Apuntan al dominio de producción (`https://carlos-perez-portafolio.netlify.app`); si el sitio cambia de dominio, hay que actualizar ambas a la vez.

## Despliegue

El sitio está publicado en Netlify: **https://carlos-perez-portafolio.netlify.app**

La configuración vive en [`netlify.toml`](netlify.toml) y no depende de ajustes hechos a mano en el panel:

- `npm run build` genera `dist/`, que es lo único que se sirve.
- Node 22 en el entorno de build, la misma versión con la que se prueba en local.
- Redirección `/*` → `/index.html` con estado 200, para que una recarga profunda no termine en un 404.
- Cache indefinida para `/assets/*`, seguro porque Vite incluye un hash en el nombre de cada archivo.

`public/` incluye `robots.txt` y `sitemap.xml` con la URL de producción; sin ellos, la redirección de la SPA devolvería HTML en rutas que los rastreadores esperan en texto plano.

Como el build es estático, el mismo `dist/` sirve en cualquier otro host: comando `npm run build`, directorio de publicación `dist`.
