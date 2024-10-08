import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();

  // Correct useQuery syntax in v5
  const { data, isLoading, error } = useQuery({
    queryKey: ["details", id],
    queryFn: () => fetchPet(id),
  });

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">⏹️</h2>
      </div>
    );
  }

  if (error) {
    return <div>Error loading details...</div>;
  }

  console.log(data); // Log data to check the structure

  const pet = data?.pets?.[0]; // Adjust based on the structure of the data

  if (!pet) {
    return <div>No pet found</div>; // Handle cases where pet is undefined
  }

  return (
    <div className="details">
      <h2>{id}</h2>
      <h2>{pet.name}</h2>
      <h2>
        {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
      </h2>
      <p>{pet.description}</p>
    </div>
  );
};

export default Details;
