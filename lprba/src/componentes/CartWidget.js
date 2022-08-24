import CartIcon from "../img/carrito.png";

const CartWidget = () => {
	return (
		<div className="ShoppingCart">
			<img src={CartIcon} alt="CartIcon" className="CartIcon" />
			<h4>4</h4>
		</div>
	);
};

export default CartWidget;