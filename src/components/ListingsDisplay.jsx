import React from "react";

export default function ListingsDisplay({ listings }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {listings.map(listing => (
        <div key={listing.id} className="border rounded p-4 bg-white shadow">
          <img src={listing.image} alt={listing.title} className="w-full h-32 object-cover rounded mb-2" />
          <h3 className="font-bold">{listing.title}</h3>
          <p>{listing.description}</p>
          <div className="font-semibold text-green-700">{listing.price}</div>
          <div className="mt-2 text-sm">Contact: {listing.contact}</div>
        </div>
      ))}
    </div>
  );
}