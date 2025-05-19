import oblast from "../assets/obl.svg";
import molod from "../assets/molod.svg";
import victory from "../assets/victory.svg";
import purple from "../assets/purple.svg";

export default function Footer() {
  return (
    <div className="fixed flex left-0 right-0 mx-auto bottom-[40px] w-[1414px] h-[144px] gap-[32px] justify-center items-center">
      <img src={oblast} alt="Область молодых" className="w-[560px] h-[144px]" />
      <img src={victory} alt="80 Победа" className="w-[98px] h-[144px]" />
      <img
        src={purple}
        alt="Пространство от Росмолодежь"
        className="w-[326px] h-[80px]"
      />
      <img src={molod} alt="" className="w-[334px] h-[144px]" />
    </div>
  );
}
