import Card from "../../ui/Card";
import classes from "./ItemData.module.css";

function ItemData(props) {
  return (
    <div className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={'http://localhost:4000/img/'+props.image} alt={props.title} />
        </div>
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
