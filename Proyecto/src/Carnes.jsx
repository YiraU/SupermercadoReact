import { Link, useNavigate} from 'react-router-dom';
import logoDeProyecto from './imagenes/logoProyecto.png';
import CarneMolida from './imagenes/Carne molida.png'
import JamonCunit from './imagenes/Jamon cunit.png'
import Muslo from './imagenes/Muslo.png'
import Salchichon from './imagenes/Salchichon.png'
import VanCamps from './imagenes/Van camps.png'



function Carnes(){


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
             <img src={CarneMolida} alt="imagen"/>
             <h3>Carne Molida De Res</h3>
             <p>Bandeja X 250 gr</p>
             <p>Precio: $10.500</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>
        
            <div className="producto">
             <img src={Muslo} alt="Imagen 2"/>
             <h3>Muslo De Pollo Campesino</h3>
             <p>X Kg</p>
             <p>Precio: $2.500</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>
              

            <div className="producto">
             <img src={VanCamps} alt="Imagen 3"/>
             <h3>Atun Van Camp's</h3>
             <p>160 gr</p>
             <p>Precio: $4.000</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>


            <div className="producto">
             <img src={JamonCunit} alt="Imagen 3"/>
             <h3>Jamon Cunit</h3>
             <p>400 gr</p>
             <p>Precio: $8.000</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
          </div>

          <div className="producto">
             <img src={Salchichon} alt="Imagen 3"/>
             <h3>Salchichon Ranchera Cervecero</h3>
             <p>480 gr</p>
             <p>Precio: $15.800</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
          </div>

        </div>
        
      
    </main>
    <br/>
    <br/>
    <br/>
    <footer>
        <p>Derechos de autor 2023 | Mi pagina web</p>
    </footer>

</div>




    )
}

export default Carnes;