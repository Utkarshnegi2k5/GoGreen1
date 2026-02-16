import React, { useState } from "react";

export default function ListingForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit({ title, description, price, contact, image });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input className="w-full p-2 border" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea className="w-full p-2 border" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input className="w-full p-2 border" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
      <input className="w-full p-2 border" placeholder="Contact Info" value={contact} onChange={e => setContact(e.target.value)} />
      <input className="w-full p-2 border" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
      <button className="w-full bg-green-600 text-white p-2 rounded" type="submit">Add Listing</button>
    </form>
  );
}