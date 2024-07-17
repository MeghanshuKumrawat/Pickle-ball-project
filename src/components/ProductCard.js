
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ProductCard = ({ product }) => {
  const baseURL = 'http://127.0.0.1:8000/';
  return (
    <div class="col-6">
      <div class="card">
        <img src={`${baseURL}/${product.image}`} class="card-img-top" alt={product.title} />
        <div class="card-body">
          <p class="card-text">{product.title}</p>
          <h5 class="card-title">${product.price}</h5>
          <div class="mt-4 text-center">
          <NavLink to={`/shop/products/${product.id}`} className='btn-submit'>View</NavLink>
          </div>
        </div>
      </div>
    </div>
    // <div class="col-sm-4 mb-4">
    //   <NavLink to={`/products/${product.id}`}>
    //   <Card className="card">
    //     <img className="card-img-top" src={`${baseURL}/${product.image}`} alt={product.title} />
    //     <div className="card-body">
    //       <h5 className="card-title">{product.title}</h5>
    //       <p className="card-text">{product.details}</p>
    //       <p className="card-text">${product.price}</p>
    //       {/* <a href={`/products/${product.id}`} className="btn btn-primary">Go somewhere</a> */}
    //     </div>
    //   </Card>
    //   </NavLink>
    // </div>
  );
};

const Card = styled.div`
text-decoration: none;
  img {
    min-width: 286px;
    min-height: 180px;
  }

`;
export default ProductCard;
