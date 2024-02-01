import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./component.css";
import {add, remove } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";

const Product = (props) => {
  const post = props.post;
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  function addHandler() {
    dispatch(add(post));
    toast.success("Item Added");
  }

  function removeHandler() {
    dispatch(remove(post.id));
    toast.error("Item Removed")
  }



  return (
    <div className="product" >
      <p className="product-title">{post.title}</p>
      <p className="product-desc">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
     <div className="product-div-img">
      <img className="product-img"  src={post.image} /></div>
      
      <div className="product-prc-btn"> 
      <p className="product-prc">${post.price}</p>

      {cart.some((item) => item.id == post.id) ? (
        <button className="product-btn" onClick={removeHandler}>REMOVE ITEM</button>
      ) : (
        <button className="product-btn" onClick={addHandler}>ADD TO CART</button>
      )}</div>
    </div>
  );
};

export default Product;
