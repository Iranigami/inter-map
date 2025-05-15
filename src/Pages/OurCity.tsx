import { useEffect, useState } from "react";
import Footer from "../comps/Footer";
import Menu from "../comps/Menu";
import Waiting from "../comps/Waiting";

export default function OurCity() {
    const [selectedImage, setSelectedImage] = useState(    {
        link: "https://avatars.dzeninfra.ru/get-zen_doc/9846546/pub_64c9fccaf4fe4b1a8f0ae22c_64c9fd203a25a45dbddd4b0b/scale_1200",
        id: 0,
    },);
  const testImages = [
    {
        link: "https://avatars.dzeninfra.ru/get-zen_doc/9846546/pub_64c9fccaf4fe4b1a8f0ae22c_64c9fd203a25a45dbddd4b0b/scale_1200",
        id: 0,
    },
    {
        link: "https://cdn.culture.ru/images/d174ebaf-ec89-5b0a-b9fe-2e583655bee7",
        id: 1,
    },
    {
        link: "https://avatars.mds.yandex.net/get-altay/1003687/2a000001611a054c54d56ed377c3e7b65527/XXL_height",
        id: 2,
    },
    {
        link: "https://i.edem-v-gosti.ru/upload/iblock/09c/cheremkhovo.jpg?1601457044269407",
        id: 3,
    },
    {
        link: "https://gdk38.ru/wp-content/uploads/2025/05/5253488337749143937.jpg",
        id: 4,
    }
  ];
  useEffect(()=>{

  },[])
  return (
    <>
      <div className="bg-[#FFFFFF26] w-[3760px] h-[1720px] rounded-[60px] fixed top-[40px] mx-auto left-0 right-0 flex p-[40px] gap-[40px] justify-center items-center">
        <div className="w-[2147px] h-[1640px]">
            <div className="w-[2147px] h-[1207.69px] rounded-[30px] bg-red-200 overflow-hidden">
                <img src={selectedImage.link} alt="image" className="w-full" />
            </div>
            <div className="mt-[40px] flex gap-[16px] w-[2147px] h-[392.31px] overflow-x-auto overflow-y-hidden justify-left items-center">
                {testImages.map((image: {link: string, id: number}, index: number) => (
                    <div 
                        key = {index}
                        onClick={()=> setSelectedImage(image)}
                        className={`rounded-[30px] overflow-hidden ${index === selectedImage.id ? "outline-[8px] outline-[#EE8545] outline-offset-[8px] min-w-[608.56px] h-[328.31px] mx-[16px]" : "min-w-[640.56px] h-[360.31px] "}`}>
                        <img src={image.link} alt="image" className={`w-full`} />
                    </div>
                ))}
            </div>
        </div>
        <div className="w-[1493px] h-[1640px] overflow-y-auto pr-[10px]">
        {/*тут будет инфа с админки*/}
        <h1>
            Черемхово
        </h1>
        <h4 className="mt-[56px]">
            Жители Черемхово внесли значительный вклад в победу в Великой Отечественной войне, работая в тылу и проявляя стойкость и самоотверженность.
        </h4>
        <h2 className="mt-[56px]">
            Некоторые факты о вкладе города:
        </h2>
        <h3 className="mt-[32px]">
            Обеспечение бесперебойной работы угольных шахт
        </h3>
        <h4 className="mt-[12px]">
        С первых дней войны горняки, оставшиеся в тылу, взяли на себя обязательство выдавать по полторы-две нормы угля. За годы войны передовые шахты Черемхово выдали сверх плана 388 эшелонов угля.
        </h4>
        <h3 className="mt-[24px]">
        Эвакуация предприятий
        </h3>
        <h4 className="mt-[12px]">
        В Черемхово переехали, например, машиностроительный завод имени Карла Маркса, который с началом военных действий был перепрофилирован на выпуск боеприпасов.
        </h4>
        <h3 className="mt-[24px]">
        Помощь фронту
        </h3>
        <h4 className="mt-[12px]">
        В городе были открыты пункты приёма подарков бойцам Красной армии, где от населения принимали молоко, сметану, творог, мясо всех сортов, битую птицу, картофель и капусту.
        </h4>
        <h3 className="mt-[24px]">
        Сбор средств
        </h3>
        <h4 className="mt-[12px]">
        По призыву шахтёров было собрано 8,5 млн рублей на формирование танковой колонны «Черемховский шахтёр» и звена бомбардировщиков.
        </h4>
        <h3 className="mt-[24px]">
        Приём эвакуированных
        </h3>
        <h4 className="mt-[12px]">
        Черемхово принял преподавательский состав и студентов Ленинградского горного института, актёрский состав Московского театра имени Ермоловой.
        </h4>
        <h3 className="mt-[24px]">
        Развёртывание эвакогоспиталя
        </h3>
        <h4 className="mt-[12px]">
        Для раненых солдат был развёрнут эвакогоспиталь
        </h4>
        <h3 className="mt-[24px]">
        Помощь фронту
        </h3>
        <h4 className="mt-[12px]">
        В городе были открыты пункты приёма подарков бойцам Красной армии, где от населения принимали молоко, сметану, творог, мясо всех сортов, битую птицу, картофель и капусту.
        </h4>
        <h2 className="mt-[56px]">
        Более 6 тысяч черемховцев были награждены медалями «За доблестный труд в Великой Отечественной войне 1941–1945 гг.»
        </h2>
        <h4 className="mt-[32px]">
        В память о вкладе города в войну в Черемхово установлены памятники-мемориалы, на зданиях размещены мемориальные доски участникам и Героям Великой Отечественной войны.
        </h4>
        <h4 className="mt-[32px]">
        <span className="font-semibold">К осени 1941-го были оккупированы угольные районы Донбасса,</span> на которые до войны приходилось 63% объемов добычи в стране. Решающую роль стали играть восточные центры угледобычи. В военные годы сибирский город Черемхово внес весомый вклад в борьбу с фашизмом, обеспечивая бесперебойную работу местных шахт. Горняки, среди которых были и женщины, добывали 4,5 миллиона тонн угля в год для общегосударственных военных нужд! Их трудовой подвиг навсегда останется примером мужества и патриотизма.
        </h4>
        </div>
      </div>
      <Menu />
      <Footer />
      <Waiting />
    </>
  );
}
