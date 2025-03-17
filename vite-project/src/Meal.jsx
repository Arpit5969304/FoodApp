
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {v4 as uuidv4} from 'uuid';
import  "./Meal.css";
import { NavLink } from 'react-router';
export default function Meal({detail}){

    return(

       <>
        <div className="meal">

            {
              !detail ?"":detail.map((currItem)=>{

                  console.log(currItem);
                 
                  return(
                    <div className='mealImg'key={uuidv4()}> 

                     <img src={currItem.strMealThumb}/>
                     <p>{currItem.strMeal}</p>
                     <NavLink to={`${currItem.idMeal}`}><button>recipie</button></NavLink>
                    </div>
                 
                  )
              })
            }
        </div>
          
      </>
    )
}