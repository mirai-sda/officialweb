import { images } from "@/constants";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={images.logo}
        alt="logo"
        width={100}
        height={100}
        className="h-10 w-auto "
        priority
      />
      <div className="flex flex-col">
        <span className="text-xl font-bold">Mirai</span>
        <span className="hidden md:block text-xs">Software & IA Solutions</span>
      </div>
    </div>
  );
};

export default Logo;
