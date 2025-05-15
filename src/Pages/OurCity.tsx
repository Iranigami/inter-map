import Footer from "../comps/Footer";
import Menu from "../comps/Menu";
import Waiting from "../comps/Waiting";

export default function OurCity() {
  return (
    <>
      <div className="bg-[#FFFFFF26] w-[3760px] h-[1720px] rounded-[60px] fixed top-[40px] mx-auto left-0 right-0 flex p-[40px] gap-[40px] justify-center items-center">
        <div className="w-[2147px] h-[1640px] bg-white">

        </div>
        <div className="w-[1493px] h-[1640px] bg-white overflow-y-scroll">
        
        </div>
      </div>
      <Menu />
      <Footer />
      <Waiting />
    </>
  );
}
