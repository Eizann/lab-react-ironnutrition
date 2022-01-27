import React, { useState } from 'react';

const DisplayMenu = ({ menu }) => {
  const [totalCalories, setTotalCalories] = useState(0);

  return (
    <>
      {menu.map((food, i) => (
        <li key={i}>
          {food.quantity} {food.name} ={' '}
          {Number(food.quantity) * Number(food.calories)} cal
        </li>
      ))}
      <p>Total : {totalCalories} cals</p>
    </>
  );
};

export default DisplayMenu;
