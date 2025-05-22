import { useEffect, useState } from "react";
import Footer from "../comps/Footer";
import Menu from "../comps/Menu";
import Waiting from "../comps/Waiting";
import axios from "axios";

type Media = {
    id: number,
    media: string;
}


const MediaElement = (selectedImage: Media) => {
  let mediaType = selectedImage.media.split('.').pop()!.toLowerCase();

switch(mediaType){
   case 'mp4':
   case 'webm':
   case 'mov':
   case 'mkv':
      return (
         <video src={"https://cheremhovo.test.itlabs.top" + selectedImage.media}
            autoPlay={true}
            controls={true}
            width={'2147'}
         />
      );
   
   case 'jpg':
   case 'jpeg':
   case 'png':
   case 'gif':
      return (
         <img src={"https://cheremhovo.test.itlabs.top" + selectedImage.media}
            alt="image"
            className={'w-full'}
         />
      );
      
   default:
      return (<p>Формат файла "{mediaType}" не поддерживается.</p>);
};
}


export default function OurCity() {  
    const [files, setFiles] = useState([]);
    const [selectedImage, setSelectedImage] = useState<Media>();

    useEffect(()=>{
        axios.get(`https://cheremhovo.test.itlabs.top/api/cheremhovo`).then((response) => {
            if(document.getElementById("info"))
                document.getElementById("info")!.innerHTML = response.data[0].description;
            setFiles(response.data[0].files);
            setSelectedImage(response.data[0].files[0]);
          });
    },[])
  return (
    <>
      <div className="bg-[#FFFFFF26] w-[3760px] h-[1720px] rounded-[60px] fixed top-[40px] mx-auto left-0 right-0 flex p-[40px] gap-[40px] justify-center items-center">
        <div className="w-[2147px] h-[1640px]">
            <div className="w-[2147px] h-[1207.69px] rounded-[30px] overflow-hidden">
                {selectedImage && MediaElement(selectedImage)}
            </div>
            <div className="mt-[40px] flex gap-[16px] w-[2147px] h-[392.31px] overflow-x-auto overflow-y-hidden justify-left items-center">
                {files.map((image: Media, index: number) => (
                    <div 
                        key = {index}
                        onClick={()=> setSelectedImage(image)}
                        className={`rounded-[30px] overflow-hidden ${selectedImage && image.id === selectedImage.id ? "outline-[8px] outline-[#EE8545] outline-offset-[8px] min-w-[608.56px] h-[328.31px] mx-[16px]" : "min-w-[640.56px] h-[360.31px] "}`}>
                        {image.media.includes("mkv") && <video src={"https://cheremhovo.test.itlabs.top" + image.media} width={640.56} />}
                        {image.media.includes("jpg") && <img src={"https://cheremhovo.test.itlabs.top" + image.media} alt="image" className={`w-full`} />}
                    </div>
                ))}
            </div>
        </div>
        <div id="info" className="w-[1493px] h-[1640px] overflow-y-auto pr-[10px] info"/>
      </div>
      <Menu />
      <Footer />
      <Waiting />
    </>
  );
}
