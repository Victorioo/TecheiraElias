"use client";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import "./Header.css";
import Link from "next/link";
export default function Header() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const changeTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
    if (currentTheme === "light") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  };

  useEffect(() => {
    document.body.classList.add("light");
  }, []);

  return (
    <>
      <header>
        <nav>
          <h1 className="font-medium mr-auto text-lg">
            <Link href={"/"}>Portfolio</Link>
          </h1>
          {currentTheme === "dark" ? (
            <BsFillMoonFill
              className="text-lg cursor-pointer theme_switch"
              onClick={changeTheme}
            />
          ) : (
            <BsFillSunFill
              className="text-lg cursor-pointer theme_switch"
              onClick={changeTheme}
            />
          )}
        </nav>
      </header>
    </>
  );
}
