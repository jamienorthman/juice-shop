function TotalPrice(props) {
    return (
        <div className="total-price-review">
            <p className="total-price-title">Total Price</p>
            <p className="total-price">${props.total}</p>
        </div>
    )
}

export default TotalPrice