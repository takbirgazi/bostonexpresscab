"use client";
import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import RentsCard from "./RentsCard/RentsCard";
import { useEffect, useState } from "react";

const Rents = () => {
    const SectionHeaderData = {
        heading: "Our Vehicles",
        description: "Here is a list of our vehicles. We maintain a fleet a comfortable luxury minivans suitable for upto 7 passengers. We will be adding more vehicles to our fleet soon.",
    };
    const [rentCars, setRentCars] = useState([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_API_2}/cars`)
            .then(response => response.json())
            .then(data => {
                setRentCars(data);
            })
            .catch(error => {
                console.error('Error fetching car data:', error);
            });
    }, [])

    return (
        <div className="py-2 pb-12">
            <div className="w-full md:max-w-xl mx-auto">
                <SectionHeader headerInfo={SectionHeaderData} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {
                    rentCars.map((car, ind) => (
                        <RentsCard key={ind} rentCardData={car} />
                    ))
                }
            </div>
        </div>
    );
};

export default Rents;