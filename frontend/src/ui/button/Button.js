
const Button = (props) => {
   const css = props.Round?{
    display: 'inline-block',
    marginRight: '5px',
    border: '0.2px solid rgb(125, 121, 121)',
    height: '26px',
    width: '26px',
    borderRadius: '20px'
    }:(props.small?{
        display: 'inline-block',
    marginRight: '5px',
    border: '0.2px solid rgb(125, 121, 121)',
    height: '26px',
    width: '50px',
    borderRadius: '2px'
    }:{})
    return(
        <button
        style={css}
        >{props.children}</button>
    )
}

export default Button;