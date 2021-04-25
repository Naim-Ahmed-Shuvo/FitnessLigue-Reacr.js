import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

//
const Team = () => {
  return (
    <section class="pt-20 pb-48">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center text-center mb-24">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold uppercase">Meet our trainers</h2>
            <p class="text-lg leading-relaxed m-4 text-gray-600">
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record
              maximum.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div
            class="w-full  md:w-4/12 lg:mb-0 mb-12 px-4"
            data-aos="flip-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <div class="px-6">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1579758682665-53a1a614eea6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGZpdG5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                class="shadow-lg rounded max-w-full mx-auto"
                style={{
                  maxWidth: 250,
                }}
              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">Ryan Terry</h5>
                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  4X MR. Muchel Mania
                </p>
                <div class="mt-6">
                  <button
                    class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button
                    class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button
                    class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i class="fab fa-dribbble"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false">
            <div class="px-6">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1613686933606-7f86f06d0d78?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltJTIwbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                class="shadow-lg rounded max-w-full mx-auto"
                style={{
                  maxWidth: 250,
                }}
              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold"> Lady Cute</h5>
                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Mrs. US
                </p>
                <div class="mt-6">
                  <button
                    class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i class="fab fa-google"></i>
                  </button>
                  <button
                    class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full md:w-4/12 lg:mb-0 mb-12 px-4" data-aos="flip-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false">
            <div class="px-6">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bSUyMG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                class="shadow-lg rounded max-w-full mx-auto"
                style={{
                  maxWidth: 250,
                }}
              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">Andre Diu</h5>
                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Muchel Mania Pro
                </p>
                <div class="mt-6">
                  <button
                    class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i class="fab fa-google"></i>
                  </button>
                  <button
                    class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button
                    class="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i class="fab fa-instagram"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
