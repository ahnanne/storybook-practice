import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import './styles/index.scss'

import Login from './pages/Login'

render(
  <StrictMode>
    <Login />
  </StrictMode>,
  document.getElementById('root')
)
