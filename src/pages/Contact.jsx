import Clock from "../assets/Clock.svg";
import Location from "../assets/Location.svg";
import Location2 from "../assets/Location-alt.svg";
import Mail from "../assets/mail.svg";
import Mail2 from "../assets/mail-alt.svg";
import Phone from "../assets/phone.svg";
import { useState } from "react";

export default function Contact() {
        let date = new Date();
        let [today, setToay] = useState(date.getDay());

        function Schedule() {
                const schedule = new Map([
                        ["Sunday", <span style={{ color: "red" }}>Closed</span>],
                        ["Monday", "10am to 6pm"],
                        ["Tuesday", "10am to 6pm"],
                        ["Wednesday", "10am to 6pm"],
                        ["Thursday", "10am to 6pm"],
                        ["Friday", "10am to 6pm"],
                        ["Saturday", "10am to 6pm"],
                ]);

                return (
                        <table style={{ lineHeight: "1.5" }}>
                                <tbody>
                                        {Array.from(schedule.keys()).map((day, index) => (
                                                <tr style={{ fontWeight: index != today ? "400" : "600" }}>
                                                        <td>{day}</td>
                                                        <td>{schedule.get(day)}</td>
                                                </tr>
                                        ))}
                                </tbody>
                        </table>
                );
        }

        return (
                <div className="hero tall-padding">
                        <br />
                        <br />
                        <h1> Contact us today:</h1>
                        <br />
                        <h4 style={{ lineHeight: "2" }}>
                                <table>
                                        <tbody>
                                                <tr>
                                                        <td>
                                                                <img src={Location} width={"24px"} />
                                                        </td>
                                                        <td>3825 W 11th Ave, Ste 1, Eugene, OR 97402</td>
                                                </tr>
                                                <tr>
                                                        <td>
                                                                <img src={Mail2} width={"24px"} />
                                                        </td>
                                                        <td> egandhcenter@gmail.com </td>
                                                </tr>
                                                <tr>
                                                        <td>
                                                                <img src={Phone} width={"24px"} />
                                                        </td>
                                                        <td>(541) 653 - 8459</td>
                                                </tr>
                                                <tr>
                                                        <td>
                                                                <img src={Clock} width={"24px"} />
                                                        </td>
                                                        <td>
                                                                <Schedule />
                                                        </td>
                                                </tr>
                                        </tbody>
                                </table>
                        </h4>
                </div>
        );
}
