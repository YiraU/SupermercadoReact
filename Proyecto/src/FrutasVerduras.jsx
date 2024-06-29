import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logoDeProyecto from './imagenes/logoProyecto.png';

import ManzanaRoja from './imagenes/manzanaRoja.png';
import Melon from './imagenes/Melon.jpg';
import Piña from './imagenes/Piña.jpg';
import Platano from './imagenes/platano.jpg';
import Tomate from './imagenes/tomate.jpg';
import './FrutasVerduras.css';


function FrutasVerduras() {
  const navigateTo = useNavigate();

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
              <li><button onClick={handleNavigation('/FormularioPago')} className="barra_navegacion">Procesar</button></li>
            </ul>
          </nav>

          <form className="barra_busqueda">
            <input type="text" placeholder="Buscar productos..." />
            <button type="submit">Buscar</button>
          </form>
      </header>

      <main>
        <Link to="/Categorias" onClick={handleNavigation('/Categorias')} className="boton-volver"> Regresar</Link>
        <h2 className="pd">Productos disponibles</h2>
        <div className="cuadricula">
          <div className="producto">
            <img src={ManzanaRoja} alt="Manzana Roja" />
            <h3>Manzana Roja</h3>
            <p>1 Und</p>
            <p>Precio: $1.200</p>
            <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
          </div>

          <div className="producto">
            <img src={Melon} alt="Melon" />
            <h3>Melon Comun</h3>
            <p>1 Und</p>
            <p>Precio: $2.500</p>
            <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
          </div>

          <div className="producto">
            <img src={Piña} alt="Piña" />
            <h3>Piña Oro Miel</h3>
            <p>500 gr</p>
            <p>Precio: $3.000</p>
            <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
          </div>

          <div className="producto">
            <img src={Platano} alt="Platano Verde" />
            <h3>Platano Verde</h3>
            <p>1 Und</p>
            <p>Precio: $1.000</p>
            <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
          </div>

          <div className="producto">
            <img src={Tomate} alt="Tomate Chonto" />
            <h3>Tomate Chonto</h3>
            <p>500 gr</p>
            <p>Precio: $1.800</p>
            <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
          </div>
        </div>
      </main>

      <footer >
        <p>Derechos de autor 2024 | Mi página web</p>
      </footer>
    </div>
  );
}

export default FrutasVerduras;
