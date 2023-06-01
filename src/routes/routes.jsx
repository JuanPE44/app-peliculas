import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Movie } from '../pages/Movie/Movie'
import { Search } from '../pages/Search'

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/:type/:postMoviId" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  )
}
