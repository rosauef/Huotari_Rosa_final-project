import Home from './pages/Home';
import Search from './pages/Search';
import RecipeDetails from './pages/RecipeDetails';
import Favorites from './pages/Favorites';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
    </>
  )
}

export default App
