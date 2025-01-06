import Carousel from "react-bootstrap/Carousel";

function Home() {
        return (
                <>
                        <div className="hero" style={{ display: "flex", flexWrap: "none" }}>
                                <div style={{ paddingRight: "3rem" }}>
                                        <h1>
                                                <b>Eugene Garden & Harvest</b>
                                        </h1>
                                        <br />
                                        <h5>
                                                Thank you for choosing Eugene Garden & Harvest! Whether you're a
                                                seasoned gardener or just starting out, we're here to support your
                                                journey. We offer a wide selection of:
                                                <ul>
                                                        <li>
                                                                High-quality plants: From vibrant flowers and vegetables
                                                                to unique herbs and fruit trees.
                                                        </li>
                                                        <li>
                                                                Gardening supplies: Soil, fertilizers, seeds, tools, and
                                                                everything else you need to cultivate a thriving garden.
                                                        </li>
                                                        <li>
                                                                Hydroponics equipment: Explore the world of hydroponics
                                                                with our expert advice and top-of-the-line systems.
                                                        </li>
                                                        <li>
                                                                Expert advice: Our knowledgeable staff is passionate
                                                                about gardening and ready to answer your questions and
                                                                provide personalized guidance.
                                                        </li>
                                                </ul>
                                                We're committed to:
                                                <ul>
                                                        <li>
                                                                Sustainability: We prioritize eco-friendly practices and
                                                                offer a wide range of organic and sustainable options.
                                                        </li>
                                                        <li>
                                                                Community: We support local growers and foster a vibrant
                                                                gardening community in Eugene.
                                                        </li>
                                                        <li>
                                                                Education: We offer workshops, classes, and resources to
                                                                help you learn and grow.
                                                        </li>
                                                </ul>
                                                Visit our store today and let's grow something amazing together!
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
                </>
        );
}

export default Home;
