import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BandGrid from "./band-grid"

createRoot(document.getElementById('band-grid')!).render(
  <StrictMode>
    <BandGrid />
  </StrictMode>,
)
