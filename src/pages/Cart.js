import { useParams } from "react-router";
import CartProducts from "../components/CartProducts";
import Payment from "../components/Payment";
import Product from "../components/Product";
import useShop from "../ShopContext";
import NotFound from "./404";



const Cart = ({ cart }) => {


    const { addToCart, removeFromCart, products, total } = useShop();


    if (products.length == 0) return <h1>Cart Is Empty</h1>;

    return (

        <div className="cart-container">
            <CartProducts products={products} />
            <Payment />
        </div>
    );

};

export default Cart;