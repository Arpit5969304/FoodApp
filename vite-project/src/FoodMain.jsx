import TextField from '@mui/material/TextField';
import {useState} from "react";
import Button from '@mui/material/Button';
import Meal from "./Meal";


  export default function FoodMain(){

    let [data,setData]=useState();

    let [error,setError]=useState("");

    let [found,setFound]=useState("");

    let [search,setSearch]=useState("");

    const  API_URL="https://www.themealdb.com/api/json/v1/1/search.php?";

    let getInfo = async()=>{

        try{
            
          let response=await fetch(`${API_URL}s=${search}`);


          if(!response.ok){

              throw new Error(`http error Status :${response.status}`);
          }

          let jsonData=await response.json();


          console.log(jsonData.meals);
          setData(jsonData.meals);

        }
        catch(error){

           console.log("Error fetching Data",error);

           
        }



    }

    let handleSubmit=async(event)=>{
      
        event.preventDefault();
        setSearch("");

        if(search==""){

            setError("Please Enter somthing ");
        }
        else{

            let info=await getInfo();   

        }

    }

    let handleInput=(event)=>{

         setSearch(event.target.value);
         console.log(search);
          
    }



      return(

      
          <div className="container">

             <h1 className='head'>FOOD RECIPE APP</h1>
              
               <div className="searchBar">
                    
                 <TextField
                   required
                   label="Enter Dishes" name="search"onChange={handleInput}value={search}

                 />
                 <br></br><br></br>
                 <Button variant="contained"type='submit'onClick={handleSubmit}>search</Button>


                 <h3>{error}</h3>
               </div>

               <Meal detail={data}/>

          </div>
      )
  }