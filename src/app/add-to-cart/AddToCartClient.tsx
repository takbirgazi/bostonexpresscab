"use client"
import { BookingTypes } from "@/components/BookingComponents/BookingTypes";
import Charges from "@/components/BookingComponents/Charges/Charges";
import TripSummary from "@/components/BookingComponents/TripSummary/TripSummary";
import RentsCard from "@/components/HomeComponents/Rents/RentsCard/RentsCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
    FaPlaneDeparture,
    FaUser,
    FaPhone,
    FaEnvelope,
} from 'react-icons/fa';

const AddToCartClient = () => {
    const [isTraveler, setIsTraveler] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [rentCars, setRentCars] = useState([]);
    const [route, setRoute] = useState<string | null>(null);
    const [bookingData, setBookingData] = useState<BookingTypes>({
        uuid: '',
        date: '',
        time: '',
        luggage: '',
        passenger: '',
        children: '',
        selected_location: '',
        pickup_address: '',
        dropoff_address: '',
        from_airport: '',
        to_airport: '',
        vehicle_name: '',
        distance: '',
        night_charge: '',
        total_fare: '',
        luggage_charge: '',
        extra_toll: '',
        airport_toll: '',
        parking_toll: '',
        gratuity: '',
        gratuity_percentage: '',
        airport_parking_toll: '',
        hidden_night_charge: '',
        rush_hour_charge: '',
        extra_luggage: '',
        stop_over_charge: '',
        bike_charge: '',
        snow_strom_charge: '',
        distance_fare: '',
        discountAmount: '',
        fare_after_discount: '',
        cash_discount_percentage: '',
        extra_charge_of_city: '',
        extra_toll_of_city: '',
        additional_travel_detail: {
            extraSeatFare: '',
            totalPetsFare: '',
            below_24_month_seat_number: 0,
            five_yrs_to_eight_yrs_seat_number: 0,
            two_yrs_to_five_yrs_seat_number: 0
        },
        minimum_fare: ''
    })

    const [formData, setFormData] = useState({
        uuid: "",
        travel_detail_id: 1,
        passenger_name: '',
        email: '',
        airline_name: '',
        flight_no: '',
        phone: '',
        alternate_phone: '',
        mailing_address: '',
        special_needs: ''
    });

    // Set route from localStorage on client side
    useEffect(() => {
        if (typeof window !== "undefined") {
            const currentUser = localStorage.getItem("currentUser");
            setRoute(currentUser);
            setFormData(prev => ({
                ...prev,
                uuid: currentUser || ""
            }));
        }
    }, []);

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


    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_API}/travel-details/${route}`)
            .then(res => res.json())
            .then(data => {
                setBookingData(data);
                console.log(data)
            })
    }, [route]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log("formData", formData)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/bookings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data)
            // setIsModalOpen(true);
            window.location.href = `${process.env.NEXT_PUBLIC_PAYMENT_API}?user=${route}` as string;
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Please try again');
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#ffffff]">
            <div className='h-[90px] bg-gray-700'></div>
            <div className="max-w-7xl mx-auto space-y-10 py-10 px-4 md:px-10">
                {/* Title */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900">Booking Summary</h1>
                    <p className="text-gray-500 mt-2">Confirm your travel and payment details</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Booking Form */}
                    <div className='lg:col-span-2'>
                        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 space-y-6 border-t-[6px] border-mainColor">
                            <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-2">
                                <h2 className="text-xl w-full font-semibold text-gray-800">Passenger Details</h2>
                                <div className="flex flex-col w-full md:flex-row md:gap-4 text-sm text-gray-600">
                                    <label className="flex md:items-center gap-1">
                                        <input
                                            type="radio"
                                            checked={isTraveler}
                                            onChange={() => setIsTraveler(true)}
                                        />
                                        I&apos;m the traveler
                                    </label>
                                    <label className="flex md:items-center gap-1">
                                        <input
                                            type="radio"
                                            checked={!isTraveler}
                                            onChange={() => setIsTraveler(false)}
                                        />
                                        I&apos;m booking for someone else
                                    </label>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {[
                                    { name: 'passenger_name', icon: <FaUser />, label: 'Passenger Name', required: true },
                                    { name: 'email', icon: <FaEnvelope />, label: 'Email', required: true },
                                    ...((bookingData.selected_location === 'from_airport' || bookingData.selected_location === 'to_airport')
                                        ? [{ name: 'airline_name', icon: <FaPlaneDeparture />, label: 'Airline Name', required: bookingData.selected_location === 'to_airport' ? false : true }, { name: 'flight_no', icon: <FaPlaneDeparture />, label: 'Flight No.', required: bookingData.selected_location === 'to_airport' ? false : true },]
                                        : []),
                                    { name: 'phone', icon: <FaPhone />, label: 'Phone', required: true },
                                    { name: 'alternate_phone', icon: <FaPhone />, label: 'Alternate Phone', required: false },
                                ].map(({ name, icon, label, required }) => (
                                    <div key={name} className="relative">
                                        <label className="text-sm text-gray-700 block mb-1">
                                            {label} {required && <span className='text-red-600'>*</span>}
                                        </label>
                                        <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 bg-white">
                                            <span className="text-mainColor">{icon}</span>
                                            <input
                                                type="text"
                                                name={name}
                                                value={formData[name as keyof typeof formData]}
                                                onChange={handleInputChange}
                                                placeholder={`Enter ${(label ?? '').toLowerCase()}`}
                                                className="w-full focus:outline-none"
                                                required={required}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <label className="text-sm text-gray-700 block mb-1">Mailing Address</label>
                                <textarea
                                    name="mailing_address"
                                    value={formData.mailing_address}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-lg p-3"
                                    rows={2}
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-700 block mb-1">Special Needs</label>
                                <textarea
                                    name="special_needs"
                                    value={formData.special_needs}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-lg p-3"
                                    rows={2}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-5 w-full mt-6 bg-mainColor hover-bg-mainColor cursor-pointer text-white font-semibold py-3 rounded-md text-lg transition-all disabled:opacity-50"
                            >
                                {isSubmitting ? 'Processing...' : 'Continue to Payment'}
                            </button>
                        </form>
                    </div>

                    {/* Summary Card - remains the same */}
                    <div className="space-y-6">
                        <TripSummary bookingData={bookingData} />
                        <Charges bookingData={bookingData} />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                    {
                        rentCars.map((car, ind) => (
                            <RentsCard key={ind} rentCardData={car} />
                        ))
                    }
                </div>
            </div>
        </main>
    );
};

export default AddToCartClient;