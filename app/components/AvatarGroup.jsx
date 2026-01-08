import Image from "next/image";
export default function () {
  const avatars = [
    "/images/avatar/1.png",
    "/images/avatar/2.png",
    "/images/avatar/3.png",
    "/images/avatar/4.png",
    "/images/avatar/5.png",
  ];
  return <div className="flex">
    {
        avatars.map((src,index)=>(
            <div key={src} className="size-8 md:size-12 relative -ms-2">
              <Image  src={src} alt={`Avatar ${index}`} fill />
            </div>
        ))
    }
  </div>;
}
