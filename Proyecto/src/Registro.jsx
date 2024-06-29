import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import logoDeEsquina from './imagenes/logo de esquina.png';
import logoDeProyecto from './imagenes/logoProyecto.png';
import logoLadoDerecho from './imagenes/logo lado derecho.png';
import './Registro.css';
function Registro() {

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

      <form action="insertarDatos.jsx" method="post" className="formulario_registro">
        <h3>Formulario De Registro</h3>
        <label>Nombre:</label>
        <input type="text" name="nombre" required />
        <label>Apellidos:</label>
        <input type="text" name="apellidos" required />
        <label>Correo electronico:</label>
        <input type="email" name="correo" required />
        <label>Telefono:</label>
        <input type="tel" name="telefono" required />
        <label>Contraseña:</label>
        <input type="password" name="contraseña" required />
        <input type="checkbox" className="check-box" id="terminos-condiciones" required />
        <label htmlFor="terminos-condiciones">Acepto términos y condiciones</label>
        <input type="submit" value="Registrarse" />
      </form>

      <footer>
        <p>Derechos de autor 2023 | Mi pagina web</p>
      </footer>
  

    </div>
  );
}

export default Registro;
