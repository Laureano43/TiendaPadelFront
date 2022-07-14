import './App.css';
//import Tabla from './views/Tabla';
import NavApp from './views/Nav'
import HeaderComponentApp from './views/HeaderComponent'
//import FooterApp from './views/Footer'
import {Outlet}from "react-router-dom"

function App() {
  
  return (
    <>
        <NavApp />
        <HeaderComponentApp />
        <br /><hr /><br />
         <Outlet />
    </>
  );
}

export default App;
