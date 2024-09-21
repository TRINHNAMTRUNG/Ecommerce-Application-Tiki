// store.js
import { configureStore } from '@reduxjs/toolkit';
import reducer from './cartSlice'; // Đường dẫn chính xác tới file cartSlice

const store = configureStore({
    reducer: {
        cart: reducer,
        // Các reducer khác nếu có
    },
});

export default store;