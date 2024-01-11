function Menu({item, handleClick, ingredients}) {
    const { id, img, altText, name, price } = item
    return (
        <div>
            <div className="juice-container">
                <img src={img} className="juice-img" alt={altText} />
                <div className="price-info-container">
                    <p className="juice-name">{name}</p>
                    <p className="ingredients">{ingredients}</p>
                    <p className="price">${price}</p>
                </div>
                <button type="button" 
                className="select-btn"
                onClick={handleClick} 
                data-select={id}>+
                </button>
            </div> 
            <div className="divider-container">
                <div className="divider"></div>
            </div>
        </div>
    )
}

export default Menu