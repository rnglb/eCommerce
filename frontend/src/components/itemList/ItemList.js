import ItemData from '../itemData/ItemData';
import classes from './ItemList.module.css';
function ItemList(props) {
  const viewProductHandler = (selectedItemId) => {
    props.setSelectedItem(selectedItemId);
  }
  return (
    <div className={classes.list}>
      {props.data.map((item) => (
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

export default ItemList;