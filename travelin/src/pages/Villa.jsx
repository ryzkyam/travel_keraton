import React from 'react';

const villas = [
  {
    name: 'Villa Serene',
    location: 'Bali',
    price: 'Rp.2.500.000',
    imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.tI1LVu9AWYn00tnT-3SDlwHaEK?rs=1&pid=ImgDetMain', // Ganti dengan URL gambar yang sesuai
    description: 'Villa Serene offers a luxurious and peaceful stay with beautiful views and top-notch amenities, perfect for a relaxing getaway.',
    facilities: ['Swimming Pool', 'Free Wi-Fi', 'Breakfast Included', 'Air Conditioning']
  },
  {
    name: 'Villa Paradise',
    location: 'Lombok',
    price: 'Rp.3.000.000',
    imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.jAWfjDG-Kn97l4w4q62mjQHaEz?w=278&h=180&c=7&r=0&o=5&pid=1.7', // Ganti dengan URL gambar yang sesuai
    description: 'Villa Paradise provides a perfect blend of comfort and elegance with stunning ocean views and modern facilities.',
    facilities: ['Swimming Pool', 'Free Wi-Fi', 'Breakfast Included', 'Air Conditioning']
  },
  {
    name: 'Villa Harmony',
    location: 'Canggu',
    price: 'Rp.3.200.000',
    imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.IUHAwL-MYcyxLqLkufvOvQHaFj?pid=ImgDet&w=186&h=139&c=7', // Ganti dengan URL gambar yang sesuai
    description: 'Villa Harmony provides a perfect escape with luxurious interiors and beautiful landscapes, perfect for a relaxing vacation.',
    facilities: ['Swimming Pool', 'Free Wi-Fi', 'Breakfast Included', 'Air Conditioning']
  },
  {
    name: 'Villa Harmony1',
    location: 'Canggu',
    price: 'Rp.3.200.000',
    imageUrl: 'https://2.bp.blogspot.com/-sQrc8kaO-rU/W7XAwYfIRvI/AAAAAAAAQqA/_D6ZdGmK4sEc_YQzpDrkAdDkOuewp5xwACLcBGAs/s1600/Vila%2BMerah%2BSukawana%2BBandung.JPG', // Ganti dengan URL gambar yang sesuai
    description: 'Villa Harmony provides a perfect escape with luxurious interiors and beautiful landscapes, perfect for a relaxing vacation.',
    facilities: ['Swimming Pool', 'Free Wi-Fi', 'Breakfast Included', 'Air Conditioning']
  },
  {
    name: 'Villa Harmony2',
    location: 'Canggu',
    price: 'Rp.3.200.000',
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.d-ZelrbRkoa6QDzaD8OFjQHaDt?w=306&h=175&c=7&r=0&o=5&pid=1.7', // Ganti dengan URL gambar yang sesuai
    description: 'Villa Harmony provides a perfect escape with luxurious interiors and beautiful landscapes, perfect for a relaxing vacation.',
    facilities: ['Swimming Pool', 'Free Wi-Fi', 'Breakfast Included', 'Air Conditioning']
  },
];

const VillaCard = ({ name, location, price, imageUrl, description, facilities = [] }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 m-4 w-full md:w-1/3 lg:w-1/4">
    <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-4">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-500">{location}</p>
      <p className="text-lg font-semibold text-gray-900">{price}</p>
      <p className="text-sm text-gray-500 mb-2">Capacity: 30 org</p>
      <p className="text-sm text-gray-700 mb-4">{description}</p>
      {facilities.length > 0 && (
        <>
          <h4 className="text-md font-bold">Main Facilities:</h4>
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

function Villa() {
  return (
    <div className="flex flex-wrap justify-center">
      {villas.map((villa, index) => (
        <VillaCard
          key={index}
          name={villa.name}
          location={villa.location}
          price={villa.price}
          imageUrl={villa.imageUrl}
          description={villa.description}
          facilities={villa.facilities}
        />
      ))}
    </div>
  );
}

export default Villa;
