import Button from "../../../ui/button/Button";

const CartItmQuantity = () => {
    const updateQuantity = (op) => {
        console.log("....",op);
        }
    return (
        <div style={{ marginLeft: '20px'}}> 
            <Button Round onclickEvent={()=>updateQuantity("-")} >-</Button>
            <Button small>2</Button>
            <Button Round onclickEvent={()=>updateQuantity("+")} >+</Button>
        </div>

    )
}

export default CartItmQuantity;