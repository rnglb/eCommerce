import {useState ,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ItemList from "../components/itemList/ItemList";
import classes from '../components/itemList/ItemList.module.css';
import FilterDiv from "../components/filter/FilterDiv";


let productLists ;
const Home = (props)=> {
const [isLoding, toggleLoading]=useState(true);
  let navigate = useNavigate();
  const setSelectedItem = (selectedItemId) => {
    props.selectedItemHandler(selectedItemId);
    navigate("../viewItem/"+selectedItemId, { replace: true });
    }

useEffect(() => {
  toggleLoading(true);
    fetch(
      "http://localhost:4000/productListDetails"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        productLists = data;
        toggleLoading(false);
      })
    }, []);

  if(isLoding){
return(
  <h1>Loading...</h1>
)
  }
  else{
  return(
      <div className={classes.list2}>
      <FilterDiv />
      <ItemList data={productLists} setSelectedItem={setSelectedItem} />
      </div>
    )
  }
  
}

export default Home;