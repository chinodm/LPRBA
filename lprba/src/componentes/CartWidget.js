import React from "react";
import Carrito from "../img/carrito.png";

const CartWidget = () => {
	return (
		<div className="ShoppingCart">
			<img src={Carrito} alt="Carrito" className="Carrito" />
			<h4>4</h4>
		</div>
	);
};

export default CartWidget;