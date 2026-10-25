import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Contacto } from './components/sections/Contacto'
import { Estudios } from './components/sections/Estudios'
import { Experiencia } from './components/sections/Experiencia'
import { Habilidades } from './components/sections/Habilidades'
import { Perfil } from './components/sections/Perfil'
import { Proyectos } from './components/sections/Proyectos'
import { Trayectoria } from './components/sections/Trayectoria'
import { education, educationNote } from './data/education'
import { experience, experienceNote } from './data/experience'
import { navigation } from './data/navigation'
import { profile } from './data/profile'
import { featuredProjects, secondaryProjects } from './data/projects'
import { skillReport, skillsCaveat, skillsMethod, skillsRoundingNote } from './data/skills'
import { socials } from './data/socials'
import { timeline, timelineNote } from './data/timeline'
import { useActiveSection } from './hooks'
import { SECTION_IDS } from './types'

/**
 * Composición de la página.
 *
 * Este es el único punto donde los datos y la interfaz se encuentran: las
 * secciones declaran qué necesitan y aquí se les entrega. Cambiar el contenido
 * no obliga a tocar ningún componente, y un componente se puede reutilizar con
 * otra fuente sin arrastrar `src/data` consigo.
 */
function App() {
  const activeSection = useActiveSection(SECTION_IDS)

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <Header items={navigation} activeId={activeSection} />

      <main id="contenido" tabIndex={-1}>
        <Perfil profile={profile} socials={socials} />

        <Proyectos featured={featuredProjects} secondary={secondaryProjects} />

        <Habilidades
          report={skillReport}
          method={skillsMethod}
          caveat={skillsCaveat}
          roundingNote={skillsRoundingNote}
        />

        <Experiencia entries={experience} note={experienceNote} />

        <Estudios entries={education} note={educationNote} />

        <Trayectoria entries={timeline} note={timelineNote} />

        <Contacto profile={profile} socials={socials} />
      </main>

      <Footer profile={profile} />
    </>
  )
}

export default App
