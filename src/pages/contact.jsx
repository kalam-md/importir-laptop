import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";
import Galeri1 from "../assets/img/galeri1.png"
import Galeri2 from "../assets/img/galeri2.png"
import Galeri3 from "../assets/img/galeri3.png"
import Galeri4 from "../assets/img/galeri4.png"
import Galeri5 from "../assets/img/galeri5.png"
import Galeri6 from "../assets/img/galeri6.png"
import Galeri7 from "../assets/img/galeri7.png"
import Galeri8 from "../assets/img/galeri8.png"

export default function Contact() {
  const galeri = [
    { id: 1, img: Galeri1},
    { id: 2, img: Galeri2},
    { id: 3, img: Galeri3},
    { id: 4, img: Galeri4},
    { id: 5, img: Galeri5},
    { id: 6, img: Galeri6},
    { id: 7, img: Galeri7},
    { id: 8, img: Galeri8},
  ];

  return (
    <>
      <div className="flex-col justify-center items-center pt-5 md:pt-10 pb-8 md:pb-16 px-5 md:px-[14rem] bg-gray-200">
        <div className="font-bold text-center">
          <span className="text-[30px] md:text-[32px] border-b-4 border-yellow px-4">Kontak</span>
        </div>
        <div className="md:flex md:justify-center mt-10 grid md:grid-cols-3 md:gap-[5rem] gap-[2rem]">
          <a href="https://api.whatsapp.com/send/?phone=6287825566665&text&type=phone_number&app_absent=0" target="blank" className="grid justify-items-center text-primary">
            <AiOutlineWhatsApp size="4.5rem"/>
            <h2 className="mt-2">Whatsapp</h2>
            <span className="text-[12px]">(Everyday)</span>
            <span className="text-[12px]">Pukul 10.00 - 21.00 WIB</span>
            <span className="text-[12px]">0878-2556-6665</span>
          </a>
          <a href="https://www.tiktok.com/@importir.laptop" target="blank" className="grid justify-items-center text-primary">
            <BsTiktok size="4.5rem"/>
            <h2 className="mt-2">Tiktok</h2>
            <span className="text-[12px]">(Everyday)</span>
            <span className="text-[12px]">importir.laptop</span>
          </a>
          <a href="https://www.instagram.com/importirlaptop.id/?hl=id" target="blank" className="grid justify-items-center text-primary">
            <AiOutlineInstagram size="4.5rem"/>
            <h2 className="mt-2">Instagram</h2>
            <span className="text-[12px]">Visit and Follow</span>
            <span className="text-[12px]">@importirlaptop.id</span>
          </a>
        </div>
        <div className="flex justify-center mt-[3rem]">
          <a href="https://maps.app.goo.gl/9CjRA2YZ22wcU3Yo6" target="blank" className="px-8 py-1 bg-primary cursor-pointer rounded-lg text-white">Datang Ke Toko</a>
        </div>
      </div>

      <div className="flex justify-center items-center md:h-screen py-[5rem] md:py-0 -mt-16 bg-gray-200 md:px-[5rem] px-5">
        <p className="max-w-5xl">
          <div className="font-bold text-center">
            <span className="text-[30px] md:text-[32px] border-b-4 border-yellow px-4">Galeri</span>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-1 mt-5 gap-4">
            {galeri.map((data) => (
              <img src={data.img} key={data.id} className="h-full"/>
            ))}
          </div>
        </p>
      </div>
    </>
  )
}