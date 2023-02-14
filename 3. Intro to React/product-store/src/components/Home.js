import ThemeContext from "../state/Themecontext";
import ProductContext from "../state/Productcontext";
import { React, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Home({
  inputName,
  setInputName,
  inputPrice,
  setInputPrice,
  inputDescription,
  setInputDescription,
}) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { allProducts, addProduct, updateProduct, deleteProduct } =
    useContext(ProductContext);

  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundColor: theme.background,
        }}
      >
        <div>
          <input
            onChange={(e) => setInputName(e.target.value)}
            value={inputName}
            placeholder="product name"
          ></input>
          <input
            onChange={(e) => setInputPrice(e.target.value)}
            value={inputPrice}
            placeholder="price"
          ></input>
          <input
            onChange={(e) => setInputDescription(e.target.value)}
            value={inputDescription}
            placeholder="description"
          ></input>
          <button onClick={addProduct}>Add Product</button>
          <div>
            {allProducts.map((product) => {
              return (
                <Card
                  key={product.id}
                  style={{
                    width: "15rem",
                    height: "15m",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      <Card.Img variant="top" src={product.img} />
                      <Link
                        to={`Details/${product.id}`}
                        style={{
                          color: "black",
                          textDecoration: "none",
                        }}
                      >
                        {product.name}
                      </Link>
                    </Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Card.Text style={{ fontSize: "1rem" }}>
                      {product.description}
                    </Card.Text>
                    <Button
                      onClick={() => updateProduct(product.id)}
                      style={{ marginRight: "1rem" }}
                    >
                      Update
                    </Button>
                    <Button onClick={() => deleteProduct(product.id)}>
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
