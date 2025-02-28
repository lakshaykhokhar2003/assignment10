"use client"

import Image from "next/image";
import Form from "@/components/Form";
import {features, images} from "@/lib/utils";
import Link from "next/link";
import StarRatings from 'react-star-ratings';
import {useEffect, useState} from "react";
import Loader from "@/components/Loader";
import Carousel from "@/components/Carousel";
import {useMediaQuery} from "react-responsive";

export default function Home() {
    const isLargeScreen= useMediaQuery({minWidth: 1250, maxWidth: 1716});
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return <Loader/>;
    const rating = 4.8;
    return (
        <div
            className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat max-xl:bg-[#e6f4eb] divBackground">
            <Carousel/>
            <div
                className={`relative overflow-hidden bg-[#e6f4eb] p-8 rounded-md flex flex-row gap-10 justify-evenly text-wrap ${isLargeScreen ? 'max-w-[70%]' : 'max-w-[55%]'} w-full h-auto max-2xl:max-w-[80%] max-xl:max-w-none max-xl:flex-col max-xl:h-screen max-xl:gap-4 max-sm:h-full max-sm:p-4 max-sm:rounded-none`}>
                <div className="rounded-md p-6 flex-1 flex flex-col justify-evenly break-words max-sm:p-2">
                    <div className="flex flex-row items-center gap-2 p-2 rounded-md bg-white w-fit">
                        <Image src={"/google-original.svg"} alt="star" width={100} height={100} className="w-7 h-7"/>
                        <StarRatings
                            rating={rating}
                            starRatedColor="#E6A53B"
                            starEmptyColor="A3A3A3"
                            starSpacing="2px"
                            starDimension="25px"
                            numberOfStars={5}
                            name="rating"
                        />
                        <span className="text-secondary">({rating}/5.0)</span>
                    </div>
                    <h1 className="font-semibold text-5xl max-2xl:text-3xl">
                        Small warehouse space for rent in
                        <span className="text-primary"> Upper West Side, Atlanta, GA</span>
                    </h1>
                    <div className="font-roboto text-secondary flex flex-col justify-center gap-4 py-4">
                        {features.map((feature) => (
                            <div key={feature.title} className="flex flex-row items-center gap-2">
                                <Image src={feature.icon} alt={feature.icon} width={100} height={100}
                                       className="w-9 h-9 rounded-md bg-white p-2"/>
                                <div className="flex flex-col">
                                    <h2 className="text-lg font-bold m-0 p-0">{feature.title}</h2>
                                    <p className="text-sm m-0 p-0">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row gap-4 max-sm:hidden">
                        {images.map((image, index) => (
                            <Image key={index} src={`${image}`} alt={image} width={400} height={400}
                                   className="w-25 rounded-md max-2xl:w-20 max-xl:w-30"/>
                        ))}
                    </div>
                    <h3 className="font-roboto text-primary font-bold py-6 max-sm:text-lg">
                        200-2,000 sq ft starting as low as $625/month
                    </h3>
                </div>
                <div className="bg-white rounded-md p-6 flex-1 flex flex-col justify-evenly break-words">
                    <h1 className="font-semibold text-3xl mb-2 max-sm:text-2xl max-sm:text-center">
                        Visit for an in-person tour
                    </h1>
                    <div className="flex flex-row gap-4 my-2 max-sm:flex-col max-sm:items-center">
                        <div className="relative flex flex-row max-w-25 w-full">
                            <Image src="/person1.jpg" alt="person1" width={100} height={100}
                                   className="rounded-full w-14 h-14"/>
                            <Image src="/person2.jpg" alt="person2" width={100} height={100}
                                   className="rounded-full w-14 h-14 absolute right-0 z-5"/>
                        </div>
                        <p className="text-secondary max-sm:text-center">
                            Cashana or Khadijah will answer your questions and find you a space that meets your needs.
                            <span className="italic"> No commitment necessary!</span>
                        </p>
                    </div>
                    <Form/>
                    <h4 className="text-secondary text-left">
                        Questions? Give us a call:
                        <Link href="#" className="text-primary underline">
                            415-985-0940
                        </Link>
                    </h4>
                    <div>
                        <h4 className="bg-[#e6f4eb] text-secondary text-left inline-block mt-6 px-4 py-1 rounded-full">
                            Looking for a job? <Link href="#" className="underline">Click here!</Link>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
