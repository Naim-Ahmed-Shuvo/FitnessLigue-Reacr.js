import React from 'react';

const Footer = () => {
    return (
        <footer class=" bg-gray-300 pt-8 pb-6">
        
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4">
              <h4 class="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 class="text-lg mt-0 mb-2 text-gray-700">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div class="mt-6">
                <button
                  class="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                  data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
                >
                  <i class="flex fab fa-instagram text-red-500"></i></button
                ><button
                  class="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                  data-aos="zoom-in"
            data-aos-delay="60"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
                >
                  <i class="flex fab fa-facebook-square text-red-500"></i></button
                ><button
                  class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                  data-aos="zoom-in"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
                >
                  <i class="flex fab fa-twitter text-red-500"></i></button
                >
              </div>
            </div>
        
          </div>
          <hr class="my-6 border-gray-400" />
          <div
            class="flex flex-wrap items-center md:justify-between justify-center"
          >
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-gray-600 font-semibold py-1">
                Copyright © <span className="text-red-500">Fitness Ligue</span>
               
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;