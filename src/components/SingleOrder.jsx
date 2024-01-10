function SingleOrder(props) {
    return (
        <div className="item-review">
            <div className="item-remove-pair">
                <p className="juice-review">{props.name}</p>
                <button type="button" 
                className="remove-btn" 
                onClick={props.removeClick}
                data-remove={props.orderID}>
                    remove
                </button>
            </div>
            <p className="price-review">${props.price}</p>
        </div>
    )
}

export default SingleOrder