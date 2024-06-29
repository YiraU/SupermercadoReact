import { Link, useNavigate} from 'react-router-dom';
import logoDeEsquina from './imagenes/logo de esquina.png';
import logoDeProyecto from './imagenes/logoProyecto.png';
import logoLadoDerecho from './imagenes/logo lado derecho.png';
import Leche from './imagenes/leche.png'
import Mantequilla from './imagenes/mantequilla.png'
import Yogurt from './imagenes/yogurt.png'
import CremaLeche from './imagenes/crema leche.png'


function Lacteos(){

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
             <img src={CremaLeche} alt="imagen"/>
             <h3>Crema De Leche Alquería</h3>
             <p>900 G</p>
             <p>Precio: $14.000</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>
        
            <div className="producto">
             <img src={Leche} alt="Imagen 2"/>
             <h3>Leche Colanta Entera </h3>
             <p>1000ML X6</p>
             <p>Precio: $22.500</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>
              

            <div className="producto">
             <img src={Mantequilla} alt="Imagen 3"/>
             <h3>Margarina La Fina En Barra</h3>
             <p>500 G</p>
             <p>Precio: $8.000</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>


            <div className="producto">
             <img src={Yogurt} alt="Imagen 3"/>
             <h3>Yogurt Yogo Yogo Alpina Fresa </h3>
             <p> 1100 G</p>
             <p>Precio: $5.800</p>
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

export default Lacteos;