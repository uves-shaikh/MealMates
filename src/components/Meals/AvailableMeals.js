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