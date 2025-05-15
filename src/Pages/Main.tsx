import map from "../assets/map edit 1.png";
import logo from "../assets/logo.png";
import Menu from "../comps/Menu";
import Footer from "../comps/Footer";
import Cities from "../comps/Cities";

export default function Main() {
  return (
    <>
      <img
        src={map}
        alt="map"
        className="absolute w-[3639.81px] h-[1946px] fixed top-[107px] left-[100.09px] z-[-1]"
      />

      <Cities />
      <img
        src={logo}
        alt="logo"
        className="fixed top-[40px] left-[80px] w-[580px]"
      />
      <Menu />
      <Footer />
    </>
  );
}
