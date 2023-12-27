import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <CartProvider>
            <div className="max-w-[1440px] mx-auto">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/pages" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product-detail/:productId" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
            </div>
        </CartProvider>
    );
}

export default App;
