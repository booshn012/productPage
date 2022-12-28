import React from "react";
import Slider from "react-slick";
import {Nav,Card} from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating'
import { useState } from 'react';
import { products } from "../utils/products";


function RecentlyViewed(){
    const [rating,setRating] =useState(3);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };

    return(
        <>
         <h2>Recently Viewed</h2>
          {products.map((ele,index)=>{
            return(
                <div key={index}>
                <Slider {...settings}>
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
                                <Rating  initialValue={rating} />
                            </Card.Body>
                            </Card>
                          
                </Slider> 
                
                </div>
            )
          })}
        </>
    )
}

export default RecentlyViewed;