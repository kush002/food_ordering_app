import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Trout Fish",
    description:
      "Finest fish prepared in tandoori style served with salad and frenchfries",
    price: 800,
  },
  {
    id: "m2",
    name: "Penne Pasta With Veggies",
    description: "An Italian specialty with white sauce/Red Sauce/ Mix Sauce",
    price: 300,
  },
  {
    id: "m3",
    name: "Paneer Tikka Masala",
    description: "An Indian Spacialty",
    price: 330,
  },
  {
    id: "m4",
    name: "Veg Jaipuri",
    description: "Mix vegetable with fried papad, spicy",
    price: 320,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
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
