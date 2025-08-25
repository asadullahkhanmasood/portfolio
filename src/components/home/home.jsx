import React from "react";
import "./home.css";
import img from "../../asset/images.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css";
function Home() {
  return (
    <>
      <main className="flex flex-col ">
        <h1 className="text-4xl text-center my-6">
          Amazon coupon and deal by{" "}
          <span className="text-[#2EC89E]">Shopifiers</span>
        </h1>
        <div className="boxes flex flex-row justify-center my-9 h-[19rem]">
          <Swiper
            spaceBetween={16}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              {/* box 1 start here  */}
              <div className="box1 flex items-center mx-16 ">
                <div className="boxes  flex flex-row">
                  <div className="left_side bg-red-400 rounded-[12rem] w-[7rem] h-[7rem] mx-4 text-3xl">
                    1
                  </div>
                  <div className="main_side flex flex-col">
                    <h2 className="text-[1.2rem] w-[14rem] text-[#259BD6]">
                      $100 Off HERO8 Black! Starting at $299.99
                    </h2>
                    <span className="text-[#999999] text-1">
                      Old Navy Coupons • Sponsored
                    </span>
                    <button className="w-18 rounded-2xl bg-[#2EC89E] mx-4 my-2">
                      BUY
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* box 1 start here  */}
              <div className="box1 flex items-center mx-16 ">
                <div className="boxes  flex flex-row">
                  <div className="left_side bg-red-400 rounded-[12rem] w-[7rem] h-[7rem] mx-4 text-3xl">
                    1
                  </div>
                  <div className="main_side flex flex-col">
                    <h2 className="text-[1.2rem] w-[14rem] text-[#259BD6]">
                      $100 Off HERO8 Black! Starting at $299.99
                    </h2>
                    <span className="text-[#999999] text-1">
                      Old Navy Coupons • Sponsored
                    </span>
                    <button className="w-18 rounded-2xl bg-[#2EC89E] mx-4 my-2">
                      BUY
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* box 1 start here  */}
              <div className="box1 flex items-center mx-16 ">
                <div className="boxes  flex flex-row">
                  <div className="left_side bg-red-400 rounded-[12rem] w-[7rem] h-[7rem] mx-4 text-3xl">
                    1
                  </div>
                  <div className="main_side flex flex-col">
                    <h2 className="text-[1.2rem] w-[14rem] text-[#259BD6]">
                      $100 Off HERO8 Black! Starting at $299.99
                    </h2>
                    <span className="text-[#999999] text-1">
                      Old Navy Coupons • Sponsored
                    </span>
                    <button className="w-18 rounded-2xl bg-[#2EC89E] mx-4 my-2">
                      BUY
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {/* box 1 start here  */}
              <div className="box1 flex items-center mx-16 ">
                <div className="boxes  flex flex-row">
                  <div className="left_side bg-red-400 rounded-[12rem] w-[7rem] h-[7rem] mx-4 text-3xl">
                    1
                  </div>
                  <div className="main_side flex flex-col">
                    <h2 className="text-[1.2rem] w-[14rem] text-[#259BD6]">
                      $100 Off HERO8 Black! Starting at $299.99
                    </h2>
                    <span className="text-[#999999] text-1">
                      Old Navy Coupons • Sponsored
                    </span>
                    <button className="w-18 rounded-2xl bg-[#2EC89E] mx-4 my-2">
                      BUY
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* box 1 en d here  */}
            <SwiperSlide>
              {/* box 1 start here  */}
              <div className="box1 flex items-center mx-16 ">
                <div className="boxes  flex flex-row">
                  <div className="left_side bg-red-400 rounded-[12rem] w-[7rem] h-[7rem] mx-4 text-3xl">
                    1
                  </div>
                  <div className="main_side flex flex-col">
                    <h2 className="text-[1.2rem] w-[14rem] text-[#259BD6]">
                      $100 Off HERO8 Black! Starting at $299.99
                    </h2>
                    <span className="text-[#999999] text-1">
                      Old Navy Coupons • Sponsored
                    </span>
                    <button className="w-18 rounded-2xl bg-[#2EC89E] mx-4 my-2">
                      BUY
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* box 2 end here  */}
            <SwiperSlide>
              {/* box 1 start here  */}
              <div className="box1 flex items-center mx-16 ">
                <div className="boxes  flex flex-row">
                  <div className="left_side bg-red-400 rounded-[12rem] w-[7rem] h-[7rem] mx-4 text-3xl">
                    1
                  </div>
                  <div className="main_side flex flex-col">
                    <h2 className="text-[1.2rem] w-[14rem] text-[#259BD6]">
                      $100 Off HERO8 Black! Starting at $299.99
                    </h2>
                    <span className="text-[#999999] text-1">
                      Old Navy Coupons • Sponsored
                    </span>
                    <button className="w-18 rounded-2xl bg-[#2EC89E] mx-4 my-2">
                      BUY
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* first row endedn now other menus */}

        <div className="heading_of_blockCard flex justify-center ">
          <h1 className="text-3xl font-bold my-9">BEst cuppons and deals</h1>
        </div>

