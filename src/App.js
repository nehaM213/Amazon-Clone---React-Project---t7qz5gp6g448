import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import { ProductsData } from "./api/api";
import Signin from "./pages/Signin";
import Registration from "./pages/Registration";
import Cart from "./pages/Cart";
import AccountAndList from "./pages/AccountAndList";
import ProductView from "./pages/ProductView";

const Layout=()=>{
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={ProductsData}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/accountAndList" element={<AccountAndList />}></Route>
          <Route path="/productView" element={<ProductView />}></Route>
        </Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
