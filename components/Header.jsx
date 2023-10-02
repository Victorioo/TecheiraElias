import Link from "next/link";
import SwitchMode, {OpenMenu} from "./SwitchMode";

import "./css/Header.css";
import ScrollIndicator from "./scroll.indicator";

export default function Header() {

  return (
    <>
      <header>
        <nav>
          <h1 className="font-medium mr-auto text-lg">
            <Link href={"/"}>Portfolio</Link>
          </h1>
          
          <SwitchMode />
          {/* <OpenMenu></OpenMenu> */}
        </nav>
        <ScrollIndicator />
      </header>
    </>
  );
}
