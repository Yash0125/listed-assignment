import React from "react";

export const NavListItems = ({ text, iconUrl, isActive }) => {
  return (
    <li className="flex items-center gap-[20px] w-full">
      <img src={iconUrl} className="h-[18px] w-[18px]" alt="" />
      <p
        className={
          "text-white text-[18px] leading-[22px] " +
          (isActive ? "font-bold" : "font-[300]")
        }
      >
        {text}
      </p>
    </li>
  );
};
