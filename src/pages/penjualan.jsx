import Penjualan1 from "../assets/img/penjualan1.png"
import Penjualan2 from "../assets/img/penjualan2.png"
import Penjualan3 from "../assets/img/penjualan3.png"
import Penjualan4 from "../assets/img/penjualan4.png"
import Penjualan5 from "../assets/img/penjualan5.png"
import Penjualan6 from "../assets/img/penjualan6.png"
import Penjualan7 from "../assets/img/penjualan7.png"
import Penjualan8 from "../assets/img/penjualan8.png"

export default function Penjualan() {
  const penjualan = [
    { id: 1, img: Penjualan1},
    { id: 2, img: Penjualan2},
    { id: 3, img: Penjualan3},
    { id: 4, img: Penjualan4},
    { id: 5, img: Penjualan5},
    { id: 6, img: Penjualan6},
    { id: 7, img: Penjualan7},
    { id: 8, img: Penjualan8},
  ];

  return (
    <>
      <div className="flex justify-center items-center md:h-screen pb-10 md:pb-0 bg-gray-200 md:px-[5rem] px-5">
        <p className="max-w-5xl mt-5 md:mt-0">
          <div className="font-bold text-center">
            <span className="text-[30px] md:text-[32px] border-b-4 border-yellow md:px-[18rem] px-[2rem]">Etalase Toko</span>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-1 place-items-center mt-10 gap-[3rem]">
            {penjualan.map((data) => (
              <img src={data.img} key={data.id} className="h-full"/>
            ))}
          </div>
        </p>
      </div>
    </>
  )
}