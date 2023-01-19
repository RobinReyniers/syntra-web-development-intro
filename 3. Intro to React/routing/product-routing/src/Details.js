import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "./products";
import { useParams } from "react-router-dom";

function Details() {
  let { id } = useParams();
  const product = products.find((product) => product.id === id);
  const navigate = useNavigate();
  return (
    <div>
      <h1>{product.name}</h1>
      <h2>{product.brand}</h2>
      <h3>{product.price}</h3>
      <span>{product.rating}</span>
      <p>{product.description}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default Details;
