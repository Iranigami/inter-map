import { useNavigate, useSearchParams } from "react-router-dom"
import home from "../assets/icons/homeOrange.svg"
import Waiting from "../comps/Waiting";

export default function HeroCity(){
    const [searchParams] = useSearchParams();
    const cityName = searchParams.get("cityName");
    const navigate = useNavigate();
    return(
        <>
        <div>
            <iframe hidden={false} src={"https://may9.ru/our-victory/city-hero/" + cityName} className="doc scale-[200%] fixed top-[25%] left-[25%]" width="1920" height="1080"></iframe>
            <button 
                onClick={() => navigate("/")}
                className="w-[440px] h-[128px] rounded-[64px] bg-white flex gap-[16px] shadow-[0px_2px_20px_0px_#00000026] fixed bottom-[40px] left-[40px] justify-center items-center font-montserrat font-bold text-[40px] text-[#EE8545] leading-[100%] tracking-0">
                <img src={home} alt="home" className="size-[64px]" />
                На главную
            </button>
        </div>
        <Waiting/>
        </>
    )
}