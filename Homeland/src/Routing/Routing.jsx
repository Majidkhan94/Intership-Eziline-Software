import { Routes, Route } from "react-router-dom";
import {Layout, About, Blog, Buy, CommercialBuilding, Condo, Contact, Home, Properties, Propertyland, Rent} from "../index";


export const Routing = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/condo" element={<Condo />} />
        <Route path="/propertyland" element={<Propertyland />} />
        <Route path="/commercialBuilding" element={<CommercialBuilding />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};
