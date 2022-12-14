import { useState, createContext, useContext } from "react";

const CartContext = createContext([]);

const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addItem = (item, quantity) => {
		if (isInCart(item.id)) {
			const newCart = cart.map((cartItem) => {
				if (cartItem.item.id === item.id) {
					return { item, quantity: cartItem.quantity + quantity };
				} else {
					return cartItem;
				}
			});
			setCart(newCart);
		} else {
			setCart([...cart, { item, quantity }]);
		}
	};

	const removeItem = (itemId) => {
		setCart(cart.filter((cartItem) => cartItem.item.id !== itemId));
	};

	const clear = () => {
		setCart([]);
	};

	const isInCart = (itemId) => {
		return cart.some((cartItem) => cartItem.item.id === itemId);
	};

	const totalItems = cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

	const totalPrice = cart.reduce((acc, cartItem) => acc + cartItem.item.price * cartItem.quantity, 0);

	return (
		<CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, totalPrice, totalItems }}>
			{children}
		</CartContext.Provider>
	);
}

export { CartProvider, useCartContext };