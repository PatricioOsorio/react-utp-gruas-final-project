import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderPublic from './pages/public/HeaderPublic';
import HomePagePublic from './pages/public/HomePagePublic';
import Page404 from './pages/Page404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderPublic />}>
          <Route index element={<HomePagePublic />} />
          {/* <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} /> */}
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
