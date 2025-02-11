import CommunityIcon from "/src/assets/community.svg";
import EducationIcon from "/src/assets/education.svg";
import EquipmentIcon from "/src/assets/equipment.svg";
import ExpertIcon from "/src/assets/expert.svg";
import HydroponicsIcon from "/src/assets/hydroponics.svg";
import PlantIcon from "/src/assets/plants.svg";
import SustainabilityIcon from "/src/assets/sustainability.svg";
import Card from "./components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = Object.values(import.meta.glob("../assets/splash_images/*.{webp,jpg,jpeg,png}", { eager: true })).map(
      (m) => m.default
);

function Home() {
      return (
            <div className="">
                  <div className="min-h-screen mt-24 p-8 flex flex-col m-auto ">
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
                                    autoplay={true}
                                    slidesPerView={1}
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
                        {/* <div className="mx-auto text-center py-10">
                              <h3 className="font-bold text-xl">We are committed to...</h3>
                              <div className="grid grid-cols-4 gap-52 mx-auto my-8 w-min">
                                    <Card icon={<img src={SustainabilityIcon} />} text={"Sustainability"} />
                                    <Card icon={<img src={CommunityIcon} />} text={"Community"} />
                                    <Card icon={<img src={EducationIcon} />} text={"Education"} />
                              </div>
                              <h3>Visit our store today!</h3>
                        </div> */}
                        <div>
                              <button
                                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
                                    className="mx-auto mt-32 w-32 h-32 rounded-full bg-green-800 flex items-center justify-center hover:bg-green-700 transition-colors"
                                    aria-label="Scroll down"
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
                  </div>
                  <div className="min-h-screen bg-lime-50 p-8 flex flex-col m-auto">
                        <div className="max-w-4xl mx-auto text-center">
                              <h2 className="text-4xl font-bold mb-8">What Our Customers Say</h2>
                              <div className="grid grid-cols-3 gap-8 mb-16">
                                    <div className="bg-white p-6 rounded-lg shadow">
                                          <div className="flex items-center mb-4">
                                                <div className="text-yellow-400">★★★★★</div>
                                                <span className="ml-2 text-gray-600">5.0</span>
                                          </div>
                                          <p className="text-gray-700 mb-4">
                                                "Amazing selection of plants and very knowledgeable staff. They helped
                                                me start my first garden!"
                                          </p>
                                          <p className="font-semibold">- Sarah M.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow">
                                          <div className="flex items-center mb-4">
                                                <div className="text-yellow-400">★★★★★</div>
                                                <span className="ml-2 text-gray-600">5.0</span>
                                          </div>
                                          <p className="text-gray-700 mb-4">
                                                "Best garden center in Eugene! Their hydroponics section is impressive."
                                          </p>
                                          <p className="font-semibold">- Mike R.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow">
                                          <div className="flex items-center mb-4">
                                                <div className="text-yellow-400">★★★★★</div>
                                                <span className="ml-2 text-gray-600">5.0</span>
                                          </div>
                                          <p className="text-gray-700 mb-4">
                                                "The workshops they offer are fantastic. I've learned so much about
                                                sustainable gardening!"
                                          </p>
                                          <p className="font-semibold">- Lisa K.</p>
                                    </div>
                              </div>
                              <div className="bg-green-800 text-white py-12 px-8 rounded-lg">
                                    <h3 className="text-3xl font-bold mb-4">Ready to Start Your Garden?</h3>
                                    <p className="mb-6">
                                          Visit us today and let our experts help you bring your garden dreams to life!
                                    </p>
                                    <button className="bg-white text-green-800 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition-colors">
                                          Contact Us now
                                    </button>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Home;
