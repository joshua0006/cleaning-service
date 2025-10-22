import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import Home from '@/pages/Home'
import Checkout from '@/pages/Checkout'
import ThankYou from '@/pages/ThankYou'
import Cancelled from '@/pages/Cancelled'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="athena-ui-theme">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/cancelled" element={<Cancelled />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
