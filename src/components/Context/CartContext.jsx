import {   createContext, useState} from "react";
import PropTypes from "prop-types";
export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState(0);
  CartProvider.propTypes = {
    children: PropTypes.node,
  };  
  return (
    <CartContext.Provider value={{ cart, setCart }}>
        {props.children}
    </CartContext.Provider>
  );
 
    
}