import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Menu from './pages/menu';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './components/footer';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="app">
     <Router>
     <Navbar/>
      <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/menu"  element={<Menu/>}/>
      <Route path="/about"  element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/> 
     </Routes>
     <Footer/>
     </Router>
    </div>
  );
}

export default App;
