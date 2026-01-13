import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { Toaster } from './components/ui/sonner'
import { Suspense } from 'react'
import LoadingScreen from './components/loading/LoadingScreen'
createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<LoadingScreen />}>
    <RouterProvider router={router} />
    <Toaster />
  </Suspense>,
)
