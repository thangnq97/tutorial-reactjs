import { useState, createContext } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
