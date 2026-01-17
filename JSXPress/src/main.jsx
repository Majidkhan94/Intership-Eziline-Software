import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {JSXPress} from "./JSXPress"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JSXPress />
  </StrictMode>,
)
