import { Route, Routes } from "react-router-dom";

import {
  Layout,
  Home,
  About,
  Products,
  ProductDetails,
  Cart,
  Checkout,
  Blogs,
  Contactus,
  Termandcondition,
  Privacypolicy,
  Faqs
} from "../Exportfiles";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="productdetails/:slug" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="termandcondition" element={<Termandcondition />} />
        <Route path="privacypolicy" element={<Privacypolicy />} />
        <Route path="faqs" element={<Faqs />} />
      </Route>
    </Routes>
  );
};
