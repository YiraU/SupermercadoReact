import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logoDeProyecto from './imagenes/logoProyecto.png';
import  './Categorias.css';


function Categorias() {
  const navigateTo = useNavigate();
  const gif="https://www.gifss.com/alimentos/carritos/carrito-de-compra-2.gif";
  const handleNavigation = (path) => () => navigateTo(path);

  return (
    <div>
      <header style={{ backgroundColor: '#FFD700' }}>
        <div className="contenedor-general">
          <Link to="/" onClick={handleNavigation('/')}>
            <img src={logoDeProyecto} className="Encabezado" alt="Encabezado" />
          </Link>
        </div>
        
          <nav>
            <ul>
              <li><button onClick={handleNavigation('/Categorias')} className="barra_navegacion">Categorias</button></li>
              <li><button onClick={handleNavigation('/InicioSesion')} className="barra_navegacion">Inicio</button></li>
              <li><button onClick={handleNavigation('/Registro')} className="barra_navegacion">Registro</button></li>
              <li><button onClick={handleNavigation('/Contacto')} className="barra_navegacion">Contacto</button></li>
              <li><button onClick={handleNavigation('/FormularioPago')} className="carrito-compras">🛒 Carrito</button></li>
             
             </ul>
           </nav>
 
           <form className="barra_busqueda">
             <input type="text" placeholder="Buscar productos..." />
             <button type="submit">Buscar</button>
           </form>
      </header>

      <section className="categorias">
        <h2> Categorias </h2>
        <ul className="boton-categorias">
          <li><button onClick={handleNavigation('/FrutasVerduras')}>Frutas y Verduras</button></li>
          <li><button onClick={handleNavigation('/BebidasSnacks')}>Bebidas y Snacks</button></li>
          <li><button onClick={handleNavigation('/Carnes')}>Carnes</button></li>
          <li><button onClick={handleNavigation('/Panaderia')}>Panaderia</button></li>
          <li><button onClick={handleNavigation('/Lacteos')}>Lacteos</button></li>
          <li><button onClick={handleNavigation('/Licores')}>Licores</button></li>
          <li><button onClick={handleNavigation('/Aseo')}>Aseo</button></li>
          <li><button onClick={handleNavigation('/Despensa')}>Despensa</button></li>
          <img className="gif"src={gif} alt="Descripción del GIF" />
        </ul>
      </section>

      

      <footer>
        <p>Derechos de autor 2023 | Mi pagina web</p>
      </footer>
    </div>
  );
}

export default Categorias;
