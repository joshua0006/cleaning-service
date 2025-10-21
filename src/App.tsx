import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import Home from '@/pages/Home'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="athena-ui-theme">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
