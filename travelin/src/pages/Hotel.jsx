import React from 'react';

const hotels = [
  {
    name: 'Hotel Elegance',
    location: 'Jakarta',
    price: 'Rp.1.800.000',
    imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.OVyU3AmKzYr9S-QLFYZ27gHaE8?w=247&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7', 
    description: 'Hotel Elegance offers a luxurious stay with modern amenities and excellent service, centrally located for easy access to city attractions.',
    facilities: ['Spa', 'Gym', 'Free Wi-Fi', 'Buffet Breakfast']
  },
  {
    name: 'Grand Resort Hotel',
    location: 'Bali',
    price: 'Rp.2.500.000',
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.LnRFVxB9JoLQDL2PO323WwHaFj?pid=ImgDet&w=182&h=136&c=7&dpr=1,1', 
    description: 'Grand Resort Hotel provides a blend of comfort and style with breathtaking beachfront views and world-class facilities.',
    facilities: ['Beachfront', 'Swimming Pool', 'Free Wi-Fi', 'Fine Dining']
  },
  {
    name: 'Mountain View Hotel',
    location: 'Bandung',
    price: 'Rp.1.200.000',
    imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.q01MRN5N3TFNFQFKGl2yugHaE8?w=273&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7', 
    description: 'Mountain View Hotel offers a serene retreat surrounded by nature, with cozy rooms and access to hiking trails.',
    facilities: ['Mountain Views', 'Restaurant', 'Free Parking', 'Fitness Center']
  },
  {
    name: 'Mares',
    location: 'Bandung',
    price: 'Rp.1.200.000',
    imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.gsOqJgxHU6Y9T50Li2zu4gHaFj?w=243&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7', 
    description: 'Mountain View Hotel offers a serene retreat surrounded by nature, with cozy rooms and access to hiking trails.',
    facilities: ['Mountain Views', 'Restaurant', 'Free Parking', 'Fitness Center']
  },
  {
    name: 'Saladine',
    location: 'Bandung',
    price: 'Rp.1.200.000',
    imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.q01MRN5N3TFNFQFKGl2yugHaE8?w=273&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7', 
    description: 'Mountain View Hotel offers a serene retreat surrounded by nature, with cozy rooms and access to hiking trails.',
    facilities: ['Mountain Views', 'Restaurant', 'Free Parking', 'Fitness Center']
  },
  {
    name: 'Mountain 2',
    location: 'Bandung',
    price: 'Rp.1.200.000',
    imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.gsOqJgxHU6Y9T50Li2zu4gHaFj?w=243&h=182&c=7&r=0&o=5&dpr=1.1&pid=1.7', 
    description: 'Mountain View Hotel offers a serene retreat surrounded by nature, with cozy rooms and access to hiking trails.',
    facilities: ['Mountain Views', 'Restaurant', 'Free Parking', 'Fitness Center']
  },
  
];

const HotelCard = ({ name, location, price, imageUrl, description, facilities = [] }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 m-4 w-full md:w-1/3 lg:w-1/4">
    <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-4">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-500">{location}</p>
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

function Hotel() {
  return (
    <div className="flex flex-wrap justify-center">
      {hotels.map((hotel, index) => (
        <HotelCard
          key={index}
          name={hotel.name}
          location={hotel.location}
          price={hotel.price}
          imageUrl={hotel.imageUrl}
          description={hotel.description}
          facilities={hotel.facilities}
        />
      ))}
    </div>
  );
}

export default Hotel;
