import CommunityIcon from "/src/assets/community.svg";
import EducationIcon from "/src/assets/education.svg";
import EquipmentIcon from "/src/assets/equipment.svg";
import ExpertIcon from "/src/assets/expert.svg";
import HydroponicsIcon from "/src/assets/hydroponics.svg";
import PlantIcon from "/src/assets/plants.svg";
import SustainabilityIcon from "/src/assets/sustainability.svg";
import Card from "./components/Card";
import Carousel from "./components/Carousel";

const images = Object.values(import.meta.glob("../assets/splash_images/*.{webp,jpg,jpeg,png}", { eager: true })).map(
      (m) => m.default
);

function Home() {
      return (
            <div className="min-h-screen bg-white p-8 flex flex-col">
                  <div className="flex justify-between flex-nowrap">
                        <div className="p-12">
                              <h1 className="font-bold text-5xl">Eugene Garden & Harvest Center</h1>
                              <h5>
                                    Thank you for choosing Eugene Garden & Harvest! Whether you're a seasoned gardener
                                    or just starting out, we're here to support your journey. We offer a wide selection
                                    of:
                                    <div className="grid grid-cols-2 gap-x-52 gap-y-2 w-min mx-auto justify-items-center">
                                          <Card icon={<img src={PlantIcon} />} text={"High-quality plants"} />
                                          <Card icon={<img src={EquipmentIcon} />} text={"Gardening supplies"} />
                                          <Card icon={<img src={HydroponicsIcon} />} text={"Hydroponics "} />
                                          <Card icon={<img src={ExpertIcon} />} text={"Expert advice"} />
                                    </div>
                              </h5>
                        </div>
                        <Carousel images={images} />
                  </div>

                  <div className="mx-auto text-center">
                        <h3 className="font-bold">We are committed to...</h3>
                        <div className="grid grid-cols-4 gap-52 mx-auto my-8 w-min">
                              <Card icon={<img src={SustainabilityIcon} />} text={"Sustainability"} />
                              <Card icon={<img src={CommunityIcon} />} text={"Community"} />
                              <Card icon={<img src={EducationIcon} />} text={"Education"} />
                        </div>
                        <h3>Visit our store today!</h3>
                  </div>
            </div>
      );
}

export default Home;
