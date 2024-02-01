import { useState} from 'react'
import ConfirmedOrder from './ConfirmedOrder'

function PayModal(props) {
    const [formData, setFormData] = useState( 
        {
            name: "",
            creditCard: "",
            cvv: ""
        }
    )

    const [show, setShow] = useState(false)

    function handleChange(event) {
        const {name, value, type} = event.target
        setFormData(prevData => {
           return {
            ...prevData,
            [name]: type === "tel" ? parseInt(value) : value
           } 
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setShow(!show)
    }

    return (
        <div className="payment-modal" id="payment-modal" style={props.style}>
            
            <div class="close-modal-btn-container">
				<button class="modal-close-btn" onClick={props.handleClick}>
                    X
                </button>
			</div>    
            
            <div className="pay-modal-inner">
                
                {!show &&
                <div>
                    <h3 className="payment-title">Enter card details</h3>
                    <br />
                    <form id="pay-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" 
                            name="name" 
                            id="name"
                            value={formData.name}
                            onChange={handleChange} 
                            required 
                        />
                        <label htmlFor="ccn">Credit card number</label>
                        <input 
                            type="tel" 
                            name="creditCard" 
                            id="ccn"
                            value={formData.creditCard}
                            onChange={handleChange}  
                            inputMode="numeric" 
                            pattern="[0-9\s]{13,19}" 
                            autoComplete="cc-number" 
                            maxLength="19"  
                            required 
                        />
                        <label htmlFor="cvv">CVV</label>
                        <input 
                            type="tel" 
                            name="cvv" 
                            id="cvv"
                            value={formData.cvv}
                            onChange={handleChange} 
                            inputMode="numeric" 
                            pattern="\d*"
                            minLength="3"
                            maxLength="4" 
                            required 
                        />
                        <button
                            className="pay-btn" 
                            id="pay-btn">
                            Pay
                        </button>
                    </form>
                </div> 
                }
                
                {show && <ConfirmedOrder customer={formData.name} />}

            </div>
        
        </div>
    )
}

export default PayModal