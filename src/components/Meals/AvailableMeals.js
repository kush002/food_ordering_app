import { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Trout Fish",
//     description:
//       "Finest fish prepared in tandoori style served with salad and frenchfries",
//     price: 800,
//   },
//   {
//     id: "m2",
//     name: "Penne Pasta With Veggies",
//     description: "An Italian specialty with white sauce/Red Sauce/ Mix Sauce",
//     price: 300,
//   },
//   {
//     id: "m3",
//     name: "Paneer Tikka Masala",
//     description: "An Indian Spacialty",
//     price: 330,
//   },
//   {
//     id: "m4",
//     name: "Veg Jaipuri",
//     description: "Mix vegetable with fried papad, spicy",
//     price: 320,
//   },
// ];

const AvailableMeals = () => {
  const [mealsData, setMealsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getMealsData = async () => {
      const response = await fetch(
        "https://food-delivery-app-3ba13-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();
      const loadedData = [];

      for (const key in data) {
        loadedData.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMealsData(loadedData);
      setIsLoading(false);
    };
    getMealsData();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.meals}>
        <p className={classes.loading}>Loading...</p>
      </section>
    );
  }

  const mealList = mealsData.map((meal) => (
    <MealsItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
