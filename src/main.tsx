import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BandGrid from "./BandGrid"

createRoot(document.getElementById('band-grid')!).render(
  <StrictMode>
    <BandGrid />
  </StrictMode>,
)
