import React from "react";
import { useParams } from "react-router-dom";
import { dummyListings } from "../dummyData";
import ListingsDisplay from "../components/ListingsDisplay";

export default function SectionPage() {
  const { section } = useParams();
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 capitalize">{section.replace(/s$/, "")} Listings</h2>
      <ListingsDisplay listings={dummyListings[section]} />
    </div>
  );
}