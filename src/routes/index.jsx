import { Navigate, Route, Routes } from "react-router-dom";

import {
  Cart,
  Checkout,
  CompletePayment,
  Home,
  Login,
  Menu,
  Register
} from "../containers";

import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";

import { Orders } from "../containers/Admin/Orders";
import { NewProduct } from "../containers/Admin/NewProduct";
import { EditProduct } from "../containers/Admin/EditProduct";
import { Products } from "../containers/Admin/Products";

function PrivateRoute({ children }) {
  const userInfo = JSON.parse(localStorage.getItem("devburguer:userData") || "{}");
  const token = userInfo?.token;
  return token ? children : <Navigate to="/login" replace />;
}

export function Router() {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* ROTAS DO USUÁRIO — protegidas */}
      <Route element={
        <PrivateRoute>
          <UserLayout />
        </PrivateRoute>
      }>
        <Route path="/home" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/complete-payment" element={<CompletePayment />} />
      </Route>

      {/* ADMIN — protegido */}
      <Route path="/admin" element={
        <PrivateRoute>
          <AdminLayout />
        </PrivateRoute>
      }>
        <Route path="pedidos" element={<Orders />} />
        <Route path="novo-produto" element={<NewProduct />} />
        <Route path="editar-produto" element={<EditProduct />} />
        <Route path="produtos" element={<Products />} />
      </Route>

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  );
}