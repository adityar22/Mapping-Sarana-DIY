import { NavLink } from "react-router-dom";
import { useState } from "react";
import Map from "../../pages/map";

import menu_map from "../../assets/map.png";
import list from "../../assets/list.png";
import "../../App.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const active = "bg-white text-orange font-bold";
  const deactive = "text-gray-300";
  const Menus = [
    { title: "Map", src: menu_map, link: "../../pages/map" },
    { title: "List", src: list },
  ];

  return (
    <>
      <div
        className={`${
          open ? "w-screen sm:w-50" : "w-screen sm:w-20 h-20 sm:h-screen"
        }
            bg-blue p-5  sm:pt-40 duration-300 fixed sm:relative z-40`}
      >
        <div className="flex justify-between flex-col h-full ">
          <div className="content-top">
            <div className="flex gap-x-4 justify-start sm:justify-center"></div>
            <div
              className={
                !open ? "hidden sm:block sm:pt-6" : "block pt3 sm:pt-6"
              }
            >
              {Menus.map((menu, index) => (
                <div>
                  <NavLink
                    key={index}
                    to={menu.link}
                    className={({ isActive }) => (isActive ? active : deactive)}
                  >
                    <div>
                      {menu.gap && (
                        <div className="w-full border-b border-white border-opacity-30"></div>
                      )}
                      <li
                        className={` flex gap-3 rounded-md p-2 cursor-pointer hover:bg-lightblue text-sm items-center transition-all duration-300 gap-x-4
                                ${menu.gap ? "mt-7" : "mt-6"}
                                ${index === 0 && "bg-light-white"} `}
                      >
                        <img src={menu.src} className="w-6 h-6" alt="" />
                        <span
                          className={`${
                            !open && "hidden"
                          } origin-left duration-200 text-base`}
                        >
                          {menu.title}
                        </span>
                      </li>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
