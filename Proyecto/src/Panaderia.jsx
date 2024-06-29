import { Link, useNavigate} from 'react-router-dom';
import logoDeEsquina from './imagenes/logo de esquina.png';
import logoDeProyecto from './imagenes/logoProyecto.png';
import logoLadoDerecho from './imagenes/logo lado derecho.png';
import Chocorramo from './imagenes/chocorramo.png'
import PonqueGala from './imagenes/gala.png'
import TostadasBimbo from './imagenes/tostadas.png'
import SubmarinoMarinela from './imagenes/submarinos.png'




function Panaderia(){

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
             <img src={Chocorramo} alt="imagen"/>
             <h3>Ponq Chocorramo Mini</h3>
             <p>X20 Und 400 G</p>
             <p>Precio: $13.500</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>
        
            <div className="producto">
             <img src={PonqueGala} alt="Imagen 2"/>
             <h3>Ponq Gala Bloque Vainilla</h3>
             <p>400 G</p>
             <p>Precio: $11.500</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>
              

            <div className="producto">
             <img src={TostadasBimbo} alt="Imagen 3"/>
             <h3>Tostadas Bimbo Mantequilla</h3>
             <p>12 Und X170 G</p>
             <p>Precio: $7.000</p>
              <Link to="#" className="boton-carrito">Agregar al Carrito</Link>
            </div>


            <div className="producto">
             <img src={SubmarinoMarinela} alt="Imagen 3"/>
             <h3>Submarinos Marinela Surtidos </h3>
             <p> X6 Unds 204 G</p>
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

export default Panaderia;