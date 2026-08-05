import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TestimonialGrid from './TestimonialGrid'

createRoot(document.getElementById('testimonial-grid')!).render(
  <StrictMode>
    <TestimonialGrid />
  </StrictMode>,
)
