import React from 'react'
import MealItem from './MealItem/MealItem'
import './availablemeals.css'

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Hamburger",
    description: "The classic burger",
    price: 70,
  },
  {
    id: "m2",
    name: "Fried Chicken",
    description: "Special Crispy Chicken",
    price: 120,
  },
  {
    id: "m3",
    name: "Barbeque Burger",
    description: "American , raw, meaty",
    price: 99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy and Green...",
    price: 80,
  },
  {
    id: "m5",
    name: "Margherita Pizza",
    description: "Classic Italian pizza with tomato, mozzarella, and basil",
    price: 150,
  },
  {
    id: "m6",
    name: "Sushi Roll",
    description: "Assorted sushi rolls with fresh fish and vegetables",
    price: 180,
  },
  {
    id: "m7",
    name: "Pasta Carbonara",
    description: "Creamy pasta with pancetta and parmesan cheese",
    price: 110,
  },
  {
    id: "m8",
    name: "Chicken Shawarma",
    description: "Middle Eastern spiced chicken wrap with garlic sauce",
    price: 90,
  },
  {
    id: "m9",
    name: "Veggie Burrito",
    description: "Flour tortilla filled with beans, rice, and vegetables",
    price: 95,
  },
  {
    id: "m10",
    name: "Salmon Teriyaki",
    description: "Grilled salmon with teriyaki sauce and steamed vegetables",
    price: 160,
  },
]


const AvailableMeals = () => {

  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  return (
    <section className='meals'>
      <ul>
        {mealsList}
      </ul>
    </section>
  )
}

export default AvailableMeals