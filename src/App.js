import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import ContactPage from './Pages/ContactPage';
import NavBar from './Components/NavBar';
import About from './Pages/AboutPage';
import Footer from './Components/Footer';
import ProductsDetailsPage from './Pages/detailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='AboutPage' element={<About/>}/>
          <Route path='ProductPage' element={<ProductsPage/>}/>
          <Route path='/ProductDetailsPage/:productId' element={<ProductsDetailsPage/>}/>
          <Route path='ContactPage' element={<ContactPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;