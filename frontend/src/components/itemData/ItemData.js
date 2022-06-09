import Card from "../../ui/card/Card";
import classes from "./ItemData.module.css";
import ImageView from "../../ui/image/ImageView";

function ItemData(props) {
  return (
    <div className={classes.item}>
      <Card>
        <ImageView src={'http://localhost:4000/img/'+props.image} alt={props.title} Medium/>
        <div className={classes.content} >
          <h3>{props.title}</h3>
          <p>{props.color}</p>
          <p>{props.price}</p>
        </div>
      </Card>
    </div>
  );
}

export default ItemData;
