function Menu(props) {
    return (
        <div>
            <div className="juice-container">
                <img src={props.img} className="juice-img" alt={props.altText} />
                <div className="price-info-container">
                    <p className="juice-name">{props.name}</p>
                    <p className="ingredients">{props.ingredients}</p>
                    <p className="price">${props.price}</p>
                </div>
                <button type="button" 
                className="select-btn"
                onClick={props.handleClick} 
                data-select={props.id}>+
                </button>
            </div> 
            <div className="divider-container">
                <div className="divider"></div>
            </div>
        </div>
    )
}

export default Menu