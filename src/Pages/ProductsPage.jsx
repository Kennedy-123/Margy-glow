import React from 'react';
import { Link } from 'react-router-dom';
// import image from '../images/landing-pic.jpg';
import logo from '../images/logo.png';
import { products } from '../data';
import '../styles/products.css';

function ProductsPage() {
  return (
    <div>
      <div className="grid">
        {products.map(product => {
         const {id, name, image, price, stock} = product
         return(
          
          <div className="product__card" key={id}>
            <p className="product__outOfStock">{stock}</p>
            <img src={image} alt="" className="product__image" />
            <Link to={`/ProductDetailsPage/${name}`}><p>{name}</p></Link>
            <p className="price">{price}</p>
            <img src={logo} alt="" className="logo" />
          </div>
         )
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
