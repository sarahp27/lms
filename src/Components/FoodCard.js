import React, { useState } from "react";

export const FoodCard = () => {
  const [foods, setFoods] = useState([]);

  fetch("http://localhost:9090/food/list")
    .then((data) => data.json())
    .then((data) => {setFoods(data)
    console.log(data)}
    )
    .catch((error) => console.log(error));


  return (
    <>
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
      <img class='card-img-top' src= {food.food_image} alt='food-img' />
      <div class='card-body'>
        <h2> {food.food_name}</h2>
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
      
    </>
  );
};
