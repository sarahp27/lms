import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { Recipient } from './Pages/Recipient';
import { Food } from './Pages/Food';
import { Navbar } from './Components/Navbar';

function App() {
  return (
   <>
   <Navbar/>
   <Router>
    <Routes>
      <Route path= "/" element={<Home/>} />
      <Route path= "/food" element={<Food/>} />
      <Route path= "/orders" element={<Recipient/>} />
    </Routes>
   </Router>
   </>
  );
}

export default App;
