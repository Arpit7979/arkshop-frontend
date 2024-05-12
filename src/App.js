import {Route,Routes,BrowserRouter} from "react-router-dom"
import './App.css';
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
      <Navbar/>
      <Routes>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/' exact element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
