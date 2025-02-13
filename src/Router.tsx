import { Routes, Route } from 'react-router-dom'
import { Home, About } from './pages'
import Error from './components/Hydration'

export const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/about" element={<About />} />
      <Route path="*" element={<Error statusCode={404} />} />
    </Routes>
  )
}
