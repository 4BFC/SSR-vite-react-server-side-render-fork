import React from 'react'
import ReactDOMServer from 'react-dom/server' // Server-side rendering module from react-dom library.
import { StaticRouter } from 'react-router-dom/server'
import { Router } from './Router'
import Error from './components/Hydration'

export const render = (url: string, statusCode: number) => {
  if (statusCode) {
    return ReactDOMServer.renderToString(<Error statusCode={statusCode} />)
  }

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <Router />
      </StaticRouter>
    </React.StrictMode>
  )
  return { html }
}
