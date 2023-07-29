import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <div className="flex-col md:flex md:flex-row md:justify-between py-10 bg-primary px-5 md:px-[5rem] text-white">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-[6rem] mt-5 md:mt-0">
          <div className="">
            <p className="text-[16px] font-bold uppercase">Importir Laptop</p>
            <p className="text-[14px] mt-3 w-[300px]">Tempat perbaikan laptop terbaik dan terpercaya yang bisa kalian hubungi di daerah Bandung. Selain jasa perbaikan, menyediakan laptop second yang berkualitas, yang dapat menampung kebutuhan anda.</p>
          </div>
          <div className="mt-5 md:mt-0">
            <p className="text-[16px] font-bold uppercase">Layanan</p>
            <p className="text-[14px] mt-3">Reparasi</p>
            <p className="text-[14px]">Beli Second</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:gap-[6rem] mt-5 md:mt-0">
          <div className="">
            <p className="text-[16px] font-bold uppercase">Lokasi Kami</p>
            <p className="text-[14px] mt-3 w-[300px]">Ruko Hotel Neo, Jl. Dipati Ukur No.72C Lebakgede, Kecamatan Coblong Kota Bandung, Jawa Barat 40132</p>
          </div>
          <div className="mt-5 md:mt-0">
            <p className="text-[16px] font-bold uppercase">Temukan Kami</p>
            <div className="text-[14px] mt-3 flex flex-col">
              <span className="flex items-center gap-1">
                <AiOutlineWhatsApp size="1rem"/>0878-2556-6665
              </span>
              <span className="flex items-center gap-1">
                <AiOutlineInstagram size="1rem"/>@importirlaptop.id
              </span>
              <span className="flex items-center gap-1">
                <BsTiktok size="1rem"/>importir.laptop
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="flex justify-center items-center bg-cover bg-center bg-[#1E1E1E] h-[55px] md:px-[10rem]">
        <span className="text-white font-normal text-[14px]">COPYRIGHT &copy; IMPORTIR LAPTOP.</span>
      </footer>
    </>
  )
}