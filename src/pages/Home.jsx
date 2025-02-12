import EquipmentIcon from "/src/assets/equipment.svg";
import ExpertIcon from "/src/assets/expert.svg";
import HydroponicsIcon from "/src/assets/hydroponics.svg";
import PlantIcon from "/src/assets/plants.svg";
import { Link } from "react-router";
import Card from "./components/Card";
import CookieConsent from "./components/CookieConsent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = Object.values(import.meta.glob("/public/splash_images/*.{webp,jpg,jpeg,png}", { eager: true })).map(
      (m) => m.default
);

function Home() {
      return (
            <div className="">
                  <CookieConsent />
                  <div className="min-h-[90vh] mt-12 flex flex-col m-auto ">
                        <div className="flex justify-between flex-nowrap mx-20">
                              <div className="px-8">
                                    <h1 className="font-extrabold text-7xl">Eugene Garden & Harvest Center</h1>
                                    <h5 className="py-5 text-xl max-w-5xl">
                                          Thank you for choosing Eugene Garden & Harvest! Whether you're a seasoned
                                          gardener or just starting out, we're here to support your journey. We offer a
                                          wide selection of:
                                    </h5>
                                    <div className="grid grid-cols-2 gap-x-52 gap-y-2 w-min mx-auto justify-items-center">
                                          <Card icon={<img src={PlantIcon} />} text={"High-quality plants"} />
                                          <Card icon={<img src={EquipmentIcon} />} text={"Gardening supplies"} />
                                          <Card icon={<img src={HydroponicsIcon} />} text={"Hydroponics "} />
                                          <Card icon={<img src={ExpertIcon} />} text={"Expert advice"} />
                                    </div>
                              </div>
                              <Swiper
                                    pagination={true}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    autoplay={{ delay: "1000" }}
                                    speed={500}
                                    slidesPerView={1}
                                    grabCursor={true}
                                    className="overflow-visible max-w-5xl bg-gray-300 rounded-lg max-h-[650px]"
                              >
                                    {images.map((image, index) => {
                                          return (
                                                <SwiperSlide key={index}>
                                                      <div className="h-[600px] w-auto ">
                                                            <img
                                                                  src={image}
                                                                  className=" rounded-lg overflow-hidden h-full object-cover mx-auto"
                                                                  alt="Slide image"
                                                            />
                                                      </div>
                                                </SwiperSlide>
                                          );
                                    })}
                              </Swiper>
                        </div>
                        <button
                              onClick={() => window.scrollTo({ top: 900, behavior: "smooth" })}
                              className="mx-auto my-auto w-24 h-24 rounded-full bg-green-800 flex items-center justify-center hover:bg-green-700 transition-colors"
                        >
                              <svg
                                    className="w-16 h-16 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                              >
                                    <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M19 9l-7 7-7-7"
                                    />
                              </svg>
                        </button>
                  </div>
                  <div className="min-h-screen bg-lime-50 p-8 flex flex-col m-auto">
                        <div className="max-w-7xl mx-auto text-center">
                              <h2 className="text-4xl font-bold mb-8">What Our Customers Say</h2>
                              <div className="grid grid-cols-3 gap-8 mb-8">
                                    <div className="bg-white p-6 rounded-lg shadow">
                                          <div className="flex items-center mb-4">
                                                <div className="text-yellow-400">★★★★★</div>
                                                <span className="ml-2 text-gray-600">5.0</span>
                                          </div>
                                          <p className="text-gray-700 mb-4">
                                                "Brandon is amazing. I was having issues with my timer, and not only did
                                                he patiently program it and explain how to program it TWICE, he even
                                                offered to swap it out for a new one just in case the one I had was
                                                defective (although I'm pretty sure it wasn't) and made sure it was all
                                                set up before I left. "Customer service" doesn't really cover it as much
                                                as just a good neighbor who you can count on for favors. They definitely
                                                have my permanent loyalty"
                                          </p>
                                          <p className="font-semibold">- Anastasia C.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow">
                                          <div className="flex items-center mb-4">
                                                <div className="text-yellow-400">★★★★★</div>
                                                <span className="ml-2 text-gray-600">5.0</span>
                                          </div>
                                          <p className="text-gray-700 mb-4">
                                                "Since moving here to Eugene, this has to be the best hydroponic/grow
                                                shop I've been to by far. Chase (shorter younger dude,) is a badass at
                                                his job and has been exceptionally knowledgeable with all that I've
                                                needed. Their customer service is insanely good, considering also they
                                                actually try to save you money instead of upselling you products you
                                                don't even need. Can't say enough good things about this store. These
                                                are just two of the products that I frequently purchase. This soil has
                                                to be some of the best soil that I have ever used. Light and fluffy and
                                                has a good mix of amendments. Thank you guys for all you do. I will
                                                continue to use this store exclusively unless you just don't have
                                                something that I need. Which has yet to happen. Thanks again, Growmies!"
                                          </p>
                                          <p className="font-semibold">- Auniversalmind.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow">
                                          <div className="flex items-center mb-4">
                                                <div className="text-yellow-400">★★★★★</div>
                                                <span className="ml-2 text-gray-600">5.0</span>
                                          </div>
                                          <p className="text-gray-700 mb-4">
                                                "I stopped by their store today mainly to get an idea of prices for a
                                                HPS lighting system. Even though I wasn't ready to buy right now the gal
                                                behind the counter was VERY helpful, very knowledgeable and very polite.
                                                She even put up with my rambling. ;) When I do get around to upgrading
                                                my system I know where I'll be going. Thanks!"
                                          </p>
                                          <p className="font-semibold">- Robert D.</p>
                                    </div>
                              </div>
                              <div className="bg-green-800 text-white py-12 px-8 rounded-lg">
                                    <h3 className="text-3xl font-bold mb-4">Ready to Start Your Garden?</h3>
                                    <p className="mb-6">
                                          Visit us today and let our experts help you bring your garden dreams to life!
                                    </p>
                                    <Link to="/contact">
                                          <button
                                                onClick={() => console.log("Button clicked")}
                                                className="bg-white text-green-800 px-8 py-3 rounded-full font-bold cursor-pointer hover:bg-green-50 transition-colors"
                                          >
                                                Contact Us Now!
                                          </button>
                                    </Link>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Home;
