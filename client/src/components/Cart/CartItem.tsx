import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import { Divider } from "@mui/material";

import React from "react";

type Props = {
  item: any;
  quantity: number;
  addToCart: (item: any) => void;
  removeFromCart: (id: string) => void;
};

const CartItem = (props: Props) => {
  return (
    <>
      <Box sx={{ minWidth: 400, marginTop: 4 }}>
        <Box component="h3">{props.item.name}</Box>
        <Box className="information">
          <Box component="p">Price: ${props.item.price}</Box>
        </Box>
        <Box
          sx={{ display: "flex", justifyItems: "center", alignItems: "center" }}
        >
          <IconButton onClick={() => props.removeFromCart(props.item.id)}>
            <RemoveIcon />
          </IconButton>
          <Box component="h3">{props.quantity}</Box>
          <IconButton onClick={() => props.addToCart(props.item)}>
            <AddIcon />
          </IconButton>
        </Box>
        <Divider />
      </Box>
    </>
  );
};

export default CartItem;
