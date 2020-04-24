import React from 'react'
import { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Card, Button, Container, Row, Col, Form, ListGroupItem, ListGroup, Figure } from 'react-bootstrap';

const Cart = () => {

    const cart = useStoreState(state => state.products.cart);
    const loading = useStoreState(state => state.products.loading)
    const getCart = useStoreActions(actions => actions.products.getCart);

    const styles = {
        h1: {
        fontSize: '15px',
        color: 'black'
        },
        img:{
            height: '150px',
            width: '150px',
            objectFit: 'cover'
        }
    };

    useEffect(() => {
        getCart()
    }, [])

    return (
        <div>
            {loading ? <h1>Loading... </h1>:
        <Container>
            <h1>Shopping Cart</h1><br></br>
            <h1>{cart.length} items:</h1>
            <Row>
                <Col md='8'>
                {cart.map((product, index)=> (
                    <ListGroup>  
                        <Figure>
                            <ListGroupItem>
                                <Row>
                                    <Col xs='4'>
                                        <img src={product.image} style = {styles.img}/>
                                    </Col>
                                    <Col xs='8'>
                                        <Figure.Caption float = 'right'>
                                        {product.name}<br></br><br></br>
                                        {product.description}<br></br><br></br>
                                        <b>Price: ${product.price}</b><br></br>
                                        <b>Quantity: 1</b>
                                        </Figure.Caption>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        </Figure>
                     </ListGroup>
                    ))}
                    </Col>
            <Col md='4'>
            <ListGroup>
                    <ListGroupItem><h1 style={styles.h2}>Order Summary</h1></ListGroupItem>
                    <ListGroupItem>
                    {
                        <Row>
                            <Col xs='8'><p>(prod x quantity)</p></Col>
                            <Col xs='4'><p>$</p></Col>
                        </Row>
                    }
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col xs='8'><p>Subtotal</p></Col>
                            <Col xs='4'><p>$</p></Col>
                        </Row>
                        <Row>
                            <Col xs='8'><p>Shipping</p></Col>
                            <Col xs='4'><p>$</p></Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col xs='8'><p>Total</p></Col>
                            <Col xs='4'><b style={{fontSize: '25px'}}>$</b></Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <center>
                        <a href='/checkout'><Button variant="primary" type="submit">
                            Checkout
                        </Button>
                        </a>
                        </center>
                    </ListGroupItem>
                 </ListGroup>S
            </Col>
            </Row>
        </Container> 
        }
        </div>
    )
}

export default Cart
