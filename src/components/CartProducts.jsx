import { IoClose } from "react-icons/io5";

const CartProducts = ({ products }) => {
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
						<span className="delete">
							<IoClose />
						</span>
					</div>
				))}
				<div className="total-price">
					<h2>Total Price : 0</h2>
				</div>
			</div>
		</>
	);
};

export default CartProducts;
