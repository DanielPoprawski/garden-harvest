import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import descriptionsData from "../assets/gallery_images/descriptions.json";

const images = Object.values(import.meta.glob("../assets/gallery_images/*.{webp,jpg,jpeg,png}", { eager: true })).map(
        (module) => module.default
);
export default function Gallery() {
        const [descriptions, setDescriptions] = useState(["Description 1", "Description 2", "Description 3"]);
        const noDescription = <i>No description</i>;

        useEffect(() => {
                setDescriptions(descriptionsData);
        }, []);
        return (
                <div className="hero grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                        {images.map((image, index) => (
                                <Card key={index}>
                                        <Card.Img src={image} />
                                        <Card.Body>
                                                <Card.Text>{descriptions[index] || noDescription}</Card.Text>
                                        </Card.Body>
                                </Card>
                        ))}
                </div>
        );
}
