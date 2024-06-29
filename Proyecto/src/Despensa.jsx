import { Link, useNavigate} from 'react-router-dom';
import logoDeEsquina from './imagenes/logo de esquina.png';
import logoDeProyecto from './imagenes/logoProyecto.png';
import logoLadoDerecho from './imagenes/logo lado derecho.png';
import FrijolBlanco from './imagenes/frijol blanco.jpg'
import Garbanzos from './imagenes/garbanzos.jpg'
import Maiz from './imagenes/maiz.jpg'
import Frijol from './imagenes/frijol.jpg'




function Despensa(){

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

     <Link to="/Categorias" onClick={handleNavigation('/Categorias')}  className="boton-volver"> Regresar</Link>

        <h2>Productos disponibles</h2>
        <div className="cuadricula">
         <div className="producto">
             <img src={FrijolBlanco} alt="imagenes/frijol.wedp"/>
             <h3>Frijol Blanco</h3>
             <p>Precio: $3.200</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>
        
            <div className="producto">
             <img src={Garbanzos} alt="Imagen 2"/>
             <h3>Garbanzos</h3>
             <p>Precio: $3.440</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>
              

            <div className="producto">
             <img src={Maiz} alt="Imagen 3"/>
             <h3>Bolsa De Maiz</h3>
             <p>Precio: $4.500</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>


            <div className="producto">
             <img src={Frijol} alt="Imagen 3"/>
             <h3>Frijol Bola Roja</h3>
             <p>Precio: $3.000</p>
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

export default Despensa;