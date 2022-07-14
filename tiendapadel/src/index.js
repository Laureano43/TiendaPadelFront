import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import HeaderComponentApp from './views/HeaderComponent'
//import NavApp from './views/Nav'
import FooterApp from './views/Footer'
import TablaFApp from './views/TablaF';
import TablaApp from './views/Tabla';
import QuienesApp from './views/Quienes';
import CardApp from './views/Card';
import CardRemeraApp from './views/CardRemera';
import CardZapaApp from './views/CardZapa';
import AltaProdA from './views/AltaProd';
import LoginApp from './views/Login';
import {BrowserRouter, Routes, Route} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/Quienes" element={<QuienesApp />}></Route>
                <Route path="/Paletas" element={<CardApp />}></Route>
                <Route path="/Remeras" element={<CardRemeraApp />}></Route>
                <Route path="/Zapas" element={<CardZapaApp />}></Route>                
                <Route path="/RankingFemenino" element={<TablaFApp />}></Route>
                <Route path="/RankingMasculino" element={<TablaApp />}></Route>
                <Route path="/Login" element={<LoginApp />}></Route>    
                <Route path="/FormAltaProducto" element={<AltaProdA />}></Route>          
            </Route>
        </Routes>
        <FooterApp />
    </React.StrictMode>
  </BrowserRouter>
);

//const formLogin = ReactDOM.createRoot(document.getElementById('formLogin'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*  const HeaderComponent = ReactDOM.createRoot(document.getElementById('HeaderComponent'))
  HeaderComponent.render(
    <React.StrictMode>
      <HeaderComponentApp />
    </React.StrictMode>
  );
  
  const Nav = ReactDOM.createRoot(document.getElementById('Nav'))
  Nav.render(
    <React.StrictMode>
      <NavApp />
    </React.StrictMode>
  );
  
  const Footer = ReactDOM.createRoot(document.getElementById('Footer'))
  Footer.render(
    <React.StrictMode>
      <FooterApp />
    </React.StrictMode>
  );*/