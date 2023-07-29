import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/home"
import Layanan from "./pages/layanan"
import Contact from "./pages/contact"
import Tentang from "./pages/tentang"
import Reparasi from "./pages/reparasi"
import Penjualan from "./pages/penjualan"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <div className="font-body">

        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/layanan" element={<Layanan />} />
            <Route path="/layanan/reparasi" element={<Reparasi />} />
            <Route path="/layanan/penjualan" element={<Penjualan />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/kontak" element={<Contact />} />
          </Routes>
        </Router>

        <Footer />
      </div>
    </>
  )
}
