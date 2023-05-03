import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Movie } from '../pages/Movie/Movie'

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:postMoviId" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  )
}
