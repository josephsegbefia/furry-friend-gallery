import React from "react";

const DogCardInfo = ({ imgUrl, breed }) => {
  return (
    <div className = "card dog-card">
      <div classNAme = "card-image">
      <figure className = "image" style = {{backgroundImage: `url(${imgUrl})`}}>
        <img src = {imgUrl} alt = {`A ${breed} dog`} className = "is-sr-only" />
      </figure>
      </div>
      <div className = "card-content">
        <div className = "content">
          <strong>breed:</strong> {breed}
        </div>
      </div>
    </div>
  )
}

export default DogCardInfo;
