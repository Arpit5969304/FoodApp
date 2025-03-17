import { useState } from 'react'
import './App.css'
import Info from "./Info";
import FoodMain from "./FoodMain";
import Meal from "./Meal.jsx";
import { Route,Routes } from 'react-router';



function App() {

  return (
    <>
      <Routes>
           <Route path='/'element={<FoodMain/>}/>
           <Route path='/:mealid'element={<Info/>}/>
      </Routes>
   </>
  )
}

export default App
