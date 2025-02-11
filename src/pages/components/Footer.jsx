import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";

export default function Footer() {
      return (
            <div className="bg-gray-700 text-gray-200 py-8 flex flex-col items-center bottom-0 w-full">
                  <div className="flex justify-evenly w-full">
                        <a href="https://www.facebook.com/eugenegardenandharvest/" target="_blank">
                              <img src={Facebook} className="w-12 h-12" />
                        </a>
                        <a href="https://www.instagram.com/eugene.garden.harvest" target="_blank">
                              <img src={Instagram} className="w-12 h-12" />
                        </a>
                  </div>
                  <div className="italic text-sm">Copyright 2024 Eugene Garden & Harvest</div>
            </div>
      );
}
