import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularProgressBar from "./CircTimer";
import { useTimer } from "react-timer-hook";
export default function Waiting() {
  const [isUserInactive, setUserInactive] = useState(false);
  let time: number;
  const resetTimer = () => {
    clearTimeout(time);
    time = setTimeout(() => {
      setUserInactive(true);
    }, 60000); //1min of inactivity
  };
  document.addEventListener("touchstart", resetTimer);
  const navigate = useNavigate();
  useEffect(() => {
    clearTimeout(time);
    time = setTimeout(() => {
      setUserInactive(true);
    }, 60000); //1min of inactivity
  }, []);

  function MyTimer() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 30);
    const expiryTimestamp = time;
    const { seconds } = useTimer({
      expiryTimestamp,
      onExpire: () => navigate("/home"),
    });

    return (
        <CircularProgressBar sqSize={248} strokeWidth={12} seconds={seconds} />
    );
  }

  return (
    <>
      {isUserInactive && (
        <div
            className="w-full h-full fixed top-0 bg-[#00000099] flex justify-center items-center"> 
            <div
                onClick={() => {
                    setUserInactive(false);
                    resetTimer;
                }}
                className="w-full h-full absolute fixed z-0"/>
            <div
                className="w-[1242px] h-[969px] rounded-[100px] px-[64px] bg-white shadow-[24px_16px_24px_0px_#2D374426] font-montserrat pt-[96px] z-10">
            <MyTimer />
            <div className="mt-[96px] text-black text-[80px] tracking-0 leading-[100%] text-center font-bold">
                Завершение сеанса
            </div>
            <div className="mt-[32px] text-black text-[48px] tracking-0 leading-[100%] text-center font-normal">
                Из-за отсутствия активности программа скоро вернётся в главное меню
            </div>
            <div className="mt-[64px] text-black text-[40px] tracking-0 leading-[100%] text-center font-semibold opacity-[35%]">
                Вы можете нажать в любое место экрана, чтобы возобновить работу
            </div>
            <div className="flex mt-[64px] justify-center gap-[16px]">
                <button
                onClick={() => {
                    setUserInactive(false);
                    resetTimer;
                }}

                className="w-[549px] h-[113px] rounded-[64px] flex justify-center items-center bg-[#EE8545] text-white font-montserrat font-bold text-[40px] leading-[100%] tracking-0 text-center"
                >
                Продолжить
                </button>
                <button
                onClick={() => navigate("/home")}
                className="w-[549px] h-[113px] rounded-[64px] flex justify-center items-center bg-white border-[4px] border-[#EE8545] text-[#EE8545] font-montserrat font-bold text-[40px] leading-[100%] tracking-0 text-center"
                >
                На главную
                </button>
            </div>
            </div>
        </div>
      )}
    </>
  );
}
