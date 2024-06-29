import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoDeProyecto from './imagenes/logoProyecto.png';
import './FormularioPago.css';

const FormularioPago = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const navigate = useNavigate();

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <header style={{ backgroundColor: '#FFD700' }}>
        <div className="header-container">
          <img src={logoDeProyecto} className="encabezado" alt="Encabezado" />
        </div>
        <nav>
          <ul className="nav-list">
            <li><button onClick={() => handleNavigate('/Categorias')} className="barra-navegacion">Categorias</button></li>
            <li><button onClick={() => handleNavigate('/InicioSesion')} className="barra-navegacion">Inicio de sesion</button></li>
            <li><button onClick={() => handleNavigate('/Registro')} className="barra-navegacion">Registro</button></li>
            <li><button onClick={() => handleNavigate('/Contacto')} className="barra-navegacion">Contacto</button></li>
            <li><button onClick={() => handleNavigate('/FormularioPago')} className="carrito-compras">🛒 Carrito</button></li>
          </ul>
        </nav>
      </header>

      <div className="contenedor">
        <div className="cart-section mt-150 mb-150">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="text-center">Seleccione un método de pago</h3>
                </div>
                <div className="panel-body">
                  <form role="form">
                    <div className={`form-group ${paymentMethod === 'credit-card' ? 'show' : 'hidden'}`}>
                      <label>NÚMERO DE TARJETA</label>
                      <div className="input-group">
                        <input type="tel" className="form-control" placeholder="Número de Tarjeta" />
                        <span className="input-group-addon"><span className="fa fa-credit-card"></span></span>
                      </div>
                    </div>
                    <div className={`form-group ${paymentMethod === 'credit-card' ? 'show' : 'hidden'}`}>
                      <div className="row">
                        <div className="col-xs-7 col-md-7">
                          <label>FECHA DE EXPIRACIÓN</label>
                          <input type="tel" className="form-control" placeholder="MM / YY" />
                        </div>
                        <div className="col-xs-5 col-md-5 pull-right">
                          <label>CV CODE</label>
                          <input type="tel" className="form-control" placeholder="CVC" />
                        </div>
                      </div>
                    </div>
                    <div className={`form-group ${paymentMethod === 'credit-card' ? 'show' : 'hidden'}`}>
                      <label>TITULAR DE LA TARJETA</label>
                      <input type="text" className="form-control" placeholder="Nombre del Titular" />
                    </div>

                    <div className={`form-group ${paymentMethod === 'pse' ? 'show' : 'hidden'}`}>
                      <label>Banco</label>
                      <select className="form-control">
                        <option value="bancolombia">Bancolombia</option>
                        <option value="davivienda">Davivienda</option>
                        <option value="bbva">BBVA</option>
                        <option value="otros">Otros Bancos</option>
                      </select>
                    </div>

                    <div className={`form-group ${paymentMethod === 'payu' ? 'show' : 'hidden'}`}>
                      <label>Email de PayU</label>
                      <input type="email" className="form-control" placeholder="Email de PayU" />
                    </div>

                    <div className="panel-footer">
                      <button className="btn-ppg">Procesar pago</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-md-6">
              <div className="card-container resumen-compra-container">
                <div className="card-header header-container">
                  <h2>Resumen de la Compra</h2>
                </div>
                <form action="procesar.jsx" method="post" className="resumen-compra-form">
                  <div className="card-details">
                    <label>N° Referencia de Pago:</label>
                    <input type="text" name="referencia_pago" required />

                    <label>Fecha:</label>
                    <input type="date" name="fecha" required />

                    <label>Datos de Envío:</label>
                    <textarea name="datos_envio" required></textarea>

                    <label>Nombre:</label>
                    <input type="text" name="nombre" required />

                    <label>Email:</label>
                    <input type="email" name="email" required />

                    <label>Dirección:</label>
                    <input type="text" name="direccion" required />

                    <label>Teléfono:</label>
                    <input type="tel" name="telefono" required />
                  </div>

                  <div className="summary">
                    <h3>Resumen</h3>
                    <label>Subtotal:</label>
                    <span>$100.00</span>

                    <label>Descuento en Productos:</label>
                    <span>$0.00</span>

                    <label>Bolsa Plástica:</label>
                    <span>$1.00</span>

                    <label>Total:</label>
                    <span>$101.00</span>
                  </div>

                  <div className="submit-button">
                    <input type="submit" value="Confirmar" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>Derechos de autor Edwin y Yira 2024 | Mi página web</p>
      </footer>
    </div>
  );
};

export default FormularioPago;
