import Image from "next/image";
import HeroBanner from "@/public/Group224.svg";
import Link from 'next/link';

function HeroHeader() {
  return (
    <div className='h-[752px] bg-black w-full relative mb-[250px]'>
            <div className="z-10 absolute top-[90%] right-[70px] p-[4px] bg-[#FF8A2A] w-[310px] h-[85px] rounded-full flex justify-center items-center hover:bg-orange-300">
                <Link className="font-bold text-3xl text-white" href='/create'>Un truc à troc ?</Link>
            </div>
                <Image className="relative z-0" src={HeroBanner} alt='herobanner' />
    </div>
    
  )
}

export default HeroHeader;