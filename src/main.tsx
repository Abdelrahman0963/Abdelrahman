import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { Toaster } from './components/ui/sonner'
import { SmoothCursor } from './components/ui/smooth-cursor'
createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
    <SmoothCursor />
    <Toaster />
  </>,
)
