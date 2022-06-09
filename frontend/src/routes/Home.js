import ItemList from "../components/itemList/ItemList";
import classes from '../components/itemList/ItemList.module.css';
import FilterDiv from "../components/filter/FilterDiv";

const Home = ()=> {
  return(
      <div className={classes.list2}>
      <FilterDiv />
      <ItemList />
      </div>
    )
}

export default Home;