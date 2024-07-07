import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Webimg from "./components/Webimg";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import VoiceRecorder from "./components/VoiceRecorder";

import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Webimg />} />
        <Route path="/About" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/VoiceRecorder" element={<VoiceRecorder />} />
      </Routes>
      <Footer className="mt-5" />
    </Router>
  );
}

export default App;
