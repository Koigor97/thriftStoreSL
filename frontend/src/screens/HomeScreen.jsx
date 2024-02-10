import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    const fetchProducts = async function () {
      const { data } = await axios.get("http://localhost:4000/api/products");
      // console.log(data.data);
      setProducts(data.data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Recent products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} key={product._id} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
