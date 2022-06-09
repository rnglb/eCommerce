import ItemData from '../itemData/ItemData';
import { useNavigate } from "react-router-dom";
import LoadingSpinner from '../../ui/LoadingSpinner';
import useGetFetch from '../../customHook/useGetFetch';
import classes from './ItemList.module.css';
function ItemList() {
  let navigate = useNavigate();
  let data = null;
  data = useGetFetch("http://localhost:4000/productListDetails");

  const viewProductHandler = (selectedItemId) => {
    navigate("../viewItem/"+selectedItemId, { replace: true });
  }

if(data==null){
    return(
        <LoadingSpinner />
    )
  }
else{
    return (
       <div className={classes.list}>
          {data.map((item) => (
              <button onClick={()=>viewProductHandler(item.product_id)} className={classes.button}>
              <ItemData
               key={item._id}
               id={item.product_id}
               image={item.product_pictures[0]}
               title={item.product_name}
               price={item.product_price}
               color={item.product_color[0]}
              />
              </button>  
         ))}
       </div>
     );
  }
}

export default ItemList;