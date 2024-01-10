function Orders(props) {
    return (
        <div>
            <p className="order-title">Your Order</p>
            {props.children}
            <div className="order-divider"></div>
        </div>
    )
}

export default Orders
