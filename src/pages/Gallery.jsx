import Card from "react-bootstrap/Card";

// TODO: Map over every image in the gallery to create a card for each image
// TODO: Add real images ( get them from Reed)

export default function Gallery() {
        return (
                <div className="hero grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                        <Card>
                                <Card.Img src="src\assets\StockImage1.webp" />
                                <Card.Body>
                                        <Card.Text> Test </Card.Text>
                                </Card.Body>
                        </Card>
                        <Card>
                                <Card.Img src="src\assets\StockImage2.webp" />
                                <Card.Body>
                                        <Card.Text> Test </Card.Text>
                                </Card.Body>
                        </Card>
                        <Card>
                                <Card.Img src="src\assets\StockImage3.webp" />
                                <Card.Body>
                                        <Card.Text> Test </Card.Text>
                                </Card.Body>
                        </Card>
                        <Card>
                                <Card.Img src="src\assets\StockImage3.webp" />
                                <Card.Body>
                                        <Card.Text> Test </Card.Text>
                                </Card.Body>
                        </Card>
                        <Card>
                                <Card.Img src="src\assets\StockImage3.webp" />
                                <Card.Body>
                                        <Card.Text> Test </Card.Text>
                                </Card.Body>
                        </Card>
                        <Card>
                                <Card.Img src="src\assets\StockImage3.webp" />
                                <Card.Body>
                                        <Card.Text> Test </Card.Text>
                                </Card.Body>
                        </Card>
                        <Card>
                                <Card.Img src="src\assets\StockImage3.webp" />
                                <Card.Body>
                                        <Card.Text> Test </Card.Text>
                                </Card.Body>
                        </Card>
                        <Card>
                                <Card.Img src="src\assets\StockImage3.webp" />
                                <Card.Body>
                                        <Card.Text> Test </Card.Text>
                                </Card.Body>
                        </Card>
                </div>
        );
}
