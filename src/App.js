import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./pages/Shop";
import LoginSignUp from "./pages/LoginSignUp";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import ShopCategory from "./pages/ShopCategory";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Shop />} />
                    <Route
                        path="/men"
                        element={<ShopCategory category="men" />}
                    />
                    <Route
                        path="/women"
                        element={<ShopCategory category="women" />}
                    />
                    <Route
                        path="/kids"
                        element={<ShopCategory category="kids" />}
                    />
                    <Route path="product" element={<Product />}>
                        <Route path=":productId" element={<Product />} />
                    </Route>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<LoginSignUp />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
