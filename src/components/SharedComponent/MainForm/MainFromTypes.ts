export type Inputs = {
    date: string;
    time: string;
    luggage: number;
    passengers: number;
    children: number;
    childSeats: number;
    pickup: string;
    pickupInp: string;
    dropoff: string;
    dropoffInp: string;
};

export interface PlaceSelectHandler {
    (placeId: string, description: string): void;
}
export interface AirportList {
    id: number,
    place_id: string,
    name: string
}