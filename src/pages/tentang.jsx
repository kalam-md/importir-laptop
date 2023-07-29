import Teknisi1 from "../assets/img/teknisi1.png"
import Teknisi2 from "../assets/img/teknisi2.png"
import Teknisi3 from "../assets/img/teknisi3.png"
import Teknisi4 from "../assets/img/teknisi4.png"
import Teknisi5 from "../assets/img/teknisi5.png"
import Teknisi6 from "../assets/img/teknisi6.png"
import Kontak from "../assets/img/kontak.png"

export default function Tentang() {
  const teknisi = [
    { id: 1, img: Teknisi1},
    { id: 2, img: Teknisi2},
    { id: 3, img: Teknisi3},
    { id: 4, img: Teknisi4},
    { id: 5, img: Teknisi5},
    { id: 6, img: Teknisi6},
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center mx-auto px-5 md:px-[5rem] py-[5rem] gap-4 max-w-7xl">
        <div className="font-bold text-center">
          <img src={Kontak} alt="kontak" className="w-[2000px]"/>
        </div>
        <div className="">
          <h1 className="font-bold text-[32px] text-center md:text-start">PROFIL TOKO</h1>
          <p className="mt-4 md:pr-[4rem] text-[20px] text-justify md:text-start">Importir Laptop didirikan oleh Bayu Aji Satriadi bersama beberapa orang rekannya pada tahun 2020, meskipun baru didirikan sekitar 3 tahun Importir Laptop sudah memiliki 2 cabang yang pertama di Yogyakarta dan yang kedua ada di Bandung. Importir Laptop berfokus pada jasa penjualan laptopbekas pakai (second), laptop ini dicek dan diperbaiki lalu dijual kembali pada konsumen</p>
        </div>  
      </div>

      <div className="flex justify-center items-center md:h-screen py-[5rem] md:py-0 -mt-[8rem] bg-gray-200 md:px-[5rem] px-5">
        <p className="max-w-5xl">
          <div className="font-bold text-center">
            <span className="text-[30px] md:text-[32px] border-b-4 border-yellow px-4">Teknisi</span>
          </div>
          <div className="grid md:grid-cols-6 grid-cols-2 mt-10 gap-4">
            {teknisi.map((data) => (
              <img src={data.img} key={data.id} className="h-full"/>
            ))}
          </div>
        </p>
      </div>
    </>
  )
}