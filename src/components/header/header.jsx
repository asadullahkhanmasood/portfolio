import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="">
        <div className="topbar bg-[#F5F5F5] h-[72px] flex justify-center ">
          <h1 className="text-1xl m-auto">
            <span className="text-green-500 mr-3">SHoppifieer</span> enjoy
            shoppping and enjoying the deal with us
          </h1>
        </div>

        <nav className="bg-[#2EC89E] flex flex-row justify-between items-center h-14 text-white" >
          <div className="heading mx-4 text-white">
            <h1 className="text-3xl">Shopper</h1>
          </div>

          <ul className="flex [&>li]:mx-3 items-center ">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/" end>
                About Us 
              </NavLink>
            </li>
            <li>
              <NavLink to="/" end>
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/" end>
                ServiceS
              </NavLink>
            </li>
          </ul>

          <div className="button mx-[3rem]">
            <button className="px-9 bg-white text-black rounded-[6rem]">Login</button>
           
          </div>
        </nav>
      </header>

  
    </>
  );
}

export default Header;
