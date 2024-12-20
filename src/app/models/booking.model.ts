export interface Booking {
    id: number;
    origin: string;
    destination: string;
    date: string;
    passengers: { name: string; passport: string }[];
  }
  