{/* big-row start */}



<div className="row_big flex flex-row justify-between mx-[13rem] my-[4rem]">


        {/* heading end here  */}
        <div className="flex flex-row justify-center ">
          <div className="block_card bg-gray-200 h-[19rem] w-[18rem] flex flex-col items-center py-8">
            <div className="shape w-[7rem] h-[7rem] bg-red-50 flex items-center justify-center rounded-[17rem]">1</div>
            <h1 className="text-[#259BD6] text-2xl mt-11 mx-auto w-[13rem] text-center">
              $100 Off HERO8 Black! Starting at $299.99
            </h1>
            <p className="text-[#999999]">Old Navy Coupons • Sponsored</p>
            <button className="bg-[#259BD6] rounded-md  flex justify-center text-white h-10 w-[9rem] items-center mt-5">
              Get Coupon Code
            </button>
          </div>
        </div>


        <div className="flex flex-row justify-center ">
          <div className="block_card bg-gray-200 h-[19rem] w-[18rem] flex flex-col items-center py-8">
            <div className="shape w-[7rem] h-[7rem] bg-red-50 flex items-center justify-center rounded-[17rem]">1</div>
            <h1 className="text-[#259BD6] text-2xl mt-11 mx-auto w-[13rem] text-center">
              $100 Off HERO8 Black! Starting at $299.99
            </h1>
            <p className="text-[#999999]">Old Navy Coupons • Sponsored</p>
            <button className="bg-[#259BD6] rounded-md  flex justify-center text-white h-10 w-[9rem] items-center mt-5">
              Get Coupon Code
            </button>
          </div>
        </div>



        <div className="flex flex-row justify-center ">
          <div className="block_card bg-gray-200 h-[19rem] w-[18rem] flex flex-col items-center py-8">
            <div className="shape w-[7rem] h-[7rem] bg-red-50 flex items-center justify-center rounded-[17rem]">1</div>
            <h1 className="text-[#259BD6] text-2xl mt-11 mx-auto w-[13rem] text-center">
              $100 Off HERO8 Black! Starting at $299.99
            </h1>
            <p className="text-[#999999]">Old Navy Coupons • Sponsored</p>
            <button className="bg-[#259BD6] rounded-md  flex justify-center text-white h-10 w-[9rem] items-center mt-5">
              Get Coupon Code
            </button>
          </div>
        </div>



        <div className="flex flex-row justify-center ">
          <div className="block_card bg-gray-200 h-[19rem] w-[18rem] flex flex-col items-center py-8">
            <div className="shape w-[7rem] h-[7rem] bg-red-50 flex items-center justify-center rounded-[17rem]">1</div>
            <h1 className="text-[#259BD6] text-2xl mt-11 mx-auto w-[13rem] text-center">
              $100 Off HERO8 Black! Starting at $299.99
            </h1>
            <p className="text-[#999999]">Old Navy Coupons • Sponsored</p>
            <button className="bg-[#259BD6] rounded-md  flex justify-center text-white h-10 w-[9rem] items-center mt-5">
              Get Coupon Code
            </button>
          </div>
        </div>
        {/* card end hre  */}
</div>
      </main>
    </>
  );
}

export default Home;
