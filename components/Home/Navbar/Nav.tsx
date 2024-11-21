 "use client" ;
  
import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

//define pros type 

type pros ={
  openNav: () => void;
};
  const Nav = ({ openNav }: pros ) => {

    const [navBg,setNavBg] = useState(false)
    useEffect(() => {
      const handler = () => {
        if(window.llY >=90){
          setNavBg(true)
        } if(window.llY < 90)  {
          setNavBg(false);
        };
      };
      window.addEventListener("scroll",handler)

      return () => {
        window.removeEventListener("scroll",handler);
      };
    }, []);

  return (
    <div className={`fixed ${navBg ?  "bg-[#2d1541]" : "fixed" } h-[12vh] z-[10] bg-[#200c30] w-full transition-all duration-200`}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Image
          src="/images/logoo.png"
          alt="LOGO"
          width={170}
          height={170}
          className="ml-[-1.5rem] sm:ml-0 rounded-lg"
        />
        {/* Nav Links */}
        <div className="flex items-center space-x-10">
          <div  className="hidden lg:flex items-center space-x-8">
           
          {navLinks.map((navlink) => {
            return (
              <Link key={navlink.id} href={navlink.url}>
                <p className="nav__link">{navlink.label}</p>
              </Link>
            );
          })}
          </div>
          {/* button */}
          <div className="flex items-center space-x-4">
          <Link href={"https://wa.me/+2349028823818"}>
            <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-300 transition-all duration-300 rounded-lg 
            ">
              Hire me 
            </button>
            </Link>
            {/* burger */}
            <HiBars3BottomRight onClick={openNav}
             className="w-8 h-8 cursor-pointer text-white lg:hidden" />

          </div>
          </div>
          </div>
        </div>
      
  );
};

export default Nav;
