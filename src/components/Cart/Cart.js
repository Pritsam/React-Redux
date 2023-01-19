import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useReducer } from "react-redux";
import React from "react";

const Cart = (props) => {
  
  const items = useSelector((state) => state.cart.items);

  // const loadedItems = [];

  // for (const key in items) {
  //   loadedItems.push({
  //     id: items.id,
  //     title: items[key].title,
  //     quantity: 3,
  //     total: 18,
  //     price: items[key].price,
  //   });
  // }

  const cartList = (
    <ul>
      {items.map((data) => (
        <CartItem
          item={{
            id:data.id,
            title: data.title,
            quantity: data.quantity,
            total: data.total,
            price: data.price,
          }}
        />
      ))}
    </ul>
  );

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartList}
    </Card>
  );
};

export default Cart;
