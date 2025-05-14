import map from "./assets/map.png"
import logo from "./assets/logo.png"
import Menu from "./comps/Menu"
import Footer from "./comps/Footer"
import Cities from "./comps/Cities"

function App() {

  return (
    <>
    <img src={map} alt="map" className="absolute w-[3840px] h-[2354.07]px fixed top-[67px] z-[-1]" />

    <Cities/>
    <img src={logo} alt="logo" className="fixed top-[40px] left-[80px] w-[580px]" />
    <Menu/>
    <Footer/>
    </>
  )
}

export default App
