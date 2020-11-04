import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
// to support polyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import './styles.css'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  // looks for accessibility violations in our rendered DOM
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
