import React from 'react';

const DisplayMenu = ({ menu, totalCalories }) => {
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
