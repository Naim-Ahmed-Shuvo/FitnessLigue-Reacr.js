import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
    return (
        <section id="about" class="relative py-20 bg-black text-white">
        {/* <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{height: 80}}
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
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div> */}
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4" data-aos="fade-right" data-aos-delay="50"  data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos-once="false">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1549476464-37392f717541?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGZpdG5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12" data-aos="fade-left" data-aos-delay="50"  data-aos-duration="1000"
    data-aos-easing="ease-in-out" data-aos-once="false">
               
                <small className="text-red-500 text-xl font-semibold mb-4">About Our Gym <span className="w-1 h-1 bg-red-500 inline-block rounded-full"></span><span className="w-1 h-1 bg-red-500 inline-block rounded-full ml-1"></span><span className="w-1 h-1 bg-red-500 inline-block rounded-full ml-1"></span></small>
                <h3 class="text-4xl uppercase font-semibold mt-4">Safe Body Building</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  The extension comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go.
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class=" inline-block py-2 text-red-500 mr-3 text-lg"
                          ><i class="fas fa-dumbbell "></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-lg text-smibold">
                          Latest & gratest gym equipments
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class=" inline-block py-2 text-red-500 mr-3 text-lg"
                          ><i class="fas fa-hard-hat "></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-lg text-smibold">
                          Multi dimentional foam padding
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class=" inline-block py-2 text-red-500 mr-3 text-lg"
                          ><i class="fas fa-users "></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-lg text-smibold">
                          3 professional trainers
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> 
    );
};

export default About;