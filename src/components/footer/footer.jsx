import React from "react";

function Footer() {
  return (
    <>
      <footer className="flex flex-col bg-blue-950 h-[13rem] ">
        <div className="top_row bg-lime-200 flex flex-row justify-between">
          <div className="flex flex-row p-16">
            <div className="leftside">
              <h1 className="text-2xl mx-7 items-center">SHOPIFIER</h1>
            </div>

            <div className="match_side">
              <span>Lorem ipsum dolor sit amet.kdfjka</span>
            </div>
          </div>

          <div className="icon_bar flex items-center justify-between mx-20">
            <span className="w-10 bg-red-400 h-11 flex items-center justify-center mx-1  ">i</span>
            <span className="w-10 bg-red-400 h-11 items-center flex mx-1">i</span>

            <span className="w-10 bg-red-400 h-11 items-center  flex mx-1">i</span>
                <span className='w-10 bg-red-400 h-11 items-center flex mx-1  '>i</span>
          </div>
        </div>

        <div className="bottom_row h-[6rem]">11</div>
      </footer>
    </>
  );
}

export default Footer;
