import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Páginas publicas
import LayoutPagePublic from './pages/public/LayoutPagePublic';
import HomePagePublic from './pages/public/HomePagePublic';
import ContactoPagePublic from './pages/public/ContactoPagePublic';
import AcercaPagePublic from './pages/public/AcercaPagePublic';
import FaqPagePublic from './pages/public/FaqPagePublic';
import ConsultaMatriculaPagePublic from './pages/public/ConsultaMatriculaPagePublic';

// Páginas privadas
import LayoutPagePrivate from './pages/private/LayoutPagePrivate';
import HomePagePrivate from './pages/private/HomePagePrivate';
import FormularioPagePrivate from './pages/private/FormularioPagePrivate';

// Páginas extras
import Page404 from './pages/Page404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPagePublic />}>
          <Route index element={<HomePagePublic />} />
          <Route path="IniciarSesion" element={<LoginPage />} />
          <Route path="Registrar" element={<RegisterPage />} />
          <Route path="Contacto" element={<ContactoPagePublic />} />
          <Route path="Acerca" element={<AcercaPagePublic />} />
          <Route path="PreguntasFrecuentes" element={<FaqPagePublic />} />
          <Route path="ConsultaMatricula" element={<ConsultaMatriculaPagePublic />} />
        </Route>

        <Route path="/Private" element={<LayoutPagePrivate />}>
          <Route index element={<HomePagePrivate />} />
          <Route path="Formulario" element={<FormularioPagePrivate />} />

        </Route>

        {/* <Route path="/manager" element={<HeaderAdmin />}>
          <Route index element={<HomeAdminPage />} />

          <Route path="categories" element={<CategoriesPage />}></Route>
          <Route path="categories/create" element={<CreateCategory />} />

          <Route path="products" element={<ProductsPage />} />
          <Route path="products/create" element={<CreateProduct />} />

          <Route path="outputs-inputs" element={<OutputsInputsPage />} />
          <Route path="outputs-inputs/create" element={<CreateInputOutput />} />

          <Route path="users" element={<UsersPage />} />
          <Route path="users/create" element={<CreateUser />} />

          <Route path="dashboard" element={<DashboardPage />} />
        </Route> */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
