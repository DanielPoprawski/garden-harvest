import Carousel from "react-bootstrap/Carousel";
import CommunityIcon from "/src/assets/community.svg";
import EducationIcon from "/src/assets/education.svg";
import EquipmentIcon from "/src/assets/equipment.svg";
import ExpertIcon from "/src/assets/expert.svg";
import HydroponicsIcon from "/src/assets/hydroponics.svg";
import PlantIcon from "/src/assets/plants.svg";
import SustainabilityIcon from "/src/assets/sustainability.svg";
import Card from "./components/Card";

function Home() {
        return (
                <div className="hero">
                        <div style={{ display: "flex", flexWrap: "none" }}>
                                <div style={{ paddingRight: "3rem" }}>
                                        <h1>
                                                <b>Eugene Garden & Harvest Center</b>
                                        </h1>
                                        <br />
                                        <h5>
                                                Thank you for choosing Eugene Garden & Harvest! Whether you're a
                                                seasoned gardener or just starting out, we're here to support your
                                                journey. We offer a wide selection of:
                                                <br />
                                                <br />
                                                <div className="grid gallery" style={{ width: "min-content" }}>
                                                        <Card
                                                                icon={<img src={PlantIcon} />}
                                                                text={"High-quality plants"}
                                                        />
                                                        <Card
                                                                icon={<img src={EquipmentIcon} />}
                                                                text={"Gardening supplies"}
                                                        />
                                                        <Card
                                                                icon={<img src={HydroponicsIcon} />}
                                                                text={"Hydroponics "}
                                                        />
                                                        <Card icon={<img src={ExpertIcon} />} text={"Expert advice"} />
                                                </div>
                                        </h5>
                                </div>
                                <Carousel fade variant="white-text-black-shadow">
                                        <Carousel.Item>
                                                <img src="src\assets\StockImage1.webp" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                                <img src="src\assets\StockImage2.webp" />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                                <img src="src\assets\StockImage3.webp" />
                                        </Carousel.Item>
                                </Carousel>
                        </div>
                        <br />
                        <div style={{ margin: "0 auto", alignContent: "center", textAlign: "center" }}>
                                <h3>
                                        <b>We are committed to...</b>
                                </h3>
                                <div className="grid gallery card-deck">
                                        <Card icon={<img src={SustainabilityIcon} />} text={"Sustainability"} />
                                        <Card icon={<img src={CommunityIcon} />} text={"Community"} />
                                        <Card icon={<img src={EducationIcon} />} text={"Education"} />
                                </div>
                                <h3> Visit our store today! </h3>
                        </div>
                </div>
        );
}

export default Home;
