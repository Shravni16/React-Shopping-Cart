import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Cart = () => {
const cart=useSelector((state)=>state.cart);
const [totalAmount,setTotalAmount]=useState(0);

useEffect(()=>{
  const v=cart.reduce((acc,val) => acc+val.price,0);
  // console.log(v);
  setTotalAmount(v);
 

},[cart]);


  return (<div>
    <div> {
      cart.length==0 ?(<div className="empty-cart"><div className="empty-cart-inside"><h3 className="cart-empty-heading">Your Cart is Empty!</h3><Link to="/"><button className="cart-empty-button">Shop Now</button></Link></div></div>):
      (<div  className="full-cart-wrap">
        <div className="grid-col">
        {
          cart.map((c)=>(<CartItem  key={c.id} item={c}/>))
        } </div>

<div className="cart-side-wrap">
      <div >
      <h3 className="cart-side-head">YOUR CART</h3>
      <h1 className="cart-side-sum">SUMMARY</h1>
      <p className="cart-side-total-item">Total Items: {cart.length}</p></div>
      <div>
        <p className="cart-side-amt">Total Amount: ${totalAmount}</p>
        <button className="cart-side-check-now">Checkout Now</button>
      </div>

    </div>
      </div>)
      }
       </div>
   
   
  </div> );
};

export default Cart;
