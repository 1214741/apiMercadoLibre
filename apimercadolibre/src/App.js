import ProductList from './components/List'
import ProductDetail from './components/Details'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<ProductList/>}/>
        <Route path = "/productDetail/:id" element={<ProductDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
