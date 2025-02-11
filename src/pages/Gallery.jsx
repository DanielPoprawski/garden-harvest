import React, { useState, useEffect } from "react";
import descriptions from "../assets/gallery_images/descriptions.json";

const images = Object.values(import.meta.glob("../assets/gallery_images/*.{webp,jpg,jpeg,png}", { eager: true })).map(
      (module) => module.default
);

export default function Gallery() {
      return (
            <div className="flex-col columns-2 p-10 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-48 2xl:mx-72 min-h-screen">
                  {images.map((image, index) => (
                        <div
                              key={index}
                              className="sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl rounded-lg overflow-hidden shadow-lg mb-10 mx-5"
                        >
                              <img src={image} className="border-x-1 border-t-1 border-gray-500" />
                              <p className="bg-gray-200 py-4 px-6 text-gray-700 italic text-lg font-light border-gray-400 border-t-0 border-1 rounded-b-lg">
                                    {descriptions[index] || <i>No description</i>}
                              </p>
                        </div>
                  ))}
            </div>
      );
}
