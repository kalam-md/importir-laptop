import Reparasi1 from "../assets/img/reparasi1.png"
import Reparasi2 from "../assets/img/reparasi2.png"
import Reparasi3 from "../assets/img/reparasi3.png"
import Reparasi4 from "../assets/img/reparasi4.png"
import Reparasi5 from "../assets/img/reparasi5.png"
import Reparasi6 from "../assets/img/reparasi6.png"
import { Link } from "react-router-dom";

export default function Tentang() {
  const reparasi = [
    { id: 3, img: Reparasi3},
    { id: 4, img: Reparasi4},
    { id: 5, img: Reparasi5},
    { id: 6, img: Reparasi6},
  ];

  return (
    <>
      <div className="flex flex-col justify-center mx-auto px-5 md:px-[5rem] md:py-[5rem] mt-5 md:mt-0 md:mb-0 mb-[5rem] gap-4 max-w-7xl">
        <div className="">
          <h1 className="font-bold text-[32px] text-center">REPARASI</h1>
          <p className="md:mt-4 text-[20px] text-center">Percaya, Didie mah ahlina</p>
        </div>  
        <div className="font-bold flex md:flex-row flex-col justify-center gap-8">
          <Link to="/kontak">
          <img src={Reparasi1} alt="kontak" className="w-[400px]"/>
          </Link>
          <Link to="/kontak">
          <img src={Reparasi2} alt="kontak" className="w-[400px]"/>
          </Link>
        </div>
        <div className="flex justify-center mx-auto mt-3 text-center max-w-xl">
          <p>Tingkatkan performa laptop Anda dengan mengupgrade komponen yang sudah usang, di sini kami menyediakan spare part terbaik.</p>
        </div>
      </div>

      <div className="flex justify-center items-center md:h-screen pb-10 md:pb-0 md:-mt-[12rem] -mt-[3rem] md:px-[5rem] px-5">
        <div className="max-w-5xl">
          <div className="font-bold text-center">
            <span className="text-[30px] md:text-[32px] border-b-4 border-yellow md:px-[18rem] px-[2rem]">Testimoni</span>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 place-items-center mt-10 gap-[3rem]">
            {reparasi.map((data) => (
              <img src={data.img} key={data.id} className="h-full"/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}