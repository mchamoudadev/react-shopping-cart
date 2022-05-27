import CartProducts from "../components/CartProducts";
import Payment from "../components/Payment";
import useShop from "../ShopContext";

const Cart = () => {
    const { products } = useShop();

    if (products.length == 0) return <h1>Cart Is Empty</h1>;

    return (
        <div className="cart-container">
            <CartProducts products={products} />
            <Payment />
        </div>
    );

};

export default Cart;