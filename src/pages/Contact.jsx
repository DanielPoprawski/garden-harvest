import CookieConsent from "./components/CookieConsent";
import Clock from "/src/assets/clock.svg";
import Location from "/src/assets/Location.svg";
import Mail2 from "/src/assets/mail-alt.svg";
import Phone from "/src/assets/phone.svg";
import { useState, useEffect } from "react";

export default function Contact() {
      let date = new Date();
      let [today, setToday] = useState(date.getDay());

      useEffect(() => {
            window.scrollTo(0, 0);
      }, []);

      function Schedule() {
            const schedule = new Map([
                  ["Sunday", <span style={{ color: "red" }}>Closed</span>],
                  ["Monday", "10am - 6pm"],
                  ["Tuesday", "10am - 6pm"],
                  ["Wednesday", "10am - 6pm"],
                  ["Thursday", "10am - 6pm"],
                  ["Friday", "10am - 6pm"],
                  ["Saturday", "11am - 5pm"],
            ]);

            return (
                  <div className="flex flex-col divide-y divide-gray-300">
                        {Array.from(schedule.keys()).map((day, index) => (
                              <div
                                    className={`flex justify-between gap-10 ${
                                          index === today ? "font-semibold" : "font-normal"
                                    }`}
                                    key={index}
                              >
                                    <div>{day}</div>
                                    <div>{schedule.get(day)}</div>
                              </div>
                        ))}
                  </div>
            );
      }
      return (
            <div className="min-h-screen my-[5%] mx-[10%] flex justify-around">
                  <CookieConsent />
                  <div className="max-w-6xl p-5 rounded-lg">
                        <h1 className="text-7xl font-bold mb-10">Contact us today</h1>
                        <div className="text-3xl flex-col divide-y divide-gray-300">
                              <div className="flex gap-4 py-1">
                                    <img src={Location} className="w-10 h-10" alt="location" />
                                    3825 W 11th Ave, Suite A, Eugene, OR 97402
                              </div>
                              <div className="flex gap-4 py-1">
                                    <img src={Mail2} className="w-10 h-10" alt="email" />
                                    egandhcenter@gmail.com
                              </div>
                              <div className="flex gap-4 py-1">
                                    <img src={Phone} className="w-10 h-10" alt="phone" />
                                    (541) 653 - 8459
                              </div>
                              <div className="flex gap-4 py-1">
                                    <img src={Clock} className="w-10 h-10" alt="phone" />
                                    <Schedule />
                              </div>
                        </div>
                  </div>
                  <div>
                        <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2457.84470850259!2d-123.1529065252831!3d44.048459329471726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c11c27293474ab%3A0x8db15884cecf0887!2sEugene%20Garden%20%26%20Harvest%20Center!5e1!3m2!1sen!2sus!4v1739231278460!5m2!1sen!2sus"
                              width="800"
                              height="600"
                              className="border-0 rounded-lg relative"
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                  </div>
            </div>
      );
}
