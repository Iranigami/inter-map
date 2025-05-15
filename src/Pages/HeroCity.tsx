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
            <iframe hidden={true} src="https://may9.ru/our-victory/city-hero/stalingrad" width="3840" height="2160"> </iframe>
            <div className="w-full h-full fixed top-0 text-center text-[150px] bg-[#f5f5f5] text-orange-500 font-montserrat font-normal p-[200px]">
                <span className="text-red-500 font-bold text-[160px]">Это тестовая страница!</span><br/>
                Тут должна быть страница с городом {cityName}, но владельцы сайта may9.ru запретили его встраивание. Можете перейти по&nbsp;
                <a href={"https://may9.ru/our-victory/city-hero/" + cityName} className="text-red-500 underline">
                    ссылке
                </a>
                , для проверки её корректности, а я пока буду думать, как это решать...
            </div>
            <button 
                onClick={() => navigate("/home")}
                className="w-[440px] h-[128px] rounded-[64px] bg-white flex gap-[16px] shadow-[0px_2px_20px_0px_#00000026] fixed bottom-[40px] left-[40px] justify-center items-center font-montserrat font-bold text-[40px] text-[#EE8545] leading-[100%] tracking-0">
                <img src={home} alt="home" className="size-[64px]" />
                На главную
            </button>
        </div>
        <Waiting/>
        </>
    )
}