import React from 'react';
import { useParams ,useNavigate} from "react-router-dom";
import {ProductsData} from '../../productsdata';

export default function ProductDisplay() {
  const { id } = useParams();

  const navigate = useNavigate();

  const btnBack = () => {
    navigate("/products/list");
  }
  return (
    <>
      <div className="listOfProducts">
        <button onClick={btnBack}>Back</button>
      <div className="productDisplay">
        <h1>{ProductsData[id -1].name}</h1>{" "}
        <p>{ProductsData[id - 1].description}</p>{" "}
      </div>
    </div>
    </>
  )
}
