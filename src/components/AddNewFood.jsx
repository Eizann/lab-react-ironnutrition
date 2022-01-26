import React, { useState } from 'react';

const AddNewFood = ({ addFood }) => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');

  const handleNameInput = (e) => setName(e.target.value);

  const handleCaloriesInput = (e) => setCalories(e.target.value);

  const handleImageInput = (e) => setImage(e.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const food = { name, calories, image };
    addFood(food);
  };

  return (
    <div className="addNewFood">
      <form action="post" onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />
        <label htmlFor="calories">Calories : </label>
        <input
          type="text"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />
        <label htmlFor="image">Image : </label>
        <input
          type="file"
          name="image"
          value={image}
          onChange={handleImageInput}
        />

        <button>Add a new food</button>
      </form>
    </div>
  );
};

export default AddNewFood;
