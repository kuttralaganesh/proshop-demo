import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../products";
import {Row,Col, Image,ListGroup,Card,Button, ListGroupItem} from "react-bootstrap"
import Rating from "./Rating";

const ViewProduct = () => {
  const { id } = useParams();
  const product = products.find((productId) => productId._id === id);

  console.log(product);

  return ( 
    <>
      <Link className="btn btn-light my-3" to="/">Go Back</Link>
      <Row>
        <Col md={5}>
            <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>{product.name}</ListGroup.Item>
            <ListGroup.Item>
                <Rating value={product.rating} text={` ${product.numReviews} Reviews`}></Rating>
            </ListGroup.Item>
            <ListGroup.Item>
                Price: ${product.price}
            </ListGroup.Item>
            <ListGroupItem>
                Description:${product.description}
            </ListGroupItem>
          </ListGroup>  
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                </Row>
                </ListGroup.Item>  
                <ListGroup.Item>
                    <Row>
                        <Col>Status:</Col>
                        <Col>
                         <strong>{product.countInStock>0?'In Stock':'Out of Stock'}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroupItem>
                    <Button 
                    className="btn btn-block"
                    type="button"
                    disabled={product.countInStock===0}
                    >
                    Add To Card 
                    </Button>
                </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ViewProduct;
