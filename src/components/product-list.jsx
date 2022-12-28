import {Nav,Card} from 'react-bootstrap';
import { products } from '../utils/products';
import { Rating } from 'react-simple-star-rating'
import { useState } from 'react';



function ProductList(){

     const [rating,setRating] =useState(3);
    return(
        <>

         <div >
               Home / Shop / Syringes & Needles
               <h3>Our Featured Products</h3>
                
               {products.map((ele,index)=>{
                        return(
                            <div key={index}>
                            <Card style={{ width: '12rem' }}>
                            <Card.Body>
                                <Card.Title>
                                    <img src={ele.img} alt="products" />
                                </Card.Title>
                                <Card.Text>
                                  {ele.title}
                                  <span style={{textDecoration:"line-through"}}> €{ele.price}</span>
                                  €{ele.discountPrice}
                                </Card.Text>
                                <div> <Rating  initialValue={rating} /></div>
                                
                            </Card.Body>
                            </Card>
                            </div>
                        )
                     })
                     }
               
         </div>
        </>
    )
}


export default ProductList;