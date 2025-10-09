import './App.css'
import { Card } from './components/Card'
import { useEffect, useState } from 'react';
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch("http://localhost:3001/products");
    const data = await response.json();
    const products = data.products;
    setProducts(products);
    console.log(products);
  };
  return (
    <>
      <h1> Productos </h1>
      {products.map((product) => (
        <div className="container">
          <h1 className="title">Productos</h1>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
      ))}
      <Card />
    </>
  )
}

export default App
