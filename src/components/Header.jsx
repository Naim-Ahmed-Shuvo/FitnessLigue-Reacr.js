import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Header = () => {
    return (
        <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
            minHeight: "95vh"
        }}
      >
        <div
          class="absolute top-0 w-full h-full bg-left bg-cover"
          style={{
            backgroundImage: ' url("https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zml0bmVzc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")'
          }}
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-70 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto"  data-aos="fade-in"
  //  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false"
    >
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center" >
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Go <span className="text-red-600">Hard</span> or Go Home
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  Welcome To The Ultimate Fitness Ligue.We provie the mordern era of excersise.Come and change your destiny for body building and make your own shape.
                </p>
                <button className="bg-red-500 py-3 px-16 text-white rounded hover:bg-red-700 cursor-pointer mt-20 font-semibold transition duration-300 ease-in-out">Go Gym</button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{height: 70}}
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
            //   class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
    );
};

export default Header;