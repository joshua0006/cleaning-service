import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import Home from '@/pages/Home'
import Checkout from '@/pages/Checkout'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="athena-ui-theme">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
