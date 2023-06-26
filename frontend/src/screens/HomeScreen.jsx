import React from "react";
import { Row, Col } from "react-bootstrap";
import Listproducts from "../products";
import Product from "../components/Products" 

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {Listproducts.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
