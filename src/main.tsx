import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from './redux/store.ts'
import { ThemeProvider } from './providers/ThemeProvide.tsx'

import { RouterProvider } from 'react-router'
import router from './routes/index.tsx'
import { Toaster } from './components/ui/sonner.tsx'
import "./i18n";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider  defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router}></RouterProvider>
        <Toaster richColors></Toaster>
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>
);
