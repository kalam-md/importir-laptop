import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/img/logo.png"
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const classNameFunc = ({ isActive }) => (isActive ? "text-yellow" : "hover:text-yellow");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false); // Close mobile menu when NavLink is clicked
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center gap-[4.5rem] md:h-[85px] h-[65px] bg-cover bg-center mx-auto md:px-[5rem] bg-primary">
      <div className="hidden md:flex md:items-center">
        <img src={Logo} alt="Logo" className="w-[50px]"/>
        <h1 className="uppercase ml-3 text-[16px] font-bold text-white">Importir Laptop</h1>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-between items-center mx-auto w-full">
        <button
          onClick={toggleMobileMenu}
          className="text-white text-[28px] focus:outline-none"
        >
          <AiOutlineMenu className="ml-3" size="2rem"/>
        </button>
        <img src={Logo} alt="Logo" className="w-[38px] mr-3"/>
      </div>

      <div className="hidden md:flex md:gap-[4.5rem] text-white text-[16px] font-bold">
          <NavLink to="/" className={classNameFunc} onClick={handleNavLinkClick}>Home</NavLink>
          <NavLink to="/layanan" className={classNameFunc} onClick={handleNavLinkClick}>Layanan</NavLink>
          <NavLink to="/tentang" className={classNameFunc} onClick={handleNavLinkClick}>Tentang</NavLink>
          <NavLink to="/kontak" className={classNameFunc} onClick={handleNavLinkClick}>Kontak</NavLink>
      </div>

      {/* Mobile Menu Links */}
      {mobileMenuOpen && (
        <div className="absolute rounded-md md:hidden flex flex-col gap-[1.5rem] text-white font-bold text-[16px] py-5 pl-5 pr-10 mt-[17.5rem] ml-3 bg-cover bg-center shadow-lg bg-primary">
          <NavLink to="/" className={classNameFunc} onClick={handleNavLinkClick}>
            Home
          </NavLink>
          <NavLink to="/layanan" className={classNameFunc} onClick={handleNavLinkClick}>
            Layanan
          </NavLink>
          <NavLink to="/tentang" className={classNameFunc} onClick={handleNavLinkClick}>
            Tentang
          </NavLink>
          <NavLink to="/kontak" className={classNameFunc} onClick={handleNavLinkClick}>
            Kontak
          </NavLink>
        </div>
      )}
    </nav>
  )
}