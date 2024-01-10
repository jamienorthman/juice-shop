function ConfirmedOrder(props) {
    return (
        <div className="order-confirm">
            <p className="order-confirm-msg">
                Thanks, {props.customer}! Your order is on the way!
            </p>
        </div>
    )
}

export default ConfirmedOrder