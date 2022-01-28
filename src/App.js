import React, { useState, useEffect } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import allFoods from './foods.json';
import FoodBox from './components/FoodBox';
import AddNewFood from './components/AddNewFood';
import Search from './components/Search';
import DisplayMenu from './components/DisplayMenu';

function App() {
  const [foods, setFoods] = useState(allFoods);
  const [showForm, setShowForm] = useState(false);
  const [searchedString, setSearchedString] = useState('');
  const [menu, setMenu] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);

  const displayForm = () => {
    setShowForm(!showForm);
  };

  const addFood = (food) => {
    setFoods([...foods, food]);
    displayForm();
  };

  const sendMenu = (food, quantity) => {
    food.quantity = quantity;
    setMenu([...menu, food]);
  };

  useEffect(() => {
    menu.map((food) => {
      return setTotalCalories(
        totalCalories + Number(food.calories * food.quantity)
      );
    });
  }, [menu]);

  console.log(totalCalories);

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
          {searchedFoods.map((food, i) => (
            <FoodBox food={food} sendMenu={sendMenu} key={i} />
          ))}
        </div>
        <div className="column">
          <h1>Today's foods</h1>
          <ul>
            <DisplayMenu menu={menu} totalCalories={totalCalories} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
