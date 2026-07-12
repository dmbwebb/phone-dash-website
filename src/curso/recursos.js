// Registro central de recursos del curso.
// Cada recurso declara qué brazos pueden verlo: 'rs', 'rspp'.
// El brazo RS+PP siempre puede ver todo lo que ve RS; los recursos
// exclusivos del programa para padres llevan arms: ['rspp'].

export const RECURSOS = [
  {
    slug: 'estilos-de-crianza',
    emoji: '🧭',
    tipo: 'Blog + Quiz',
    titulo: '¿Qué tipo de cuidador o cuidadora eres?',
    descripcion:
      '¿Qué tipo de mamá, papá o cuidador eres? Los expertos en crianza han propuesto tres tipos de padres. Responde el quiz y averígualo.',
    fecha: 'Julio 2026',
    arms: ['rs', 'rspp'],
  },
]

export function recursosParaArm(arm) {
  return RECURSOS.filter((r) => r.arms.includes(arm))
}
