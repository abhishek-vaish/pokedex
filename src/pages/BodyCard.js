import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../styles/BodyCard.css";

const BodyCard = () => {
  const [apiFetchData, setApiFetchData] = useState({
    data: [],
    loading: true,
    error: false,
  });
  const limitURL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
  const apiURL = "https://pokeapi.co/api/v2/pokemon";
  const dataArray = new Array();

  const fetchNames = async () => {
    await fetch(limitURL)
      .then((jsonData) => jsonData.json())
      .then((results) =>
        results.results.forEach((data) => {
          fetch(apiURL + `/${data.name}`)
            .then((pokemonData) => pokemonData.json())
            .then((data) => dataArray.push(data))
            .then(() =>
              setApiFetchData({
                ...apiFetchData,
                data: dataArray.sort((a, b) => a.id > b.id),
                loading: false,
              })
            )
            .catch((err) =>
              setApiFetchData({
                ...apiFetchData,
                error: true,
                loading: false,
              })
            );
        })
      );
  };

  useEffect(() => {
    fetchNames();
  }, []);

  return (
    <div className="body">
      <div className="card__body">
        {apiFetchData.loading ? (
          <p>Loading</p>
        ) : (
          apiFetchData.data.map((entries, index) => (
            <Card
              key={index}
              type={entries.types[0].type.name}
              id={entries.id}
              name={entries.name}
              image={entries.sprites.other.dream_world.front_default}
              height={entries.height}
              weight={entries.weight}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BodyCard;
