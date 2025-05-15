import { useNavigate } from "react-router-dom";
import CityOnMap from "./CityOnMap";

export default function Cities() {
  const navigate = useNavigate();
  return (
    <div className="fixed w-full h-full top-0 left-0">
      <a href={"https://may9.ru/our-victory/city-hero/kerch"}>
        <CityOnMap coords="top-[1557px] left-[206px]" city="Керчь" />
      </a>
      <a href={"https://may9.ru/our-victory/city-hero/sevastopol"}>
        <CityOnMap
          coords="top-[1538px] left-[130px]"
          city="Севастополь"
          positionUp={true}
        />
      </a>
      <a href={"https://may9.ru/our-victory/city-hero/novorossiysk"}>
        <CityOnMap coords="top-[1641px] left-[258px]" city="Новороссийск" />
      </a>
      <a href={"https://may9.ru/our-victory/city-hero/stalingrad"}>
        <CityOnMap coords="top-[1532px] left-[530px]" city="Сталинград" />
      </a>
      <a href={"https://may9.ru/our-victory/city-hero/tula"}>
        <CityOnMap
          coords="top-[1238.02px] left-[476.5px]"
          city="Тула"
          positionUp={true}
        />
      </a>
      <a href={"https://may9.ru/our-victory/city-hero/moscow"}>
        <CityOnMap coords="top-[1105px] left-[559px]" city="Москва" />
      </a>
      <a href={"https://may9.ru/our-victory/city-hero/smolensk"}>
        <CityOnMap coords="top-[1016.01px] left-[421.92px]" city="Смоленск" />
      </a>
      <a href={"https://may9.ru/our-victory/city-hero/leningrad"}>
        <CityOnMap coords="top-[827px] left-[547px]" city="Ленинград" />
      </a>
      <a href={"https://may9.ru/our-victory/city-hero/murmansk"}>
        <CityOnMap coords="top-[505px] left-[861px]" city="Мурманск" />
      </a>
      <button onClick={() => navigate("/our-city")}>
        <CityOnMap coords="top-[1620px] left-[2172px]" city="Черемхово" />
      </button>
    </div>
  );
}
