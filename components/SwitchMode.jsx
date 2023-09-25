"use client";

import { useState, useRef } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function SwitchMode() {
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

export function OpenMenu() {
  const [open, setOpen] = useState(false)

  return (
    <ul onClick={() => setOpen(!open)} >
      <span className={open ? 'opened' : ''}></span>
      <span className={open ? 'opened' : ''}></span>
      <span className={open ? 'opened' : ''}></span>
    </ul>
  );
}
