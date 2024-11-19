
import Image from "next/image";
function home() {

  return (
    <div className="font-serif  " >
      <div className=" bg-[#A29875] text-white text-[50px] font-serif "><h3 className="ml-[50px]">MANZZARI</h3></div>
      <div   id="body" className="  flex items-center justify-center">
      <div className="  w-1/2 flex flex-col    items-start " ><h4 className="wightfont-[400] text-[20px]"><b>IMPECCABLE <br />CRAFTSMANSHIP AND <br /> FINESSE</b></h4>
        <p className="text-[#A29875] text-[15px] mt-[18px]" ><b>An example of intricate workmanship and detail, elegant <br />
          necklaces and long and short chains form a part of our <br />
          desirable collection.</b></p>
        <button className="bg-[#A29875] w-[162] h-[32] rounded-md text-cyan-50  mt-[20px]">Explore Now</button>
      </div>
      {<div>
       <Image src={"/hero.png"}
       alt="heroimage"
       className=" mt-[47px]"
       width="270"
       height="44"/>

      </div> }</div>
    </div>
  )
}
export default home;
