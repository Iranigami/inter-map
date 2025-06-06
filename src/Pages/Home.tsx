import purple from "../assets/purple.svg"
import molod from "../assets/molod.svg"
import map from "../assets/map empty.svg"
import click from "../assets/icons/click.svg"
import stars from "../assets/star.svg"
import dots from "../assets/dots.svg"
import logo from "../assets/molodezh_deti_inversiya 1.svg"
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();
    return(
        <div className="w-full h-full">
            <img src={map} alt="map" className="white-shadow fixed top-[135px] mx-auto left-0 right-0 drop-shadow-xl" />
            <img src={stars} alt="stars" className="black-to-transparent fixed w-[1827.23px] h-[1082.41px] top-[570.71px] left-[318px]" />
            <img src={dots} alt="dots" className="fixed w-[1737.28px] h-[992.45px] top-[616.17px] left-[362.5px]"/>

            <div className="w-full h-full fixed top-0 bg-linear-to-b from-[#EE8545] to-[#EE854500] opacity-[30%]"/>
            <div className="flex top-[40px] justify-center w-full items-start gap-[32px] fixed">
                  <img src={logo} alt="Национальные проекты России" className="w-[730px] h-[250px] mt-[12px]"/>
                  <img src={purple} alt="Пространство от Росмолодежь" className="w-[612px] h-[150px] mt-[30px]" />
                <img src={molod} alt="Молодежка че" className="w-[510px] h-[220px]" />
            </div>
            <button
                onClick={()=> navigate("/map")} 
                className="w-[928px] h-[128px] rounded-[64px] bg-[#FFFFFF33] fixed bottom-[40px] left-0 right-0 mx-auto flex justify-center items-center gap-[16px] text-white font-montserrat font-bold text-[40px] leading-[100%] tracking-[0px]">
                <img src={click} alt="click" className="" />
                Нажмите, чтобы начать
            </button>
        </div>
    )
}