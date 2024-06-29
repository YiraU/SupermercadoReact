import { Link, useNavigate} from 'react-router-dom';
import logoDeEsquina from './imagenes/logo de esquina.png';
import logoDeProyecto from './imagenes/logoProyecto.png';
import logoLadoDerecho from './imagenes/logo lado derecho.png';
import Buchanans from './imagenes/buchanans.png'
import Coronita from './imagenes/coronita.png'
import Budweiser from './imagenes/budweiser.png'
import AguilaLata from './imagenes/aguila.png'



function Licores(){

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
             <img src={AguilaLata} alt="imagen"/>
             <h3>Cerveza Águila Lata</h3>
             <p>330 Ml X6 Unds</p>
             <p>Precio: $14.000</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>
        
            <div className="producto">
             <img src={Buchanans} alt="Imagen 2"/>
             <h3>Whisky Buchanans 12 Años</h3>
             <p>750 ML</p>
             <p>Precio: $132.500</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>
              

            <div className="producto">
             <img src={Coronita} alt="Imagen 3"/>
             <h3>Cerveza Coronita En Botella</h3>
             <p>210 ML X6 Unds</p>
             <p>Precio: $14.000</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>


            <div className="producto">
             <img src={Budweiser} alt="Imagen 3"/>
             <h3>Cerveza Budweiser En Lata</h3>
             <p>269 ML X6 Unds</p>
             <p>Precio: $11.800</p>
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

export default Licores;