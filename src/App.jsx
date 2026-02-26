import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import './css/App.css';
import { MovieProvider } from './contexts/MovieContext';

function App() {
  

  return (
    <div>
      <MovieProvider>
        <NavBar />
        <main className = "main-content">
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/favorites" element = {<Favorites />} />
          </Routes>
        </main>
      </MovieProvider>
    </div>
  )
}

export default App
