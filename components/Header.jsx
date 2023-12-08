import Link from "next/link";
import SwitchMode, { OpenMenu } from "./SwitchMode";

import "./css/Header.css";
import ScrollIndicator from "./scroll.indicator";

export default function Header() {
  return (
    <>
      <header>
        <nav className="flex space-between items-center w-[80%] h-[100px]">
          <div className="font-medium mr-auto text-lg flex gap-8">
            <a href="/#">Inicio</a>
            <a href="/#acerca">Acerca</a>
            <a href="/#experiencia">Experiencia</a>
            <a href="/#contacto">Contacto</a>
          </div>
          <SwitchMode />
        </nav>
        <ScrollIndicator />
      </header>
    </>
  );
}
