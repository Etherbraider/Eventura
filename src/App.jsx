import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Bookings from './components/Bookings';
import Hosted from './components/Hosted';
import About from './components/About';
import Footer from './components/Footer';
import Register from './components/Register';

import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/hosted" element={<Hosted/>} />
        <Route path="/booking" element={<Bookings />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route path='/register' element={<Register/>}/>

        

       
      </Routes>
      <Footer/>
      

    </BrowserRouter>
  );
}

export default App;
