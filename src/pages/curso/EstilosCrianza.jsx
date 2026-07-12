import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CursoLayout from '../../curso/CursoLayout'

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
    subtitulo: 'El Mano Dura',
    desc: 'Muchas reglas, poca explicación. Lo que el papá o la mamá dice, se hace — sin preguntas. El control es lo primero.',
    tags: ['Alta exigencia', 'Poco diálogo', 'Poca calidez'],
    frase: '"Nada de pantalla. Punto. No me explico."',
    resultado: 'El hijo obedece por miedo, no por convicción. Cuando puede, busca la pantalla a escondidas.',
  },
  pato: {
    emoji: '🦆',
    nombre: 'El Pato',
    subtitulo: 'El Blandito',
    desc: 'Mucho cariño, pero difícil decir que no. Los horarios cambian según el humor del día. Evita el conflicto a toda costa.',
    tags: ['Alta calidez', 'Sin rutinas', 'Cede fácil'],
    frase: '"Bueno, pero solo 10 minutos más…" (y se vuelven 2 horas)',
    resultado: 'El hijo/a aprende que insistiendo, siempre gana.',
  },
  aguila: {
    emoji: '🦅',
    nombre: 'El Águila',
    subtitulo: 'Empático/a pero Firme',
    desc: 'Reglas claras y afecto. Escucha, explica el por qué, y mantiene el límite aunque duela. Ve el panorama completo.',
    tags: ['Firme con amor', 'Explica', 'Consistente'],
    frase: '"Tienes 30 minutos. Cuando se acaben, apagamos — eso fue lo que acordamos."',
    resultado: 'El hijo/a aprende a autorregularse porque entiende el por qué de las reglas.',
  },
}

