import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import allFoods from './foods.json';
import FoodBox from './components/FoodBox';
import AddNewFood from './components/AddNewFood';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(allFoods);
  const [showForm, setShowForm] = useState(false);
  const [searchedString, setSearchedString] = useState('');

  const displayForm = () => {
    setShowForm(!showForm);
  };

  const addFood = (food) => {
    setFoods([...foods, food]);
    displayForm();
  };

  const displayCals = (e) => {
    console.log(e.target);
  };

  let searchedFoods = null;
  if (searchedString !== '') {
    searchedFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchedString.toLowerCase());
    });
  } else {
    searchedFoods = foods;
  }

  return (
    <div className="App">
      <div className="columns">
        <div className="column">
          <h1>IronNutrition</h1>
          <button onClick={displayForm}>Add a new food</button>

          {showForm && <AddNewFood addFood={addFood} />}
          <Search
            searchedString={searchedString}
            callbackSearch={setSearchedString}
          />
          <FoodBox foods={searchedFoods} displayCals={displayCals} />
        </div>
        <div className="column">
          <h1>Today's foods</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
