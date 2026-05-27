import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
})

try {
  const { LanguageProvider } = await vite.ssrLoadModule('/src/LanguageContext.jsx')
  const { default: Privacy } = await vite.ssrLoadModule('/src/pages/Privacy.jsx')
  const { default: DataDeletion } = await vite.ssrLoadModule('/src/pages/DataDeletion.jsx')
  const { default: Programa } = await vite.ssrLoadModule('/src/pages/Programa.jsx')

  const template = await fs.readFile(path.join(root, 'dist/index.html'), 'utf-8')

  const routes = [
    { url: '/privacy', Component: Privacy, out: 'dist/privacy/index.html' },
    { url: '/delete-data', Component: DataDeletion, out: 'dist/delete-data/index.html' },
    { url: '/programa', Component: Programa, out: 'dist/programa/index.html' },
  ]

  for (const { url, Component, out } of routes) {
    const appHtml = renderToStaticMarkup(
      React.createElement(
        MemoryRouter,
        { initialEntries: [url] },
        React.createElement(
          LanguageProvider,
          null,
          React.createElement(Component),
        ),
      ),
    )

    const page = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`,
    )

    const absOut = path.join(root, out)
    await fs.mkdir(path.dirname(absOut), { recursive: true })
    await fs.writeFile(absOut, page)
    console.log(`Pre-rendered ${url} → ${out}`)
  }
} finally {
  await vite.close()
}
