const ImageView = (props) => {

    return(
        <div style={(props.small?{height:'7.5rem',
        width: '5rem', marginBottom: '15px', 
        border: '0.2px solid rgb(125, 121, 121)',overflow: 'hidden'}:
        (props.Medium?{height:'10rem', width: '100%',overflow: 'hidden'}:
        {height:'30rem', width: '100%',overflow: 'hidden'}))}>
          <img 
          style={props.small?{height: '100%',width: '100%'}:{objectFit: 'cover',width: '100%'}}
          src={props.src} alt={props.alt} />
        </div>
    )
}

export default ImageView;