// Mensaje personalizado según el resultado del quiz.
const MENSAJES = {
  toro: 'En tu casa hay reglas y eso es muy valioso: a tu hijo/a no le falta estructura. Tu reto es sumar diálogo y calidez — explicar el porqué y escuchar cómo se siente. Cuando el límite viene con explicación, se obedece por convicción y no por miedo.',
  pato: 'Eres puro cariño, y eso es una gran fortaleza: tu hijo/a sabe que puede contar contigo. Tu reto es sostener los límites — decir que no y mantenerlo, aunque haya protesta. Un acuerdo que a veces aplica y a veces no, enseña que insistiendo se gana.',
  aguila: '¡Felicitaciones! Ya combinas lo más difícil: reglas claras con afecto. Este es justamente el estilo que promueve el programa — las claves de arriba te sirven para mantenerlo incluso en los días difíciles.',
  mixto: 'Como la mayoría de cuidadores, combinas rasgos de varios estilos según el día y la situación. Eso es completamente normal — lo importante es saber hacia dónde moverse: más Águila, un acuerdo a la vez.',
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

const TIPS_AGUILA = [
  { titulo: 'Pon los acuerdos por escrito.', texto: 'Escribe los horarios del celular en un papel y pégalo en la nevera o en el cuarto. Lo que está escrito no se discute.' },
  { titulo: 'Avisa antes de que se acabe el tiempo.', texto: 'Di "en 5 minutos apagamos" — así tu hijo/a no siente que lo cortan de sorpresa.' },
  { titulo: 'Explica el por qué, una sola vez.', texto: 'No tienes que justificarte cada vez, pero sí explicar con calma: "el celular en la noche afecta tu sueño."' },
  { titulo: 'Si se ponen bravos/as, no cedas.', texto: 'Mantén el límite con calma. Ceder una vez enseña que bravuconear funciona.' },
  { titulo: 'Consistencia + cariño = confianza.', texto: 'No se trata de ser perfecto/a, sino de ser predecible. Tu hijo/a necesita saber qué esperar de ti.' },
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
        <span className="estilo-card__ejemplo-label">Con el celular dice:</span>
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
        <span>← Más reglas</span>
        <span>Menos reglas →</span>
      </div>
      <div className="mapa-estilos__cuerpo">
        <div className="mapa-estilos__grid">
          <div className="mapa-celda mapa-celda--toro">
            <span className="mapa-celda__emoji" aria-hidden="true">🐂</span>
            <strong>El Toro</strong>
            <span>Muchas reglas, poco cariño</span>
          </div>
          <div className="mapa-celda mapa-celda--aguila">
            <span className="mapa-celda__emoji" aria-hidden="true">🦅</span>
            <strong>El Águila</strong>
            <span>Muchas reglas, mucho cariño</span>
          </div>
          <div className="mapa-celda mapa-celda--vacia">
            <span className="mapa-celda__emoji" aria-hidden="true">🫥</span>
            <span>Sin reglas y sin acompañar: ahí no queremos estar</span>
          </div>
          <div className="mapa-celda mapa-celda--pato">
            <span className="mapa-celda__emoji" aria-hidden="true">🦆</span>
            <strong>El Pato</strong>
            <span>Pocas reglas, mucho cariño</span>
          </div>
        </div>
        <div className="mapa-estilos__eje-x" aria-hidden="true">
          <span>← Menos cariño expresado</span>
          <span>Más cariño expresado →</span>
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
  const { conteo, ganadores } = calcularResultado(respuestas)
  const esMixto = ganadores.length > 1
  const principal = ganadores[0]
  const mensaje = esMixto ? MENSAJES.mixto : MENSAJES[principal]
  const ref = useRef(null)

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // Evento de analítica (si gtag está cargado): qué estilo salió.
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'quiz_estilos_resultado', {
        resultado: esMixto ? `mixto_${ganadores.join('_')}` : ganadores[0],
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div ref={ref} className="quiz-resultado">
      {/* ── Explicación: los tres estilos (infografía) ── */}
      <div className="curso-section-label">Los tres estilos de crianza</div>
      <p className="curso-lead">
        ¡Listo! Antes de darte tu resultado, conoce a los tres personajes. La
        ciencia que estudia la crianza encuentra una y otra vez estos mismos
        tres tipos de cuidador — en el programa los llamamos por su animal:
      </p>
      <div className="estilos-grid">
        {['toro', 'pato', 'aguila'].map((e) => (
          <TarjetaEstilo key={e} estilo={e} />
        ))}
      </div>

      {/* ── Diagrama: el mapa de los estilos ── */}
      <div className="curso-section-label">El mapa de los estilos</div>
      <p className="curso-lead">
        Los estilos se diferencian en dos cosas: cuántas <strong>reglas</strong>{' '}
        ponemos y cuánto <strong>cariño</strong> expresamos al ponerlas.
      </p>
      <MapaEstilos />

      {/* ── El estilo que promovemos ── */}
      <div className="curso-section-label">¿Cuál promovemos y por qué?</div>
      <p className="curso-lead">
        Décadas de investigación llegan a la misma conclusión: los niños y
        adolescentes que mejor aprenden a regularse — con el celular y con todo
        lo demás — crecen con cuidadores <strong>empáticos pero firmes</strong>.
        Ni puro control (enseña a obedecer por miedo y a esconderse), ni pura
        flexibilidad (enseña que insistiendo se gana): reglas claras, explicadas
        con cariño y sostenidas con calma.
      </p>
      <div className="aguila-tips">
        <div className="aguila-tips__header">
          <span className="aguila-tips__animal" aria-hidden="true">🦅</span>
          <span>¿Cómo ser más Águila en casa? — 5 claves prácticas</span>
        </div>
        <div className="aguila-tips__cols">
          {TIPS_AGUILA.map((tip, i) => (
            <div key={tip.titulo} className="aguila-tips__item">
              <span className="aguila-tips__num">{i + 1}</span>
              <span><strong>{tip.titulo}</strong> {tip.texto}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tu resultado ── */}
      <div className="curso-section-label">Tu resultado</div>
      <div className={`resultado-hero resultado-hero--${esMixto ? 'mixto' : principal}`}>
        <div className="resultado-hero__emojis" aria-hidden="true">
          {ganadores.map((g) => (
            <span key={g}>{ESTILOS[g].emoji}</span>
          ))}
        </div>
        {esMixto ? (
          <h3>
            Eres una mezcla de{' '}
            {ganadores.map((g, i) => (
              <span key={g}>
                {ESTILOS[g].nombre}
                {i < ganadores.length - 1 ? ' y ' : ''}
              </span>
            ))}
          </h3>
        ) : (
          <h3>Eres {ESTILOS[principal].nombre} — {ESTILOS[principal].subtitulo}</h3>
        )}
        <p className="resultado-hero__conteo">
          Tus respuestas: 🐂 {conteo.toro} · 🦆 {conteo.pato} · 🦅 {conteo.aguila}
        </p>
        <p className="resultado-hero__mensaje">{mensaje}</p>
      </div>

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
          Volver a responder el quiz
        </button>
      </div>
    </div>
  )
}

function ArticuloEstilos() {
  const [respuestas, setRespuestas] = useState(null)

  return (
    <article className="curso-post">
      <header className="curso-post__header fade-in-up">
        <span className="curso-card__tipo">Blog del curso · Quiz · 5 min</span>
        <h1>¿Qué tipo de cuidador o cuidadora eres?</h1>
      </header>

      {!respuestas ? (
        <>
          <section className="section fade-in-up delay-1">
            <p>
              ¿Alguna vez te has preguntado <strong>qué tipo de mamá, papá o
              cuidador eres</strong>? No existen categorías perfectas — cada
              familia es un mundo — pero los expertos en crianza llevan décadas
              estudiando cómo criamos, y han propuesto{' '}
              <strong>tres tipos de padres</strong>.
            </p>
            <p>
              ¿Cuál de los tres eres tú? Responde este pequeño quiz y
              averígualo 😉. Contesta pensando en cómo reaccionas{' '}
              <strong>de verdad</strong> — no hay respuestas buenas ni malas, y
              nadie más ve tu resultado.
            </p>
          </section>

          <div className="fade-in-up delay-2">
            <Quiz onTerminado={setRespuestas} />
            <p className="quiz-nota">
              🔓 Al terminar el quiz se revelan los tipos de cuidador, tu
              resultado y las claves del programa.
            </p>
          </div>
        </>
      ) : (
        <Revelacion respuestas={respuestas} onReiniciar={() => setRespuestas(null)} />
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
