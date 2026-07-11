// ─────────────────────────────────────────────────────────────
// Acceso al área del curso (solo familias tratadas del estudio).
//
// Cada brazo de tratamiento tiene su propia clave:
//   - RS    → ve el contenido básico del curso
//   - RS+PP → ve todo el contenido (incluye lo exclusivo del
//             programa para padres)
//
// Para cambiar una clave, edita ARM_CODES y vuelve a desplegar.
// NOTA: es un candado del lado del cliente — suficiente para
// evitar el acceso casual del grupo control, no es seguridad
// criptográfica.
// ─────────────────────────────────────────────────────────────

export const ARM_CODES = {
  RITMO2026: 'rs',
  AGUILA2026: 'rspp',
}

const STORAGE_KEY = 'mrd_curso_arm'

// Tolerante a errores de tipeo comunes: mayúsculas/minúsculas,
// tildes y espacios.
export function normalizeCode(raw) {
  return (raw || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '')
    .toUpperCase()
}

export function tryUnlock(raw) {
  const arm = ARM_CODES[normalizeCode(raw)] || null
  if (arm) {
    try {
      localStorage.setItem(STORAGE_KEY, arm)
    } catch {
      // localStorage no disponible (modo incógnito estricto) — la
      // sesión funciona igual, solo no se recuerda al volver.
    }
  }
  return arm
}

export function getStoredArm() {
  try {
    const arm = localStorage.getItem(STORAGE_KEY)
    return arm === 'rs' || arm === 'rspp' ? arm : null
  } catch {
    return null
  }
}

export function lock() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // sin localStorage no hay nada que borrar
  }
}
