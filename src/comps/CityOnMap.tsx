type Props = {
  positionUp?: boolean; //if true text will be on top of the mark
  coords: string; //as className for example left-[<x>px] top-[<y>px]
  city: string;
};

export default function CityOnMap({ positionUp, coords, city }: Props) {
  return (
    <div className={`relative fixed ${coords}`}>
      <div className="size-[24px] bg-[#EE8545] rounded-full flex justify-center items-center fixed border-4 border-white" />
      <div
        className={`${positionUp ? "rounded-bl-[2px] ml-[12px] mt-[-48px]" : "rounded-tl-[2px] m-[12px]"} backdrop-blur-[50px] h-[64px] absolute flex justify-center items-center text-center px-[24px] font-montserrat font-semibold text-white text-[28px] rounded-[32px] bg-[#FFFFFF40]`}
      >
        {city}
      </div>
    </div>
  );
}
