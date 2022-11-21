import React, { useState } from "react";
import { useGlobalContext } from "../../context/Context";
import { Popup } from "../Components/Popup";
import { Meal } from "./Components/Meal";
import "./Menu.css";

const menuOptions = ["List", "Add"];
const url = "";
export const Menu = () => {
  //globalContext
  const { meals, setMeals, setPopupShowing } = useGlobalContext();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [mealName, setMealName] = useState("");
  const [mealPrice, setMealPrice] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [mealImage, setMealImage] = useState("");
  const [mealCategory, setMealCategory] = useState("appetizer");

  //save menu item with axios
  //load image

  //edit meal
  const editMeal = (id) => {
    const editingMeal = meals.find((m) => m.id === id);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setMealImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const saveMeal = async () => {
    const meal = {
      id: new Date().getTime(),
      name: mealName,
      price: mealPrice,
      description: mealDescription,
      img: mealImage,
      category: mealCategory,
    };

    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(meal),
    // });
    // const data = await response.json();
    // setMeals([...meals, data]);

    console.log(meal);
    setMeals([...meals, meal]);
    //empty fields
    setMealName("");
    setMealPrice("");
    setMealDescription("");
    setMealImage("");
    setMealCategory("");

    //show popup

    setPopupShowing(true);

    setTimeout(() => {
      setPopupShowing(false);
    }, 2000);
  };

  return (
    <div className="left menu">
      <div className="menu-options">
        {menuOptions.map((option, index) => {
          return (
            <span
              onClick={() => setCurrentIndex(index)}
              className={
                "menu-option" +
                (currentIndex === index ? " active-menu-option " : "")
              }
            >
              {option}
            </span>
          );
        })}
      </div>

      {currentIndex === 0 ? (
        <div className="list">
          {meals.map((meal) => {
            return <Meal edit={editMeal} key={meal.id} {...meal} />;
          })}

          {meals.length === 0 && (
            <div className="empty">
              <h2>There are no meals yet</h2>
            </div>
          )}
        </div>
      ) : (
        <div className="add">
          <div className="add-meal">
            <h3>Add Meal</h3>

            <div className="add-meal-header-inputs">
              <input
                type="text"
                placeholder="Meal Name"
                onChange={(e) => setMealName(e.target.value)}
                value={mealName}
              />
              <input
                type="text"
                placeholder="Meal Price"
                onChange={(e) => setMealPrice(e.target.value)}
                value={mealPrice}
              />
              <select
                onChange={(e) => setMealCategory(e.target.value)}
                value={mealDescription}
              >
                <option value="appetizer">Appetizer</option>
                <option value="main">Main</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
              </select>
              <input
                type="text"
                placeholder="Meal Description"
                onChange={(e) => setMealDescription(e.target.value)}
                value={mealDescription}
              />
              <input type="file" onChange={handleImage} />
              <button
                onClick={() => {
                  saveMeal();
                }}
              >
                Add Meal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
