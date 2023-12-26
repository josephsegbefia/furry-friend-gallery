import React, { useState, useEffect } from "react";
import DogCardInfo from "./DogInfoCard";
import './App.css';


const loadDogPictures = async (dogsToLoad = 8) => {
  const apiBaseUrl = "https://dog.ceo/api/breeds/image/random";
  const response = await fetch(`${apiBaseUrl}${dogsToLoad}`);
  const data = await response?.json();

  const dogData = data.message.map(item => {
    let breed = item.replace("https://", "").split("/")[2];

    if (breed && breed !== ""){
      breed = breed.split("-").reverse().join(" ");
    }
    return {
      id: `dog_pic_${data.message.indexOf(item)}`,
      imgUrl: item,
      breed
    }
  })

  return dogData;
};

function App() {
  const [dogPictures, setDogPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numOfDogs, setNumOfDogs] = useState("");
  const [totalDogsSearched, setTotalDogsSearched] = useState(0);

  const handleSubmit = async(event) => {
    event.preventDefault();
    setIsLoading(true);
    setDogPictures(await loadDogPictures(numOfDogs));
    setIsLoading(false);
  }

  useEffect(() => {
    setTotalDogsSearched(totalDogs => totalDogs + dogPictures.length);
  }, [dogPictures])


  useEffect(() => {
    (async () => {
      setIsLoading(loading => !loading);
      const dogPictureData = await loadDogPictures();
      setDogPictures(dogDataArray => [...dogPictureData]);
      setIsLoading(loading => !loading);
    })();
  }, [])
  return (
    <>
      <h1>Welcome to furry friends gallery</h1>
    </>
  );
}

export default App;
