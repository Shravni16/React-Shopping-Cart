
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {add, remove } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";


const CartItem = (props) => {
  const dispatch=useDispatch();

  const item=props.item;
  function clickHander(){
    dispatch(remove(item.id));
    toast.error("Item Removed")
  }
  return (<div className="cart-item-wrap">
    <div className="cart-item-part-1"><img className="cart-item-img"src={item.image}></img></div>
    <div className="cart-item-part-2">
      <h1 className="cart-item-title">{item.title}</h1>
      <p className="cart-item-desc">{item.description}</p>
      <div className="cart-item-prc-del">
        <div className="cart-item-prc">
        {item.price}</div>
        <div className="cart-item-del" onClick={clickHander}>
        <MdDelete className="del" />
        </div>
      </div>
    </div>
    
  </div>);
};

export default CartItem;
