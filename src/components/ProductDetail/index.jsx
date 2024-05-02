// ProductDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom'; // Si estás utilizando React Router para la navegación

import { items} from '../ProductsData/productsData';
import ProductItem from '../ProductItem';

const ProductDetail = (props) => {

  return (
    <div>
      {items}
    </div>
  );
};

export default ProductDetail;
