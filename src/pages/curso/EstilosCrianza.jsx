import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CursoLayout from '../../curso/CursoLayout'
import { WHATSAPP_NUMBER } from '../../config'
import { trackLead } from '../../analytics'

// CTA final: mensaje pre-llenado para que el padre nos cuente su estilo.
const CTA_WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  '¡Hola! Hice el quiz de estilos de crianza 🦅\n\nEl estilo con el que más me identifico es: \n\nY lo que quisiera mejorar para ser más papá/mamá Águila es: '
)}`

// ─────────────────────────────────────────────────────────────
// Contenido: los tres estilos de crianza frente al celular
// (material de la Sesión 0 — Orientación, "Mi Ritmo Digital").
// Estructura: quiz primero → explicación (infografía) →
// resultado personalizado → mensaje motivacional.
// ─────────────────────────────────────────────────────────────

const ESTILOS = {
  toro: {
    emoji: '🐂',
    nombre: 'El Toro',
    subtitulo: 'Estilo autoritario',
    adjetivo: 'autoritario',
    desc: 'Exige obediencia ciega: control estricto, sin explicaciones ni espacio para el diálogo. Se basa en el "porque lo digo yo". Cree que lo único que su hijo necesita es control.',
    tags: ['Alta exigencia', 'Poco diálogo', 'Poca calidez'],
    frase: '"Porque yo lo digo."',
    resultado: 'El hijo obedece por miedo, no por convicción. Cuando puede, hace las cosas a escondidas.',
  },
  pato: {
    emoji: '🦆',
    nombre: 'El Pato',
    subtitulo: 'Estilo permisivo',
    adjetivo: 'permisivo',
    desc: 'Brinda mucho afecto y libertad, pero carece de normas y consecuencias. Cree que su hijo es frágil y por eso debe ser protegido de todo.',
    tags: ['Alta calidez', 'Sin normas', 'Cede fácil'],
    frase: '"¡Claro que sí, mi amor, lo que quieras!"',
    resultado: 'El hijo/a aprende que insistiendo, siempre gana.',
  },
  aguila: {
    emoji: '🦅',
    nombre: 'El Águila',
    subtitulo: 'Estilo equilibrado',
    adjetivo: 'equilibrado',
    desc: 'Guía con firmeza y estructura, pero siempre desde el afecto, el diálogo y el respeto. Piensa que su hijo es capaz de grandes cosas, pero necesita apoyo y estructura para lograrlo.',
    tags: ['Firme con amor', 'Explica', 'Consistente'],
    frase: '"Entiendo cómo te sientes. Y aun así, esta es la norma."',
    resultado: 'El hijo/a aprende a autorregularse porque entiende el por qué de las reglas.',
  },
}

// Mensaje personalizado según el resultado del quiz.
const MENSAJES = {
  toro: 'En tu casa hay reglas y eso es muy valioso: a tu hijo/a no le falta estructura. Tu reto es sumar diálogo y calidez — explicar el porqué y escuchar cómo se siente. Cuando el límite viene con explicación, se obedece por convicción y no por miedo.',
  pato: 'Tu estilo es puro cariño, y esa es una gran fortaleza: tu hijo/a sabe que puede contar contigo. Tu reto es sostener los límites — decir que no y mantenerlo, aunque haya protesta. Un acuerdo que a veces aplica y a veces no, enseña que insistiendo se gana.',
  aguila: '¡Felicitaciones! Ya combinas lo más difícil: reglas claras con afecto. Este es justamente el estilo que promueve el programa — sigue leyendo para conocer los tres estilos y por qué el tuyo funciona.',
  mixto: 'Como la mayoría de cuidadores, combinas rasgos de varios estilos según el día y la situación. Eso es completamente normal — sigue leyendo para conocer los tres estilos y hacia dónde queremos movernos.',
}

// Las opciones se muestran SIN pistas (sin emojis) y en orden
// distinto en cada pregunta, para no revelar el patrón.
const PREGUNTAS = [
  {
    texto: 'En tu casa, ¿quién decide cuándo se apaga la pantalla?',
    opciones: [
      { estilo: 'aguila', texto: 'Hay un acuerdo claro que todos conocemos.' },
      { estilo: 'toro', texto: 'Yo mando — lo que digo se hace, sin preguntas.' },
      { estilo: 'pato', texto: 'Más o menos… depende del día y del humor.' },
    ],
  },
  {
    texto: 'Tu hijo/a quiere más tiempo de pantalla — y ya es hora de dormir. ¿Qué pasa?',
    opciones: [
      { estilo: 'pato', texto: 'Bueno, pero solo 10 minutos más… (y se vuelven 40).' },
      { estilo: 'aguila', texto: 'Recuerdo el acuerdo con calma: "Ya es hora de dormir, mañana sigues."' },
      { estilo: 'toro', texto: 'Se apaga y punto, sin negociación.' },
    ],
  },
  {
    texto: 'Pones una regla con el celular y tu hijo/a adolescente se pone bravo/a. ¿Qué haces?',
    opciones: [
      { estilo: 'toro', texto: 'Que se aguante — la regla es la regla y no hay más.' },
      { estilo: 'pato', texto: 'Si se pone muy bravo/a, cedo — prefiero no pelear.' },
      { estilo: 'aguila', texto: 'Mantengo el límite, pero le pregunto cómo se siente y explico el por qué.' },
    ],
  },
  {
    texto: 'Cuando pones una regla nueva sobre el celular, ¿la explicas?',
    opciones: [
      { estilo: 'aguila', texto: 'Sí — explico el porqué una vez, con calma, y la regla se mantiene.' },
      { estilo: 'pato', texto: 'A veces… pero si protesta mucho, mejor la dejo pasar.' },
      { estilo: 'toro', texto: 'No tengo que explicar nada — para eso soy el papá / la mamá.' },
    ],
  },
  {
    texto: 'Las reglas del celular en tu casa…',
    opciones: [
      { estilo: 'pato', texto: 'Cambian según el día — a veces aplican, a veces no.' },
      { estilo: 'toro', texto: 'Las pongo yo y cambian cuando yo lo diga.' },
      { estilo: 'aguila', texto: 'Son casi siempre las mismas y todos en la casa las conocemos.' },
    ],
  },
]

function calcularResultado(respuestas) {
  const conteo = { toro: 0, pato: 0, aguila: 0 }
  respuestas.forEach((r) => { conteo[r] += 1 })
  const max = Math.max(conteo.toro, conteo.pato, conteo.aguila)
  const ganadores = Object.keys(conteo).filter((k) => conteo[k] === max)
  return { conteo, ganadores }
}

function TarjetaEstilo({ estilo }) {
  const e = ESTILOS[estilo]
  return (
    <article className={`estilo-card estilo-card--${estilo}`}>
      <span className="estilo-card__emoji" aria-hidden="true">{e.emoji}</span>
      <h3>{e.nombre}</h3>
      <span className="estilo-card__subtitulo">{e.subtitulo}</span>
      <p className="estilo-card__desc">{e.desc}</p>
      <div className="estilo-card__tags">
        {e.tags.map((t) => <span key={t}>{t}</span>)}
      </div>
      <div className="estilo-card__ejemplo">
        <span className="estilo-card__ejemplo-label">Su frase típica:</span>
        <em>{e.frase}</em>
        <p>{e.resultado}</p>
      </div>
    </article>
  )
}

// Diagrama: mapa de los estilos según reglas (exigencia) y cariño (calidez).
function MapaEstilos() {
  return (
    <div className="mapa-estilos">
      <div className="mapa-estilos__eje-y" aria-hidden="true">
        <span>Más reglas</span>
        <span>Menos reglas</span>
      </div>
      <div className="mapa-estilos__cuerpo">
        <div className="mapa-estilos__grid">
          <div className="mapa-celda mapa-celda--toro">
            <span className="mapa-celda__emoji" aria-hidden="true">🐂</span>
            <strong>El Toro</strong>
            <span>Muchas reglas, poco apoyo</span>
          </div>
          <div className="mapa-celda mapa-celda--aguila">
            <span className="mapa-celda__emoji" aria-hidden="true">🦅</span>
            <strong>El Águila ⭐</strong>
            <span>Muchas reglas, mucho apoyo</span>
          </div>
          <div className="mapa-celda mapa-celda--vacia">
            <span className="mapa-celda__emoji" aria-hidden="true">🫥</span>
            <span>Sin reglas y sin apoyo: ahí no queremos estar</span>
          </div>
          <div className="mapa-celda mapa-celda--pato">
            <span className="mapa-celda__emoji" aria-hidden="true">🦆</span>
            <strong>El Pato</strong>
            <span>Pocas reglas, mucho apoyo</span>
          </div>
        </div>
        <div className="mapa-estilos__eje-x" aria-hidden="true">
          <span>Menos apoyo</span>
          <span>Más apoyo</span>
        </div>
      </div>
    </div>
  )
}

function Quiz({ onTerminado }) {
  const [actual, setActual] = useState(0)
  const [respuestas, setRespuestas] = useState([])

  const responder = (estilo) => {
    const nuevas = [...respuestas, estilo]
    if (nuevas.length === PREGUNTAS.length) {
      onTerminado(nuevas)
    } else {
      setRespuestas(nuevas)
      setActual(actual + 1)
    }
  }

  const atras = () => {
    if (actual === 0) return
    setRespuestas(respuestas.slice(0, -1))
    setActual(actual - 1)
  }

  const pregunta = PREGUNTAS[actual]

  return (
    <div className="quiz">
      <div className="quiz__progreso" aria-hidden="true">
        {PREGUNTAS.map((_, i) => (
          <span key={i} className={i <= actual ? 'activo' : ''} />
        ))}
      </div>
      <span className="quiz__contador">Pregunta {actual + 1} de {PREGUNTAS.length}</span>
      <h3 className="quiz__pregunta">{pregunta.texto}</h3>
      <div className="quiz__opciones">
        {pregunta.opciones.map((op) => (
          <button key={op.estilo} onClick={() => responder(op.estilo)} className="quiz__opcion">
            {op.texto}
          </button>
        ))}
      </div>
      {actual > 0 && (
        <button onClick={atras} className="quiz__atras">← Cambiar la respuesta anterior</button>
      )}
    </div>
  )
}

// Todo lo que se revela DESPUÉS de terminar el quiz:
// explicación (infografía) → resultado → mensaje motivacional.
function Revelacion({ respuestas, onReiniciar }) {
  // respuestas puede ser null si el padre saltó el quiz — en ese caso
  // se muestra la explicación sin la tarjeta de resultado.
  const conResultado = Array.isArray(respuestas) && respuestas.length > 0
  const { conteo, ganadores } = conResultado
    ? calcularResultado(respuestas)
    : { conteo: null, ganadores: [] }
  const esMixto = ganadores.length > 1
  const principal = ganadores[0]
  const mensaje = esMixto ? MENSAJES.mixto : MENSAJES[principal]
  const ref = useRef(null)

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Evento de analítica (si gtag está cargado): qué estilo salió.
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'quiz_estilos_resultado', {
        resultado: conResultado
          ? (esMixto ? `mixto_${ganadores.join('_')}` : principal)
          : 'quiz_saltado',
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={ref} className="quiz-resultado">
      {/* ── Tu resultado (solo si respondió el quiz) ── */}
      {conResultado && (
        <>
          <div className="curso-section-label">Tu resultado</div>
          <div className={`resultado-hero resultado-hero--${esMixto ? 'mixto' : principal}`}>
            <div className="resultado-hero__emojis" aria-hidden="true">
              {ganadores.map((g) => (
                <span key={g}>{ESTILOS[g].emoji}</span>
              ))}
            </div>
            {esMixto ? (
              <h3>
                Tu estilo es una mezcla de{' '}
                {ganadores.map((g, i) => (
                  <span key={g}>
                    {ESTILOS[g].nombre}
                    {i < ganadores.length - 1 ? ' y ' : ''}
                  </span>
                ))}
              </h3>
            ) : (
              <h3>Tu estilo es {ESTILOS[principal].nombre} — {ESTILOS[principal].adjetivo}</h3>
            )}
            <p className="resultado-hero__conteo">
              Tus respuestas: 🐂 {conteo.toro} · 🦆 {conteo.pato} · 🦅 {conteo.aguila}
            </p>
            <p className="resultado-hero__mensaje">{mensaje}</p>
          </div>
        </>
      )}

      {/* ── Explicación: los tres estilos (infografía) ── */}
      <div className="curso-section-label">Los tres estilos de crianza</div>
      <p className="curso-lead">
        Los expertos encuentran una y otra vez estos mismos tres estilos de
        crianza — en el programa los llamamos por su animal. Mira en cuál te
        reconoces:
      </p>
      <div className="estilos-grid">
        {['toro', 'pato', 'aguila'].map((e) => (
          <TarjetaEstilo key={e} estilo={e} />
        ))}
      </div>

      {/* ── Diagrama: el mapa de los estilos ── */}
      <div className="curso-section-label">El mapa de los estilos</div>
      <p className="curso-lead">
        ¿Cómo entenderlos? Imagina un mapa con dos ejes: cuántas{' '}
        <strong>reglas</strong> ponemos y cuánto <strong>apoyo</strong> damos.
        El Águila vive en el <strong>cuadrante dorado</strong>: muchas reglas y
        mucho apoyo.
      </p>
      <MapaEstilos />

      {/* ── El estilo que promovemos ── */}
      <div className="curso-section-label">¿Cuál promovemos y por qué?</div>
      <p className="curso-lead">
        Los niños y adolescentes que mejor aprenden a regularse — con el
        celular y con todo lo demás — crecen con cuidadores{' '}
        <strong>empáticos pero firmes</strong>. Ni puro control, ni pura
        flexibilidad: <strong>reglas claras, explicadas con cariño y
        sostenidas con calma</strong>.
      </p>

      {/* ── Mensaje motivacional ── */}
      <div className="motivacional">
        <span className="motivacional__emoji" aria-hidden="true">🦅💙</span>
        <h3>El estilo no es un destino — es una práctica</h3>
        <p>
          Nadie es 100% Águila todos los días, y no se trata de ser
          perfecto/a: se trata de ser <strong>predecible</strong>. Cada acuerdo
          claro, cada límite sostenido con cariño, es un vuelo de práctica. En
          este programa lo vamos a entrenar juntos, paso a paso. 💪
        </p>
        <button onClick={onReiniciar} className="quiz__reiniciar">
          {conResultado ? 'Volver a responder el quiz' : 'Responder el quiz'}
        </button>
      </div>

      {/* ── Llamado a la acción: cuéntanos por WhatsApp ── */}
      <div className="curso-cta">
        <span className="curso-cta__emoji" aria-hidden="true">💬</span>
        <h3>Ahora cuéntanos tú</h3>
        <p>
          ¿Con qué estilo te identificas más? ¿Y qué quisieras mejorar para
          ser más un papá o mamá Águila? Escríbenos — nos encanta leerte.
        </p>
        <a
          href={CTA_WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-link cta-link--whatsapp"
          onClick={trackLead}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
          </svg>
          <span>Cuéntanos por WhatsApp</span>
        </a>
      </div>
    </div>
  )
}

function ArticuloEstilos() {
  const [respuestas, setRespuestas] = useState(null)
  const [saltado, setSaltado] = useState(false)

  const reiniciar = () => {
    setRespuestas(null)
    setSaltado(false)
  }

  return (
    <article className="curso-post">
      <header className="curso-post__header fade-in-up">
        <span className="curso-card__tipo">Blog del curso · Quiz · 5 min</span>
        <h1>¿Qué estilo de crianza tienes?</h1>
      </header>

      {!respuestas && !saltado ? (
        <>
          <section className="section fade-in-up delay-1">
            <p>
              ¿Alguna vez te has preguntado <strong>qué estilo de crianza
              tienes</strong>? No existen categorías perfectas — cada familia
              es un mundo — pero los expertos en crianza llevan décadas
              estudiando cómo criamos, y han identificado{' '}
              <strong>tres estilos muy comunes</strong>.
            </p>
            <p>
              ¿Cuál de los tres es el tuyo? Responde este pequeño quiz y
              averígualo 😉. Contesta pensando en cómo reaccionas{' '}
              <strong>de verdad</strong> — no hay respuestas buenas ni malas, y
              nadie más ve tu resultado.
            </p>
          </section>

          <div className="fade-in-up delay-2">
            <Quiz onTerminado={setRespuestas} />
            <p className="quiz-nota">
              🔓 Al terminar el quiz se revela tu resultado y la explicación de
              los tres estilos de crianza.
            </p>
            <p className="quiz-saltar">
              ¿Ya hiciste el quiz antes?{' '}
              <button onClick={() => setSaltado(true)}>
                Salta directo a la explicación →
              </button>
            </p>
          </div>
        </>
      ) : (
        <Revelacion respuestas={respuestas} onReiniciar={reiniciar} />
      )}

      <Link to="/curso" className="back-link fade-in-up">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        <span>Volver a los recursos del curso</span>
      </Link>
    </article>
  )
}

function EstilosCrianza() {
  return (
    <CursoLayout>
      <ArticuloEstilos />
    </CursoLayout>
  )
}

export default EstilosCrianza
