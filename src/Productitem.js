import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
export default function Productitem({id,name,description,price,image}) {
  return (
    <Col className='cardcol'>
        <Card style={{ minWidth: '20rem',maxWidth:'40rem' , minHeight:'25rem' }}>
      <Card.Img height='200px'variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button style={{position:'absolute' ,top:"85%", width:'85%'}} variant="primary"><span>&#x20B9;
          </span>{price} <span>&nbsp;</span> Buy Now</Button>
      </Card.Body>
    </Card>
    </Col>
  )
}
