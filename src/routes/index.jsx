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

export function Router() {
  return (
    <Routes>

      
      <Route path="/" element={<UserLayout />}>

       
        <Route index element={<Home />} />

        <Route path="home" element={<Home />} />
        <Route path="cardapio" element={<Menu />} />
        <Route path="carrinho" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="complete-payment" element={<CompletePayment />} />

      </Route>

      
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="pedidos" element={<Orders />} />
        <Route path="novo-produto" element={<NewProduct />} />
        <Route path="editar-produto" element={<EditProduct />} />
        <Route path="produtos" element={<Products />} />
      </Route>

      
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />

      
      <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  );
}