import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = ({produc}) => {

  const  {cartcount,setCartcount} = useContext(CartContext);

  const [morebtn,setMorebtn] = useState(false);
  const [counting,setCounting] = useState(1);
  // Note: this id should come from api
  const handleclick = (x)=>{
    if(x>0){
      setCartcount(cartcount+1);
    }
    else{
      setCartcount(cartcount-1);
    }
    setMorebtn(!morebtn);
  }

  const handlecart = (num)=>{
    if(counting==0){
      setMorebtn(!morebtn);
      setCartcount(cartcount-1);
    }
    if(counting>0){
      setCounting(counting+num);
    }
    if(counting===0 && num==1){
      setCounting(counting+num);
    }
    
  }

  const product = { id: produc.id };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{produc.name}</h3>
      <h6 data-cy="product-description">{produc.description}</h6>
      {
        morebtn ? 
        <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=> handlecart(1)}>+</button>
        <span data-cy="product-count">
          {counting
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=> handlecart(-1)}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={()=> handleclick(-1)}>Remover from Cart</button>
      </div>  
      : <button data-cy="product-add-item-to-cart-button" onClick={()=> handleclick(1)}>Add To Cart</button>
      }
    </div>
  );
};

export default Product;
