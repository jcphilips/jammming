import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import JammmingContainer from './containers/JammmingContainer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JammmingContainer />
  </StrictMode>,
)
