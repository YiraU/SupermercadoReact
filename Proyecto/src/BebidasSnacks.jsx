import { Link, useNavigate} from 'react-router-dom';
import logoDeProyecto from './imagenes/logoProyecto.png';
import Pony from './imagenes/pony.png'
import Pepsi from './imagenes/pepsi.png'
import Saviloe from './imagenes/sviloe.png'
import Vive100 from './imagenes/vive100.png'


function BebidasSnacks(){

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
             <img src={Pony} alt="imagen"/>
             <h3>Bebida Pony Malta</h3>
             <p>Botella 1,5 LT</p>
             <p>Precio: $4.000</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>
        
            <div className="producto">
             <img src={Saviloe} alt="Imagen 2"/>
             <h3>Saviloe Aloe Vera</h3>
             <p>320 ML</p>
             <p>Precio: $2.500</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>
              

            <div className="producto">
             <img src={Pepsi} alt="Imagen 3"/>
             <h3>Bebida Gaseosa Pepsi</h3>
             <p>3125 ML</p>
             <p>Precio: $4.000</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>


            <div className="producto">
             <img src={Vive100} alt="Imagen 3"/>
             <h3>Bebida Energizante Vive 100%</h3>
             <p>190 ML</p>
             <p>Precio: $1.800</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
          </div>


        </div>

        
      
    </main>
    <br/>
    <br/>
    <br/>
    <footer>
        <p>Derechos de autor 2024 | Mi pagina web</p>
    </footer>

</div>




    )
}

export default BebidasSnacks;
