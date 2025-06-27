import Image from "next/image";
import car_1 from "@/assets/images/cars/car_1.jpg";
import trustpilot from "@/assets/images/trustpilot.png";
import tripadvisor from "@/assets/images/tripadvisor.png";
import limotrust from "@/assets/images/limotrust.png";
import google_ratings from "@/assets/images/google_ratings.png";

const HomeContent = () => {
    return (
        <div className="flex flex-col gap-8 py-8">
            <div className="flex flex-col-reverse md:flex-row gap-8">
                <div className="w-full md:w-3/4">
                    <h1 className="text-lg md:text-4xl text-mainColor font-bold font-lato pb-5">Need a Logan airport car & boston taxi? Book Boston Express Cab!</h1>
                    <div className="flex justify-center items-center">
                        <figure>
                            <Image src={car_1} alt="Review" height={80} width={600} />
                        </figure>
                    </div>
                    <div className="py-5 flex flex-col gap-8">
                        {/* Section: Main Service */}
                        <section>
                            <h2 className="text-xl md:text-3xl font-bold font-lato text-mainColor mb-4">Efficient and Reliable Boston Airport Taxi Services</h2>
                            <h3 className="font-bold text-lg mb-2">Stress-Free Airport Transportation with Boston Express Cab</h3>
                            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg font-medium text-gray-700">
                                <li>
                                    <span className="font-semibold">Relaxing Minivan Rides:</span> Travel comfortably with spacious minivans, perfect for families or groups.
                                </li>
                                <li>
                                    <span className="font-semibold">Child Seat Safety:</span> Secure child seats for all ages (infant, toddler, booster) available for a small fee.
                                </li>
                                <li>
                                    <span className="font-semibold">Seamless Pick-Up & Drop-Off:</span> Convenient door-to-door service to Logan Airport.
                                </li>
                                <li>
                                    <span className="font-semibold">24/7 Availability:</span> We’re here whenever you need a ride, day or night.
                                </li>
                            </ul>
                        </section>

                        {/* Section: More Than Just Airport Taxis */}
                        <section>
                            <h3 className="font-bold text-lg mb-2">
                                More Than Just Airport Taxis
                            </h3>
                            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700">
                                <li>
                                    <span className="font-semibold">Explore Boston:</span> City tours and local exploration with our reliable car service.
                                </li>
                                <li>
                                    <span className="font-semibold">Long-Distance Travel:</span> Need a ride to New York, Cape Cod, New Hampshire or beyond? We offer long-distance trips too!</li>
                                <li>
                                    <span className="font-semibold">Special Events:</span> Comfortable transportation for parties, graduations, weddings, and more.
                                </li>
                            </ul>
                        </section>

                        {/* Section: Service Area */}
                        <section>
                            <h3 className="font-bold text-lg mb-2">
                                Serving the Greater Boston Area
                            </h3>
                            <p className="text-base md:text-lg text-gray-700 mb-2">
                                We offer reliable transportation throughout the Boston metro area, including:
                            </p>
                            <div className="text-base md:text-lg text-gray-700 w-full">
                                <ul className="list-disc pl-5 space-y-1 w-full">
                                    <li className="w-full">
                                        <a target="_blank" href="https://bostonexpresscab.com/arlington-taxi-cab-service-9" className="text-mainColor underline font-bold hover:text-black transition-colors duration-200">Arlington</a>,{" "}
                                        <a target="_blank" href="https://bostonexpresscab.com/belmont-ma-taxi-car-rental-8" className="text-mainColor underline font-bold hover:text-black transition-colors duration-200">Belmont</a>,{" "}
                                        Bedford,{" "}
                                        <a target="_blank" href="https://bostonexpresscab.com/taxi-cab-haverhill-ma-25" className="text-mainColor underline font-bold hover:text-black transition-colors duration-200">Haverhill</a>,{" "}
                                        <a target="_blank" href="https://bostonexpresscab.com/worcester-ma-taxi-18" className="text-mainColor underline font-bold hover:text-black transition-colors duration-200">Worcester</a>
                                    </li>
                                    <li className="w-full">
                                        Cambridge,{" "}
                                        Somerville,{" "}
                                        Medford,{" "}
                                        <a target="_blank" href="https://bostonexpresscab.com/taxi-methuen-ma-28" className="text-mainColor underline font-bold hover:text-black transition-colors duration-200">Methuen</a>,{" "}
                                        <a target="_blank" href="https://bostonexpresscab.com/reliable-gloucester-taxi-cab-service-boston-38" className="text-mainColor underline font-bold hover:text-black transition-colors duration-200">Gloucester</a>
                                    </li>
                                    <li className="w-full">
                                        Boston,{" "}
                                        Lexington,{" "}
                                        Waltham,{" "}
                                        <a target="_blank" href="https://bostonexpresscab.com/dependable-reliable-taxi-cab-services-in-nashua-39" className="text-mainColor underline font-bold hover:text-black transition-colors duration-200">Nashua</a>,{" "}
                                        <a target="_blank" href="https://bostonexpresscab.com/boston-chauffeur-service-from-beverly-ma-41" className="text-mainColor underline font-bold hover:text-black transition-colors duration-200">Beverly</a>
                                    </li>
                                    <li className="w-full">
                                        <a target="_blank" href="https://bostonexpresscab.com/stoneham-taxi-cab-logan-airport-46" className="text-mainColor underline font-bold hover:text-black transition-colors duration-200">Stoneham</a>,{" "}
                                        Brookline,{" "}
                                        Jamaica Plain,{" "}
                                        <a target="_blank" href="https://bostonexpresscab.com/logan-airport-taxi-keene-nh-53" className="text-mainColor underline font-bold hover:text-black transition-colors duration-200">Keene</a>
                                    </li>
                                    <li className="w-full">
                                        West Roxbury,{" "}
                                        Burlington,{" "}
                                        <a target="_blank" href="https://bostonexpresscab.com/woburn-ma-taxi-15" className="text-mainColor underline font-bold hover:text-black transition-colors duration-200">Woburn</a>,{" "}
                                        <a target="_blank" href="https://bostonexpresscab.com/andover-ma-airport-taxi-24" className="text-mainColor underline font-bold hover:text-black transition-colors duration-200">Andover</a>
                                    </li>
                                    <li className="w-full">
                                        Winchester,{" "}
                                        Lincoln,{" "}
                                        Reading,{" "}
                                        North Reading
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Section: Booking & Call to Action */}
                        <section className="bg-mainColor/10 rounded-lg flex flex-col gap-3">
                            <h2 className="font-bold text-lg mb-2">
                                Book Your Ride Today!
                            </h2>
                            <ul className="list-disc pl-6 space-y-1 text-base md:text-lg text-gray-800">
                                <li>
                                    <span className="font-semibold">Hassle-Free Booking:</span> Reserve online or call <a href="tel:6172306362" className="text-mainColor underline">617-230-6362</a>.
                                </li>
                                <li>
                                    <span className="font-semibold">Experienced Drivers:</span> Safe and comfortable rides with our professional team.
                                </li>
                                <li>
                                    <span className="font-semibold">Your Trusted Partner:</span> Preferred by businesses in Cambridge and Medford.
                                </li>
                            </ul>

                            <p className="text-base text-gray-700 pt-2">
                                Choose Boston Express Cab for a stress-free and enjoyable travel experience!
                            </p>
                        </section>
                    </div>
                </div>
                <div className="w-full md:w-1/4">
                    <h2 className="text-lg md:text-2xl font-bold font-lato px-6">Ratings on Top Sites</h2>
                    <div className="py-5">
                        <a href="https://g.co/kgs/J6Jpg8S" target="_blank" rel="noopener noreferrer">
                            <figure>
                                <Image src={google_ratings} alt="Google Ratings" height={600} width={800} />
                            </figure>
                        </a>
                        <a href="https://www.trustpilot.com/review/bostonexpresscab.com" target="_blank" rel="noopener noreferrer">
                            <figure>
                                <Image src={trustpilot} alt="Trustpilot Ratings" height={600} width={800} />
                            </figure>
                        </a>
                        <a href="https://www.tripadvisor.com/Attraction_Review-g41948-d28108453-Reviews-Boston_Express_Cab-Woburn_Massachusetts.html" target="_blank" rel="noopener noreferrer">
                            <figure>
                                <Image src={tripadvisor} alt="Tripadvisor Ratings" height={600} width={800} />
                            </figure>
                        </a>
                        <a href="https://limotrust.org/listing/boston-express-cab-60" target="_blank" rel="noopener noreferrer">
                            <figure>
                                <Image src={limotrust} alt="Limotrust Ratings" height={600} width={800} />
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;