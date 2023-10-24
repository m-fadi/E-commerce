import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./pages/Shop";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={Shop} />
                    <Route path="/men" element={Men} />
                    <Route path="/women" element={Women} />
                    <Route path="/kids" element={Kids} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
