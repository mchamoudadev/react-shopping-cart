import { Link } from "react-router-dom";
import useShop from "../ShopContext";

const Header = () => {
	return (
		<div className="menu">
			<Link to={"/"} className="logo">
				REDUXIFY
			</Link>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/cart">Cart</Link>
			</div>
			<Link to="/cart">
				<span className="cart">{0}</span>
			</Link>
		</div>
	);
};

export default Header;
