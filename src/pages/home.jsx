import HeaderImg from "../assets/img/home-header.png"

export default function Home() {
  return (
    <>
      <div className="h-screen bg-cover md:bg-center flex justify-end items-center" style={{backgroundImage: `url(${HeaderImg})`}}>
        <div className="md:w-[700px] md:mt-[15rem] px-5 md:px-0">
          <span className="md:text-[45px] text-[30px] font-horror leading-normal tracking-tight text-[#A51A1B] md:text-end text-center">MOMEN HORROR SAAT LAPTOP BLUE SCREEN</span>
          <p className="md:text-[30px] text-white md:ml-[14rem] font-bold">IMPORTIR LAPTOP SOLUSINYA</p>
        </div>
      </div>

      <div className="flex justify-center items-center md:h-screen py-[5rem] md:py-0 bg-gray-200 md:px-[5rem] px-5">
        <div className="max-w-[44rem]">
          <h1 className="text-[24px] md:text-[40px] font-bold border-l-4 border-yellow pl-8">BINGUNG KETIKA LAPTOPMU <br className="hidden md:block"/>BERMASALAH?</h1>
          <p className="text-justify mt-7  md:text-[20px]">Siapa sih guys di sini yang gak bingung kalo laptop kesayangan kalian bermasalah ketika digunakan, apalagi kalo kalian lagi ngerjain tugas trus dikejer deadline, huhuhu. Ngeri kan, nah apalagi sampe blue screen makin horror deh. But, sekarang kalian tenang aja, gak usah bingung, konsultasikan masalah kalian pada Importir Laptop. Gak perlu ribet dateng ke toko kalian cukup menghubungi kontak yang tercantum.</p>
        </div>
      </div>
    </>
  )
}