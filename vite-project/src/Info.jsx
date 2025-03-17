
import { useParams } from "react-router";

import "./Meal";

import {useState} from "react";


 export default function Info(){


    let [one,setOne]=useState();

    let {mealid}=useParams();

    let getInfo=async()=>{

        
      let response=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);

      let resData=await response.json();

    //  console.log(resData.meals[0]);
      
      setOne(resData.meals[0]);

      console.log(one);


    }


    if(one!=""){

        getInfo();

    }
        return(

            <>
              <div>

                    {  

                            
                             !one ? "Data Not found":
                             <div className="mealInfo">

                                 <img src={one.strMealThumb}/>
                            
                                  <div className="info">

                                    <h1>recipie details</h1>
                                    <button>{one.strMeal}</button>
                                    <h3>Instructions</h3>
                                    <p>{one.strInstructions}</p>

                                  </div>

                             </div>

                    }

              </div>
            </>
        )
 }