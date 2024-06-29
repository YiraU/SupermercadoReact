import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoDeProyecto from './imagenes/logoProyecto.png';
import './Index.css';
import imagen1 from './imagenes/imagen1.jpeg';
import imagen2 from './imagenes/Despensa.jpg';
import imagen3 from './imagenes/ProductoAseo.jpg'

function Inicio() {
  const navigateTo = useNavigate();


  const handleNavigation = (path) => () => navigateTo(path);

  return (
    <div>
      <header  style={{ backgroundColor: '#FFD700' }}>
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
      <main>
        <h2>20% Descuentos En Productos Seleccionados</h2>
        <div className="contenedor">
          <div className="producto" onClick={handleNavigation('/FrutasVerduras')} style={{ cursor: 'pointer' }}>
            <img src={imagen1} alt="Producto 1" />
            <h3>FRUTAS Y VERDURAS</h3>
            <p>Descubre nuestra amplia selección de frutas 
              y verduras frescas, seleccionadas con esmero 
              para ofrecerte la mejor calidad.</p>
        
          </div>
          <div className="producto">
            <img src={imagen2} alt="Producto 2" />
            <h3>PRODUCTOS ALIMENTICIOS</h3>
            <p>Explora nuestra amplia variedad de productos alimenticios,
               seleccionados para satisfacer todas tus necesidades culinarias.</p>
            <span></span>
          </div>
          <div className="producto" onClick={handleNavigation('/Aseo')} style={{ cursor: 'pointer' }}>
            <img src={imagen3} alt="Producto 3" />
            <h3>PRODUCTOS DE ASEO</h3>
            <p>Mantén tu hogar limpio y fresco con nuestra variedad 
              de productos de aseo de alta calidad.</p>
            <span></span>
          </div>
        </div>

       

      </main>
      <footer>
     <p>Derechos de autor 2024 | Mi página web</p>
   </footer>
    </div>
     
  );
}

export default Inicio;
