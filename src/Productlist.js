import React from 'react';
import Productitem from './Productitem'
import Row from 'react-bootstrap/Row';
export default function Productlist({dishes}) {
    console.log(dishes)
  return (
    <div>
      <Row>
      {
        dishes.map(
            (dishes,index) => (
                <Productitem key= {dishes.id} name={dishes.name} price={dishes.price} description={dishes.description} image={dishes.image}/>
            )
        )
       
        }
        </Row>
        </div>
  )
}