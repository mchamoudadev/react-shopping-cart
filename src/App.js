import './Style.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Header from './components/Header';
import NotFound from './pages/404';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />}>
                    Home
                </Route>
                <Route path="/about" element={<About />}>
                    About
                </Route>
                <Route path="/contact" element={<Contact />}>
                    About
                </Route>
                <Route path="/cart" element={<Cart />}>
                    Cart
                </Route>
                <Route path=":productId" element={<Cart />}>
                    Cart
                </Route>
                <Route path="/*" element={<NotFound />}>
                    Not Found
                </Route>
            </Routes>

            <Footer />
        </div >
    );
}

export default App;
