import React from "react"
import {data} from "./data"
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';

export function ProductComponent (){

    const [card, setCard] = useState(data);
    const [item, setItems] = useState(0);
return(

    <div className='row'>
         <div className='nav-div'>
          <ul className='list'>
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
          <ul className='cart'>
            <li><i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart {item}</li>
          </ul>
        </div>
        <div className='crossBar'>
        <h1 className='head'>Shop in Style</h1>
        <p className='slogan'>Champions keep playing until they get it right.</p>
        </div>

       {data.map((ele,index)=>(
          <SampleCard
          key={index}
          index={index}
          product={ele.name}
          price={ele.price}
          image={ele.image}
          id={ele.id}
          item={item}
          card={card}
          setItems={setItems}
          />
        ))}
      
       </div>

)
}


function SampleCard(props){

  
    const[cartShow,CartChange]=useState(true);
    
    const showCart=()=>{CartChange(!cartShow)}
    
    
   
    
    
      function handleAdd(idx){
        showCart()

props.setItems(props.item+1)


     
    
    
      }
    
      function handleRemove(id){
        showCart()
        props.setItems(props.item-1)
        
        
      }
    
      return (
       
          
       
    
    
        <div className='col col-md-4 col-lg-3'>
        <div className='card card1'>
         <img src={`${props.image}`} alt="React Image" /> 
    
          <div className='card-content'>
          <h4 className={`product${props.index} product`}>{props.product}</h4>
          <h6 className={`price${props.index} price`}>{props.price}</h6>
          <Button className="btn" variant={cartShow?"outline-success":"outline-danger"} onClick={()=>cartShow?handleAdd(props.index):handleRemove(props.id)}  type="">{cartShow?"Add to Cart":"Remove from Cart"}</Button>
        </div>
        </div>
        </div>
    )
    
    }
    
 
    
    