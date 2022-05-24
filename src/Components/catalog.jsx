import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";
import { useState, useEffect } from "react";

const Catalog = () => {
  let [products, setProducts] = useState([]);

  const loadCatalog = () => {
    let service = new DataService();
    let data = service.getCatalog();
    setProducts(data);
  };
  useEffect(() => {
    loadCatalog();
  });

  return (
    <div className="catalog">
      <h2>This is our amazing catalog</h2>
      <h3>We have {products.length}</h3>
      {products.map((prod) => (
        <Product key={prod._id} data={prod}></Product>
      ))}

      {/* <Product title="test a" price="12.5"></Product>
      <Product title="test b" price="12.5"></Product>
      <Product title="test c" price="12.5"></Product>
      <Product title="test d" price="12.5"></Product>
      <Product title="test e" price="12.5"></Product>
      <Product title="test f" price="12.5"></Product> */}
    </div>
  );
};
export default Catalog;
