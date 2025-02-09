import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";

export default function Footer() {
      return (
            <div className="bg-[#545454] text-white py-12 px-1/4 flex flex-col items-center">
                  <div className="flex justify-evenly w-full">
                        <a
                              href="https://www.facebook.com/eugenegardenandharvest/"
                              target="_blank"
                              className="text-white hover:text-gray-200"
                        >
                              <img src={Facebook} className="w-6 h-6" />
                        </a>
                        <a
                              href="https://www.instagram.com/eugene.garden.harvest"
                              target="_blank"
                              className="text-white hover:text-gray-200"
                        >
                              <img src={Instagram} className="w-6 h-6" />
                        </a>
                  </div>
                  <div className="mt-4">Copyright 2024 Eugene Garden & Harvest.</div>
            </div>
      );
}
