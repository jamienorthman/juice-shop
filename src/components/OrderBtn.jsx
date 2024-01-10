function OrderBtn(props) {
    return (
        <button 
            type="button" 
            className="order-btn" 
            id="order-btn" 
            data-order="order-btn"
            onClick={props.handleClick}
        >
            Complete order
        </button>
    )
}

export default OrderBtn