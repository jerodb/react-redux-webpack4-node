import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
import fs from 'fs'
import path from 'path'
import Router from '../../src/navigation/Router'
import initStore from '../../src/store'
import theme from '../../src/res/theme'

export default (req, res) => {
  // Create a sheetsManager instance.
  const sheets = new ServerStyleSheets()

  // Create Redux store
  const store = initStore()

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Render component to string.
  const markup = renderToString(
    sheets.collect(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </StaticRouter>
      </Provider>,
    )
  )

  // Grab the CSS from sheets.
  const styles = sheets.toString()

  const template = path.join(__dirname, '..', '..', 'dist', 'index.html')

  // Loads template
  fs.readFile(template, 'utf8', (err, data) => {
    if (err) throw err

    // Inserts the rendered React HTML and styles.
    const document = data
      .replace('<div id="app"></div>', `<div id="app">${markup}</div>`)
      .replace('<style id="ssr-styles"></style>', `<style id="ssr-styles">${styles}</style>`)
      .replace('<script id="ssr-state"></script>',
        `<script id="ssr-state">window.INITIAL_STATE = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c'
        )}</script>`)

    // Sends html with the rendered React markup and styles.
    return res.send(document)
  })
}
