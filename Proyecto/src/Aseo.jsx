import { Link, useNavigate} from 'react-router-dom';
import logoDeProyecto from './imagenes/logoProyecto.png';
import dersa from './imagenes/dersa.png';
import rosal from './imagenes/rosal.png';
import shampoo from './imagenes/shampoo.png';  
import superRiel from './imagenes/super riel.png'; 


function Aseo() {

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
 
           <form className="barra_busqueda">
             <input type="text" placeholder="Buscar productos..." />
             <button type="submit">Buscar</button>
           </form>
      </header>

        <main>

      
          <Link to="/Categorias" onClick={handleNavigation('/Categorias')} className="boton-volver"> Regresar</Link>
          <h2>Productos disponibles</h2>
          <div className="cuadricula">
            <div className="producto">
            <img src={dersa} className="dersa" alt="dersa" />
              <h3>Detergente Polvo Dersa</h3>
              <p>Bicarbonto Manzana 4000 gr</p>
              <p>Precio: $20.000</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>

            <div className="producto">
            <img src={rosal} className="rosal" alt="rosal" />
              <h3>Papel Higiénico Rosal Triple Hoja </h3>
              <p>X 4 Unds</p>
              <p>Precio: $6.500</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>

            <div className="producto">
            <img src={shampoo} className="shampoo" alt="shampoo" />
              <h3>Shampoo Bebé Johnson's Manzanilla</h3>
              <p>X 750 Ml</p>
              <p>Precio: $30.000</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>

            <div className="producto">
            <img src={superRiel } className="superRiel " alt="superRiel " />
              <h3>Limpiador Súper Riel Multiusos</h3>
              <p>X 925 ML</p>
              <p>Precio: $4.800</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>
          </div>
        </main>

        <footer>
          <p>Derechos de autor 2024 | Mi pagina web</p>
        </footer>
  
    </div>
  );
}

export default Aseo;