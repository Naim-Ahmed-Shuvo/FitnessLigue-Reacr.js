import React from "react";

const Contact = () => {
  return (
    <>
      <section class="pb-20 sm:pb-20  relative block bg-black text-white">
        
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64 sm:pt-24 sm:pb-24">
          <div class="flex flex-wrap text-center justify-center xs1:mt-20">
            <div class="w-full lg:w-6/12 px-4" data-aos="zoom-in"
            data-aos-delay="40"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false">
              <h2 class="text-4xl font-semibold text-white uppercase">Contact With Us</h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aliquid maiores facere expedita corporis. Aut repudiandae debitis ad quod quae velit quidem quia consequuntur laboriosam.
              </p>
            </div>
          </div>
   
        </div>
      </section>
      <section class=" block py-20 lg:pt-0 bg-black text-white ">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48 ">
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg xs1:pt-20 rounded-lg bg-red-500" data-aos="fade-up-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false">
                <div class="flex-auto p-5 lg:p-10">
                  <h4 class="text-2xl font-semibold">Want to work with us?</h4>
                  <p class="leading-relaxed mt-1 mb-4">
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <div class="relative w-full mb-3 mt-8">
                    <label
                      class="block uppercase  text-xs font-bold mb-2"
                      for="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      class="border-0 px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Full Name"
                      style={{
                        transition: "all 0.15s ease 0s",
                      }}
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase  text-xs font-bold mb-2"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      class="border-0 px-3 py-3 placeholder-gray-400  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Email"
                      style={{
                        transition: "all 0.15s ease 0s",
                      }}
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase   text-xs font-bold mb-2"
                      for="message"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      cols="80"
                      class="border-0 px-3 py-3 placeholder-gray-400   bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Type a message..."
                    ></textarea>
                  </div>
                  <div class="text-center mt-6">
                    <button
                      class="bg-red-600 text-white active:bg-red-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{
                        transition: "all 0.15s ease 0s",
                      }}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
