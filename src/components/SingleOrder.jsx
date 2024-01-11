function SingleOrder({item, removeClick}) {
    const{ name, price, orderID } = item
    return (
        <div className="item-review">
            <div className="item-remove-pair">
                <p className="juice-review">{name}</p>
                <button type="button" 
                className="remove-btn" 
                onClick={removeClick}
                data-remove={orderID}>
                    remove
                </button>
            </div>
            <p className="price-review">${price}</p>
        </div>
    )
}

export default SingleOrder