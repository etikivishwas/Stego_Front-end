
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Encode from './Encode';
import Decode from './Decode';
import Detect from './Detect';
import About from './About'
import Navbar from './Navbar';
import Login from './login';
import Error from './error';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/encode' element={<Encode />}></Route>
      <Route path='/decode' element={<Decode />}></Route>
      <Route path='/detect' element={<Detect />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='*' element={<Error />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
