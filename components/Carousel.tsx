"use client";

import {useState, useEffect} from "react";
import Image from "next/image";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {carouselImage} from "@/lib/utils";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % carouselImage.length);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + carouselImage.length) % carouselImage.length);
    const goToSlide = (index: number) => setActiveIndex(index);

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => nextSlide(), 5000);
        return () => clearInterval(interval);
    }, [activeIndex, isHovered]);

    return (
        <div
            className="relative w-full max-h-[400px] bg-white border border-gray-300 rounded-lg mb-10 hidden max-sm:block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Carousel Wrapper */}
            <div className="relative h-[300px]">
                {carouselImage.map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        width={800}
                        height={400}
                        className={`absolute block w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                            index === activeIndex ? "opacity-100" : "opacity-0"
                        }`}
                        alt={`Slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Thumbnail Wrapper (Half Inside & Half Outside) */}
            <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImage.map((src, index) => (
                    <button key={index} onClick={() => goToSlide(index)} className="relative">
                        <Image
                            src={src}
                            width={200}
                            height={200}
                            className={`cursor-pointer w-[100px] h-full rounded-sm border-2 object-contain transition-all ${
                                index === activeIndex ? "border-[#00AA6C]" : "border-transparent"
                            }`}
                            alt={`Thumbnail ${index + 1}`}
                        />
                    </button>
                ))}
            </div>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 z-30 flex items-center justify-center p-2 bg-white rounded-full cursor-pointer border-1 border-gray-300"
            >
                <ChevronLeft className="w-6 h-6 text-[#00AA6C]"/>
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 z-30 flex items-center justify-center p-2 bg-white rounded-full cursor-pointer border-1 border-gray-300"
            >
                <ChevronRight className="w-6 h-6 text-[#00AA6C]"/>
            </button>
        </div>
    );
};

export default Carousel;
