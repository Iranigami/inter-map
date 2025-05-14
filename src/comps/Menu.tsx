import { useState } from "react"
import homeOn from "../assets/icons/homeOn.svg"
import homeOff from "../assets/icons/homeOff.svg"
import cityOn from "../assets/icons/cityOn.svg"
import cityOff from "../assets/icons/cityOff.svg"
import search from "../assets/icons/search.svg"

export default function Menu(){
    const [isHomeActive, setHomeActive] = useState(true);
    const [isCityActive, setCityActive] = useState(false);
    return(
        <div className="flex w-[898px] h-[160px] rounded-[80px] p-[16px] bg-[#0000004D] backdrop-blur-[50px] fixed left-0 right-0 mx-auto bottom-[200px]">
            <button 
                onClick={()=>{setHomeActive(true); setCityActive(false);}}
                className={`w-[192px] h-[128px] rounded-[64px] ${isHomeActive && "bg-[#EE8545]"} flex justify-center items-center`}>
                <img hidden={isHomeActive} src={homeOff} alt="home"/>
                <img hidden={!isHomeActive} src={homeOn} alt="home"/>
            </button>
            <button 
                onClick={()=>{setCityActive(true); setHomeActive(false);}}
                className={`w-[192px] h-[128px] rounded-[64px] ${isCityActive && "bg-[#EE8545]"} flex justify-center items-center`}>
                <img hidden={isCityActive} src={cityOff} alt="city"/>
                <img hidden={!isCityActive} src={cityOn} alt="city"/>
            </button>
            <button 
                onClick={()=>{}}
                className={`w-[482px] h-[128px] rounded-[64px] bg-[#FFFFFF33] flex justify-center items-center gap-[16px]`}>
                <img src={search} alt="search" />
                <span className="font-montserrat font-bold text-white text-[40px] leading-[100%]">Найти город</span>
            </button>
            
        </div>
    )
}