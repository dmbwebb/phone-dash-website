import { createContext, useContext } from 'react'

// Contexto con el brazo desbloqueado ('rs' | 'rspp') para que las
// páginas del curso filtren su contenido.
export const CursoArmContext = createContext(null)

export function useCursoArm() {
  return useContext(CursoArmContext)
}
