import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<BookingForm />} />
        {/* Add more routes if needed */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
