
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Events from './Components/Events'
import Chefs from './Components/Chefs'
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import { Dropdown, Navbar } from 'react-bootstrap';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/events' element={<Events />} />
        <Route path='/chefs' element={<Chefs />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/dropdown' element={<Dropdown />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Navbar/>
    </>
  );
}

export default App;
