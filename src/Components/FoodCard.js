import React, { useState } from "react";

export const FoodCard = () => {
  const [foods, setFoods] = useState([]);

  fetch("http://localhost:3001/food")
    .then((data) => data.json())
    .then((data) => {setFoods(data)
    console.log(data)}
    )
    .catch((error) => console.log(error));


  return (
    <>
    <div style={{display:'flex', flexDirection:"row", flexWrap:"wrap"}}>
    {foods.map((food)=>(
      <div
      class='card'
      style={{
        width: "380px",
        margin: "30px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img class='card-img-top' src= {food.image} alt='food-img' width="100px" height="300px"/>
      <div class='card-body'>
        <h2> {food.name}</h2>
        <p class='card-text'>Rs. {food.price} </p>
      </div>
      <button
        style={{
          border: "none",
          backgroundColor: "grey",
          color: "white",
        }}
      >
        {" "}
        Add to Cart
      </button>
    </div>

))}
      </div>
    </>
  );
};
