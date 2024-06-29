import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import logoDeProyecto from './imagenes/logoProyecto.png';
import contactese from './imagenes/contacte_con_nosotros.jpg';
import './Contacto.css';
function Contacto() {

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
       <div className="contenedor">

        <div className="formulario_contacto">
        <img src={contactese} className="imagen-contacto" alt="Contactese con nosotros" /> {/* Usa la imagen importada */}
            <p>Teléfono: 1234-5678</p>
            <p>Email: Supermercadomd@gmail.com</p>
            <p>Sitio web: Superlamanodedios.com</p>
            <script src="https://www.google.com/recaptcha/api.js"></script>
            <script src="scripts.js"></script>
        </div>

        <div className="formulario_registro">
            <form action="insertarDatos.php" method="post">
                <h2>Escribanos</h2>
                <input type="text" id="name" name="name" placeholder="Nombre" required/>
                <input type="text" id="lastname" name="lastname" placeholder="Apellido" required/>
                <input type="email" id="email" name="email" placeholder="Correo" required/>
                <textarea id="message" name="message" placeholder="Mensaje" required></textarea>
                <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
                <button type="submit">Enviar</button>
            </form>
        </div>
      </div>
    
     <footer>
       <p>Derechos de autor 2024 | Mi pagina web</p>
     </footer>
  
   </div>
  );
  
  }


export default Contacto;