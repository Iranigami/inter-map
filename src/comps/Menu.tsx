import homeOn from "../assets/icons/homeOn.svg";
import homeOff from "../assets/icons/homeOff.svg";
import cityOn from "../assets/icons/cityOn.svg";
import cityOff from "../assets/icons/cityOff.svg";
import { useLocation, useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="flex w-[928px] h-[160px] rounded-[80px] p-[16px] gap-[16px] bg-[#0000004D] backdrop-blur-[50px] fixed left-0 right-0 mx-auto bottom-[200px] font-montserrat font-bold text-white text-[40px]">
      <button
        disabled = {location.pathname === '/home'}
        onClick={() => {
          navigate("/home");
        }}
        className="w-[440px] h-[128px] rounded-[64px] disabled:bg-[#EE8545] bg-[#FFFFFF33] flex justify-center items-center gap-[16px]"
      >
        <img hidden={location.pathname === '/home'} src={homeOff} alt="home" />
        <img hidden={location.pathname !== '/home'} src={homeOn} alt="home" />
        Главная
      </button>
      <button
        disabled = {location.pathname === '/our-city'}
        onClick={() => {
          navigate("/our-city");
        }}
        className="w-[440px] h-[128px] rounded-[64px] disabled:bg-[#EE8545] bg-[#FFFFFF33] flex justify-center items-center gap-[16px]"
      >
        <img hidden={location.pathname === '/our-city'} src={cityOff} alt="city" />
        <img hidden={location.pathname !== '/our-city'} src={cityOn} alt="city" />
        Наш город
      </button>
    </div>
  );
}
