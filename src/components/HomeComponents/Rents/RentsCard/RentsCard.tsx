import Image from "next/image";
import { FaCar, FaUser } from "react-icons/fa";
import { RentsCardType } from "./RentsCardType";
import { TfiBag } from "react-icons/tfi";


const RentsCard: React.FC<RentsCardType> = ({ rentCardData }) => {
    return (
        <div className="bg-white shadow-lg rounded-md overflow-hidden border border-gray-300 p-3">
            <figure className="rounded-md overflow-hidden h-52">
                <Image className="hover:scale-105 transition-all h-full duration-300" src={`https://apis.bostonexpresscab.com/${rentCardData.photo}`} alt={rentCardData.car_name} width={600} height={350} />
            </figure>
            <div className="flex flex-col gap-3 border-b border-gray-300 pb-5 m-4">
                <div className="flex justify-between items-center mt-3">
                    <h2 className="text-lg font-semibold text-gray-800">{rentCardData.car_name}</h2>
                    {/* <div className="flex items-center gap-2">
                        <FaHeart className="text-gray-400" />
                        <span className="text-gray-600">{rentCardData.rating}</span>
                    </div> */}
                </div>
                <div className="flex items-center gap-5">
                    <p className="flex items-center gap-2">
                        <FaUser className="text-xs text-mainColor" />
                        <span className="font-medium text-gray-800">{rentCardData.passenger}</span>
                    </p>
                    <p className="flex items-center gap-2">
                        <TfiBag className="text-xs text-mainColor" />
                        <span className="font-medium text-gray-800">{rentCardData.large_luggage + rentCardData.extra_luggage}</span>
                    </p>
                    {/* <p className="flex items-center gap-2">
                        <GiCarDoor className="text-xs text-mainColor" />
                        <span className="font-medium text-gray-800">{rentCardData.extra_luggage}</span>
                    </p> */}
                    <p className="flex items-center gap-2">
                        <FaCar className="text-xs text-mainColor" />
                        <span className="font-medium text-gray-800">{rentCardData.car_color}</span>
                    </p>
                </div>
            </div>
            <div className="flex justify-between items-center m-4">
                <div>
                    {/* <p className="text-gray-600 text-sm font-medium pb-0.5">Color: <span>{rentCardData.carColor}</span></p> */}
                    <h2 className="text-3xl font-semibold font-poppins text-gray-800">$ {rentCardData.minimum_fare}<span className="text-sm font-light text-gray-600">/Mile</span></h2>
                </div>
                <div>
                    <button
                        className="px-4 py-1.5 rounded-sm bg-mainColor text-white font-semibold cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RentsCard;