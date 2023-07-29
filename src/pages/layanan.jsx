import HeaderImg from "../assets/img/layanan-header.png"
import Produk1 from "../assets/img/produk1.png"
import Produk2 from "../assets/img/produk2.png"
import Produk3 from "../assets/img/produk3.png"
import Produk4 from "../assets/img/produk4.png"
import Produk5 from "../assets/img/produk5.png"
import Produk6 from "../assets/img/produk6.png"
import Produk7 from "../assets/img/produk7.png"
import Produk8 from "../assets/img/produk8.png"
import { NavLink } from "react-router-dom";

export default function Layanan() {
  const produk = [
    { id: 1, img: Produk1},
    { id: 2, img: Produk2},
    { id: 3, img: Produk3},
    { id: 4, img: Produk4},
    { id: 5, img: Produk5},
    { id: 6, img: Produk6},
    { id: 7, img: Produk7},
    { id: 8, img: Produk8},
  ];

  return (
    <>
      <div className="md:h-screen h-[80vh] bg-cover md:bg-center flex md:justify-end items-center" style={{backgroundImage: `url(${HeaderImg})`}}>
        <div className="md:w-[700px] px-5 md:px-0 text-white md:pl-[10rem]">
          <span className="md:text-[45px] text-[30px] font-bold leading-tight">Apa Yang <br />Kamu <br />Butuhkan?</span>
          <div className="md:text-[16px] flex gap-4 mt-5">
            <div className="bg-primary px-5 py-2 rounded-md cursor-pointer hover:opacity-50">
              <NavLink to="/layanan/reparasi">Reparasi</NavLink>
            </div>
            <div className="bg-primary px-5 py-2 rounded-md cursor-pointer hover:opacity-50">
              <NavLink to="/layanan/penjualan">Beli Second</NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center md:h-screen py-[5rem] md:py-0 bg-gray-200 md:px-[5rem] px-5">
        <p className="max-w-5xl">
          <h1 className="text-[24px] md:text-[30px] font-bold border-l-4 border-yellow pl-4">Mau Beli Second?</h1>
          <div className="grid md:grid-cols-4 grid-cols-1 mt-5 gap-4">
            {produk.map((data) => (
              <img src={data.img} key={data.id} className="h-full"/>
            ))}
          </div>
        </p>
      </div>
    </>
  )
}