import { Box, Button, Divider } from "@mui/material";
import React from "react";
import CartItem from "./CartItem";

const cartItems = [
  {
    id: "1",
    name: "Pizza Capricioasa",
    description: "ham, dough, tomato sauce, mushrooms, corn",
    category: "Pizza",
    price: "24.99",
  },
  {
    id: "2",
    name: "Pizza Carbonara",
    description: "ham, dough, tomato sauce, mushrooms, corn",
    category: "Pizza",
    price: "14.99",
  },
];

const Cart = () => {
  return (
    <>
      <Box component="h2">Your Cart</Box>
      {cartItems.length === 0 ? (
        <Box component="p">No items in cart.</Box>
      ) : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          quantity={6}
          addToCart={(item) => {}}
          removeFromCart={(id) => {}}
        />
      ))}
      <Box mt={2} component="h3">
        Total 100RON
      </Box>
      <Button
        variant="contained"
        style={{ textTransform: "none" }}
        onClick={() => {
          /*place order action*/
        }}
      >
        Place order
      </Button>
    </>
  );
};

export default Cart;
