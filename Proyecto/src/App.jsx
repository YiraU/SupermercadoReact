import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Categorias from './Categorias';
import InicioSesion from './InicioSesion';
import Registro from './Registro';
import Inicio from './Index';
import Contacto from './Contacto';
import Aseo from './Aseo';
import BebidasSnacks from './BebidasSnacks';
import Carnes from './Carnes';
import Despensa from './Despensa';
import FrutasVerduras from './FrutasVerduras';
import Lacteos from './Lacteos';
import Licores from './Licores';
import Panaderia from './Panaderia';
import FormularioPago from './FormularioPago';
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    let title = 'SUPERMERCADO: LA MANO DE DIOS'; // Título base de tu sitio

    switch (location.pathname) {
      case '/':
        title = 'Inicio';
        break;
      case '/Categorias':
        title = 'Categorías';
        break;
      case '/InicioSesion':
        title = 'Inicio de Sesión';
        break;
      case '/Registro':
        title = 'Registro de Usuarios';
        break;
      case '/Contacto':
        title = 'Contacto';
        break;
      case '/Aseo':
        title = 'Productos de Aseo';
        break;
      case '/BebidasSnacks':
        title = 'Bebidas y Snacks';
        break;
      case '/Carnes':
        title = 'Carnes';
        break;
      case '/Despensa':
        title = 'Despensa';
        break;
      case '/FrutasVerduras':
        title = 'Frutas y Verduras';
        break;
      case '/Lacteos':
        title = 'Lácteos';
        break;
      case '/Licores':
        title = 'Licores';
        break;
      case '/Panaderia':
        title = 'Panadería';
        break;
      case '/FormularioPago':
        title = 'Formulario de Pago';
        break;
      default:
        title = 'SUPERMERCADO: LA MANO DE DIOS';
    }

    document.title = title;
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Categorias" element={<Categorias />} />
      <Route path="/InicioSesion" element={<InicioSesion />} />
      <Route path="/Registro" element={<Registro />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="/Aseo" element={<Aseo />} />
      <Route path="/BebidasSnacks" element={<BebidasSnacks />} />
      <Route path="/Carnes" element={<Carnes />} />
      <Route path="/Despensa" element={<Despensa />} />
      <Route path="/FrutasVerduras" element={<FrutasVerduras />} />
      <Route path="/Lacteos" element={<Lacteos />} />
      <Route path="/Licores" element={<Licores />} />
      <Route path="/Panaderia" element={<Panaderia />} />
      <Route path="/FormularioPago" element={<FormularioPago />} />
    </Routes>
  );
}

export default App;