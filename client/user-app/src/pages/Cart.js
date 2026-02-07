import CartCards from "../components/CartCards";
import Footer from "../components/Footer";
import HeaderLogin from "../components/HeaderLogin";

function Cart() {
    return (
        <div className="cart-page">
            <HeaderLogin />
            <CartCards />
            <Footer />
        </div>
    );
}

export default Cart;