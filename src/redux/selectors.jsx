import { createSelector } from "@reduxjs/toolkit";

const cartItemsSelector = (state) => state.cart.cartItems;

//count number of products in cart
export const countItemsCountSelector = createSelector(cartItemsSelector,(cartItems) => 
    cartItems.reduce( (count, item) => count + item.quantity, 0)
);
// Calculate total of cart
export const carttotalSelector = createSelector(cartItemsSelector,(cartItems) =>
    cartItems.reduce((total, item) => total + item.salePrice * item.quantity, 0)
);