import ThemeContext from "../state/Themecontext";
import ProductContext from "../state/Productcontext";
import { React, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Details() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { allProducts, addProduct, deleteProduct } = useContext(ProductContext);
  let { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find((product) => product.id === id);

  return (
    <div>
      <Card>
        <Card.Header>{product.brand}</Card.Header>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Button
            onClick={() => {
              {
                deleteProduct(product.id);
                {
                  navigate("/");
                }
              }
            }}
          >
            Delete this product.
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Details;
