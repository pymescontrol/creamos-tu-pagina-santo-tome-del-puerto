import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

// Importación de Páginas
import Home from './pages/Home';
import Services from './pages/Services';
import BusinessWebs from './pages/BusinessWebs';
import RestaurantWebs from './pages/RestaurantWebs';
import RuralHouses from './pages/RuralHouses';
import Freelancers from './pages/Freelancers';
import Process from './pages/Process';
import Zone from './pages/Zone';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/webs-negocios" element={<BusinessWebs />} />
          <Route path="/restaurantes-bares" element={<RestaurantWebs />} />
          <Route path="/casas-rurales" element={<RuralHouses />} />
          <Route path="/autonomos" element={<Freelancers />} />
          <Route path="/proceso" element={<Process />} />
          <Route path="/zona" element={<Zone />} />
          <Route path="/sobre-daiaxme" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          
          {/* Redirección por defecto si la ruta no existe */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
