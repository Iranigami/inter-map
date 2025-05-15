import { useNavigate } from "react-router-dom";
import CityOnMap from "./CityOnMap";

export default function Cities() {
  const navigate = useNavigate();
  return (
    <div className="fixed w-full h-full top-0 left-0">
      <button onClick={() => navigate("/hero-city?cityName=kerch")}>
        <CityOnMap coords="top-[1557px] left-[206px]" city="Керчь" />
      </button>
      <button onClick={() => navigate("/hero-city?cityName=sevastopol")}>
        <CityOnMap
          coords="top-[1538px] left-[130px]"
          city="Севастополь"
          positionUp={true}
        />
      </button>
      <button onClick={() => navigate("/hero-city?cityName=novorossiysk")}>
        <CityOnMap coords="top-[1641px] left-[258px]" city="Новороссийск" />
      </button>
      <button onClick={() => navigate("/hero-city?cityName=stalingrad")}>
        <CityOnMap coords="top-[1532px] left-[530px]" city="Сталинград" />
      </button>
      <button onClick={() => navigate("/hero-city?cityName=tula")}>
        <CityOnMap
          coords="top-[1238.02px] left-[476.5px]"
          city="Тула"
          positionUp={true}
        />
      </button>
      <button onClick={() => navigate("/hero-city?cityName=moscow")}>
        <CityOnMap coords="top-[1105px] left-[559px]" city="Москва" />
      </button>
      <button onClick={() => navigate("/hero-city?cityName=smolensk")}>
        <CityOnMap coords="top-[1016.01px] left-[421.92px]" city="Смоленск" />
      </button>
      <button onClick={() => navigate("/hero-city?cityName=leningrad")}>
        <CityOnMap coords="top-[827px] left-[547px]" city="Ленинград" />
      </button>
      <button onClick={() => navigate("/hero-city?cityName=murmansk")}>
        <CityOnMap coords="top-[505px] left-[861px]" city="Мурманск" />
      </button>
      <button onClick={() => navigate("/our-city")}>
        <CityOnMap coords="top-[1620px] left-[2172px]" city="Черемхово" />
      </button>
    </div>
  );
}
