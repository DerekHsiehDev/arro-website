import { Image } from "@nextui-org/react";


const ArroLogo = () => (
   <Image src="/arroLogo.png" width={40} alt="" css={{ opacity: 0.8, cursor: "pointer"}} onClick={() => {window.open("/", "_self")}} />
);

export default ArroLogo;
