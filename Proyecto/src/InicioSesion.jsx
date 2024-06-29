import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import logoDeProyecto from './imagenes/logoProyecto.png';
import  './InicioSesion.css';

function InicioSesion() {

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
              <li><button onClick={handleNavigation('/FormularioPago')} className="carrito-compras">🛒 Carrito</button></li>
             </ul>
           </nav>

      </header>
      <form action="insertarDatos2.jsx" method="post" className="formulario_contacto">
        <h3>Inicio de sesion</h3>
        <label>Usuario:</label>
        <input type="text" name="Usuario" required />
        <label>Clave:</label>
        <input type="email" name="Clave" required />
        <input type="checkbox" className="check-box" id="terminos-condiciones" required />
        <label htmlFor="terminos-condiciones">Olvido usuario o clave</label>
        <input type="submit" value="Iniciar" />
      </form>

      <footer>
        <p>Derechos de autor 2023 | Mi pagina web</p>
      </footer>
    </div>
  );
}

export default InicioSesion;


