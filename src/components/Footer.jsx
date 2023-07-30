import { BsTiktok, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="flex-col md:flex md:flex-row md:justify-between py-10 bg-primary px-5 md:px-[5rem] text-white">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-[6rem] mt-5 md:mt-0 w-full">
          <div className="">
            <p className="text-[13px] font-bold uppercase">Importir Laptop</p>
            <p className="text-[13px] mt-3 w-[280px]">Tempat perbaikan laptop terbaik dan terpercaya yang bisa kalian hubungi di daerah Bandung. Selain jasa perbaikan, menyediakan laptop second yang berkualitas, yang dapat menampung kebutuhan anda.</p>
          </div>
          <div className="mt-5 md:mt-0 flex-col">
            <p className="text-[13px] font-bold uppercase mb-3">Layanan</p>
            <p className="flex flex-col">
              <Link to="/layanan/reparasi" className="text-[13px]">Reparasi</Link>
              <Link to="/layanan/penjualan" className="text-[13px]">Beli Second</Link>
            </p>
          </div>

          <div className="hidden md:block h-[132px] w-[2px] bg-yellow"></div>

          <div className="mt-5 md:mt-0">
            <p className="text-[13px] font-bold uppercase">Lokasi Kami</p>
            <p className="text-[13px] mt-3 w-[240px]">Ruko Hotel Neo, Jl. Dipati Ukur No.72C Lebakgede, Kecamatan Coblong Kota Bandung, Jawa Barat 40132</p>
          </div>
          <div className="mt-5 md:mt-0">
            <p className="text-[13px] font-bold uppercase">Temukan Kami</p>
            <div className="text-[13px] mt-3 flex flex-col">
              <span className="flex items-center gap-1">
                <BsWhatsapp size="1rem"/>0878-2556-6665
              </span>
              <span className="flex items-center gap-1">
                <BsInstagram size="1rem"/>@importirlaptop.id
              </span>
              <span className="flex items-center gap-1">
                <BsTiktok size="1rem"/>importir.laptop
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="flex justify-center items-center bg-cover bg-center bg-[#1E1E1E] h-[55px] md:px-[10rem]">
        <span className="text-white font-normal text-[13px]">&copy;COPYRIGHT 2023 | IMPORTIR LAPTOP.</span>
      </footer>
    </>
  )
}