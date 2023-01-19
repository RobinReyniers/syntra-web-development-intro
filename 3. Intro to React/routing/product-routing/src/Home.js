import React from "react";
import { products } from "./products";
import { Link } from "react-router-dom";

function Home() {
  return products.map((product) => {
    return (
      <div
        style={{
          width: "18rem",
          marginTop: "25px",
          border: "2px solid black",
          marginLeft: "30px",
        }}
      >
        <h3
          style={{
            padding: "2rem",
            marginLeft: "90px",
            width: "15rem",
            marginBottom: "10px",
          }}
          key={product.id}
        >
          <Link
            to={`Details/${product.id}`}
            style={{
              color: "black",
              textDecoration: "none",
            }}
          >
            {product.name}
          </Link>
        </h3>
        <span
          style={{
            borderRadius: "3px",
            padding: "0.3rem",
            backgroundColor: "red",
            color: "white",
            marginLeft: "30px",
            marginRight: "30px",
            width: "2rem",
          }}
        >
          {product.price}
        </span>
      </div>
    );
  });
}

export default Home;
