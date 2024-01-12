import React from 'react';
import '../styles/ProductsDetailsPage.css';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data';
import image from '../images/landing-pic.jpg';
function ProductsDetailsPage() {
  const { productId } = useParams();

  const detail = products.find((product) => product.name === productId);

  return (
    <section className="detailsPage">
      <div className="detailsPage__heading">
        <h1>Details</h1>
      </div>
      <div className="detailsPage__body">
        <img src={detail.image} alt="" className="detailsPage__image" />
        <div>
          <h1>{detail.name}</h1>
          <h3>Description:</h3>
          <p>{detail.description}</p>
          <p>
            <span style={{ fontWeight: 'bolder' }}>ingredients: </span>{detail.ingrdient}
          </p>
          <p className="detailsPage__price">{detail.price}</p>
          <Link to={'tel:+2348055431383'}>
            <button>CALL TO ORDER</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductsDetailsPage;
