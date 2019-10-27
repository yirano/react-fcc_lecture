import React from "react";
import "./App.css";
import productsData from "./components/vschoolProducts";
import Product from "./components/Product.component";

function App() {
  const productComponent = productsData.map(product => (
    <Product
      key={product.id}
      name={product.name}
      price={product.price}
      description={product.description}
    />
  ));
  return <div>{productComponent}</div>;
}

export default App;
