import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Webimg from "./components/Webimg";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Blog from "./components/Blog";
import Cart from "./components/Cart";
import Navbar from "./components/navbar";
import StoreProvider from "./Context and Reduce/StoreContext";
import LoginPage from "./components/Login";
import SignUpPage from "./components/Signup";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Webimg />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer className="mt-5" />
      </Router>
    </StoreProvider>
  );
}

export default App;
