import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useShop from "../ShopContext";

const Product = ({ product, cart }) => {
	const { addToCart, removeFromCart, products } = useShop();
	const [isInCart, setIsInCart] = useState(true);
	// console.log(products);

	useEffect(() => {
		const isCart = products.filter((pro) => pro.id == product.id);
		// console.log("isCart", isCart.length);
		if (isCart.length > 0) {
			setIsInCart(true);
		} else {
			setIsInCart(false);
		}
	}, [products]);

	const handleClick = () => {
		if (isInCart) {
			removeFromCart(product);
		} else {
			addToCart(product);
		}
	};

	const style = {
		minHeight: "100%",
		background:
			"linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)), url(https://images.unsplash.com/photo-1473093226795-af9932fe5856?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588)",
		backgroundSize: "cover",
	};
	return (
		<div
			className={`${cart ? "cart-card" : "card"}`}
			style={{
				minHeight: "100%",
				background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${product.urlImage})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}>
			<div className="info">
				<span>{product.name}</span>
				<span className="price">${product.price}</span>
			</div>

			<button
				className={`btn ${isInCart ? "btn-secondary" : "btn-primary"}`}
				onClick={handleClick}>
				{isInCart ? "-" : "+"}
			</button>
		</div>
	);
};

export default Product;
