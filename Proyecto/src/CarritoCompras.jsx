// CarritoCompras.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CarritoContext } from './CarritoContext';
//import './CarritoCompras.css';
import logoDeEsquina from './imagenes/logo de esquina.png';
import logoDeProyecto from './imagenes/logoProyecto.png';
import logoLadoDerecho from './imagenes/logo lado derecho.png';

function CarritoCompras() {
  const navigateTo = useNavigate();
  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);

  const handleIrAInicio = () => {
    navigateTo('/'); // Redirige al inicio
  };

  const handleIrAInicioSesion = () => {
    navigateTo('/InicioSesion');
  };

  const handleIrARegistro = () => {
    navigateTo('/Registro');
  };

  const handleIrACategorias = () => {
    navigateTo('/Categorias');
  };

  const handleIrAContacto = () => {
    navigateTo('/Contacto');
  };

  const handleIrAProcesar = () => {
    navigateTo('/FormularioPago');
  };

  return (
    <div>
       <header style={{ backgroundColor: '#FFD700' }}>
        <Link to="/" onClick={handleIrAInicio}>
          <img src={logoDeEsquina} className="Logo1" alt="Logo1" />
          <img src={logoDeProyecto} className="Encabezado" alt="Encabezado" />
          <img src={logoLadoDerecho} className="Logo2" alt="Logo2" />
        </Link>

        <nav>
          <ul>
            <li><button onClick={handleIrACategorias} className="barra_navegacion">Categorias</button></li>
            <li><button onClick={handleIrAInicioSesion} className="barra_navegacion">Inicio de sesion</button></li>
            <li><button onClick={handleIrARegistro} className="barra_navegacion">Registro</button></li>
            <li><button onClick={handleIrAContacto} className="barra_navegacion">Contacto</button></li>
            <li><button onClick={handleIrAProcesar} className="barra_navegacion">Procesar</button></li>
            <li><Link to="/CarritoCompras" className="carrito-compras">🛒 Carrito</Link></li>
          </ul>
        </nav>

        <form className="barra_busqueda">
          <input type="text" placeholder="Buscar productos..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Link to="/Categorias" onClick={handleIrACategorias} className="boton-volver"> Regresar</Link>
        <h2>Carrito de Compras</h2>
        {carrito.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <div className="cuadricula">
            {carrito.map(producto => (
              <div key={producto.id} className="producto">
                <img src={producto.imagen} className="producto-imagen" alt={producto.nombre} />
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <p>Precio: ${producto.precio}</p>
                <button onClick={() => eliminarDelCarrito(producto.id)} className="boton-carrito">
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        )}
        <Link to="/FormularioPago" className="boton-procesar">Proceder al Pago</Link>
      </main>

      <footer>
        <p>Derechos de autor 2023 | Mi pagina web</p>
      </footer>
    </div>
  );
}

export default CarritoCompras;
