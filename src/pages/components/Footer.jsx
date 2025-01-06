import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";

export default function Footer() {
        return (
                <div className="footer">
                        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <a
                                        href="https://www.facebook.com/eugenegardenandharvest/"
                                        target="_blank"
                                        className="link-light"
                                >
                                        <img src={Facebook} className="svg-style" />
                                </a>
                                <a
                                        href="https://www.instagram.com/eugene.garden.harvest"
                                        target="_blank"
                                        className="link-light"
                                >
                                        <img src={Instagram} className="svg-style" />
                                </a>
                        </div>
                        Copyright 2024 Eugene Garden & Harvest.
                </div>
        );
}
