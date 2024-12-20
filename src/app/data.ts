export const FLIGHTS = [
    { id: 1, flightNo: 'W61283', origin: 'Tel Aviv', destination: 'Krakow', date: '2024-12-12', seats: 200 },
    { id: 2, flightNo: 'LX8396', origin: 'Larnaca', destination: 'Zurich', date: '2024-12-15', seats: 150 },
  ];
  
  export const DESTINATIONS = [
    { code: 'TLV', name: 'Tel Aviv', airportName: 'Ben Gurion', website: 'https://www.iaa.gov.il/en/' },
    { code: 'JFK', name: 'New York', airportName: 'JFK International', website: 'https://www.jfkairport.com/' },
  ];
  
  export const BOOKINGS = [
    {
      id: 1,
      origin: 'Tel Aviv',
      destination: 'Krakow',
      date: '2024-12-12',
      passengers: [{ name: 'John Doe', passport: '123456' }],
    },
  ];
  