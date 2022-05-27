import useShop from "../ShopContext";
import { IoClose } from "react-icons/io5";

const CartProducts = ({ products }) => {
	const { total, removeFromCart } = useShop();

	return (
		<>
			<div className="cart-products">
				<h2>Cart Products</h2>
				{products.map((product) => (
					<div className="cart-product">
						<div className="cart-title-img">
							<img src={product.urlImage} alt="" />
							<span>{product.name}</span>
						</div>

						<h5>${product.price}</h5>
						<span className="delete" onClick={() => removeFromCart(product)}>
							<IoClose />
						</span>
					</div>
				))}
				<div className="total-price">
					{/* <h4>Total Price</h4> */}
					<h2>Total Price : ${total}</h2>
				</div>
			</div>
		</>
	);
};

export default CartProducts;
