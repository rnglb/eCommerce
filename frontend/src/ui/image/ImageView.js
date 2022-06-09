import classes from "./ImageView.module.css";
const ImageView = (props) => {
    return(
        <div 
        className={classes.image} 
        style={props.small?{height:'7.5rem', width: '5rem', marginBottom: '15px', border: '0.2px solid rgb(125, 121, 121)'}:
        (props.Medium?{height:'10rem', width: '100%'}:
        {height:'30rem', width: '100%'})}>
          <img 
          style={props.small?{height: '100%'}:{objectFit: 'cover'}}
          src={props.src} alt={props.alt} />
        </div>
    )
}

export default ImageView;