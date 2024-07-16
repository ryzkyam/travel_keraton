import React from 'react';

const flights = [
  {
    name: 'Garuda Indonesia',
    route: 'Jakarta - Bali',
    price: 'Rp.1.200.000',
    imageUrl: 'https://example.com/flight-image-1.jpg', // Ganti dengan URL gambar yang sesuai
    description: 'Garuda Indonesia offers a premium flying experience with excellent service and modern amenities.',
    facilities: ['In-Flight Entertainment', 'Wi-Fi', 'Meals Included', 'Reclining Seats']
  },
  {
    name: 'AirAsia',
    route: 'Jakarta - Singapore',
    price: 'Rp.800.000',
    imageUrl: 'https://example.com/flight-image-2.jpg', // Ganti dengan URL gambar yang sesuai
    description: 'AirAsia provides a budget-friendly flying experience with reliable service and essential amenities.',
    facilities: ['In-Flight Entertainment', 'Wi-Fi', 'Meals Available', 'Reclining Seats']
  },
  {
    name: 'Lion Air',
    route: 'Surabaya - Kuala Lumpur',
    price: 'Rp.900.000',
    imageUrl: 'https://example.com/flight-image-3.jpg', // Ganti dengan URL gambar yang sesuai
    description: 'Lion Air offers a comfortable and affordable flying experience with good service and amenities.',
    facilities: ['In-Flight Entertainment', 'Wi-Fi', 'Meals Available', 'Reclining Seats']
  },
  {
    name: 'Garuda Indonesia',
    route: 'Jakarta - Bali',
    price: 'Rp.1.200.000',
    imageUrl: 'https://example.com/flight-image-1.jpg', // Ganti dengan URL gambar yang sesuai
    description: 'Garuda Indonesia offers a premium flying experience with excellent service and modern amenities.',
    facilities: ['In-Flight Entertainment', 'Wi-Fi', 'Meals Included', 'Reclining Seats']
  },
  {
    name: 'AirAsia',
    route: 'Jakarta - Singapore',
    price: 'Rp.800.000',
    imageUrl: 'https://example.com/flight-image-2.jpg', // Ganti dengan URL gambar yang sesuai
    description: 'AirAsia provides a budget-friendly flying experience with reliable service and essential amenities.',
    facilities: ['In-Flight Entertainment', 'Wi-Fi', 'Meals Available', 'Reclining Seats']
  },
  {
    name: 'Lion Air',
    route: 'Surabaya - Kuala Lumpur',
    price: 'Rp.900.000',
    imageUrl: 'https://example.com/flight-image-3.jpg', // Ganti dengan URL gambar yang sesuai
    description: 'Lion Air offers a comfortable and affordable flying experience with good service and amenities.',
    facilities: ['In-Flight Entertainment', 'Wi-Fi', 'Meals Available', 'Reclining Seats']
  },
];

const FlightCard = ({ name, route, price, imageUrl, description, facilities = [] }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 m-4 w-full md:w-1/3 lg:w-1/4">
    <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-4">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-500">{route}</p>
      <p className="text-lg font-semibold text-gray-900">{price}</p>
      <p className="text-sm text-gray-700 mb-4">{description}</p>
      {facilities.length > 0 && (
        <>
          <h4 className="text-md font-bold">Facilities:</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
            {facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
        </>
      )}
      <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg">
        <a href="/FormBook">Book Now</a>
      </button>
    </div>
  </div>
);

function Flights() {
  return (
    <div className="flex flex-wrap justify-center">
      {flights.map((flight, index) => (
        <FlightCard
          key={index}
          name={flight.name}
          route={flight.route}
          price={flight.price}
          imageUrl={flight.imageUrl}
          description={flight.description}
          facilities={flight.facilities}
        />
      ))}
    </div>
  );
}

export default Flights;
