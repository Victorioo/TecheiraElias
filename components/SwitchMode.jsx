"use client";

import { useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

function SwitchMode() {
  // start on dark mode
  const [actualTheme, setActualTheme] = useState("dark");

  // change the theme, if actualTheme = dark , change to light, and viceverse

  const changeTheme = () => {
    const themeHandler = actualTheme === "dark" ? "light" : "dark";
    setActualTheme(themeHandler);
    document.body.classList.toggle("dark");
  };

  return (
    <>
      {actualTheme === "light" ? (
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
    </>
  );
}

export default SwitchMode;
