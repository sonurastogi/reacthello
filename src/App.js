import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './newpage/Login';
import Home from './newpage/Home';
import About from './newpage/About';
//import About from './newpage/About';
//import About from './newpage/about';
//import Login from './newpage/Login';
//import Login from './newpage/Login';

function App() {

  

  return (
    



    <BrowserRouter>
      <Routes>

    

        <Route path="/"  element={<Home />} /> 
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
         

                 
      </Routes>
    </BrowserRouter>


  );


}

export default App;
