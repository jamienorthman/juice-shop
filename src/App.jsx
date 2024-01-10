import { useState } from 'react'
import './style.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Orders from './components/Orders'
import SingleOrder from './components/SingleOrder'
import TotalPrice from './components/TotalPrice'
import OrderBtn from './components/OrderBtn'
import PayModal from './components/PayModal'
import ConfirmedOrder from './components/ConfirmedOrder'
import { menu } from'./data.js'

let idCounter = 0

function App() {

  const [allOrders, setAllOrders] = useState([])
  const [total, setTotal] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const styles = {
    display: allOrders.length > 0 ? 'flex' : 'none'
  }

  function handleOrderClick() {
    if (allOrders.length > 0) {
      setShowModal(prevModal => !prevModal)
    }
  }

  function handleSelectClick(juiceId) {
    const targetJuiceObj = menu.filter(juice => juice.id == juiceId)[0]
    const targetObj = {
      name: targetJuiceObj.name,
      price: targetJuiceObj.price,
      orderID: idCounter,
      key: idCounter
    }
    idCounter++
    setAllOrders([...allOrders, targetObj])
    setTotal(prevTotal => prevTotal + targetObj.price)
  }

  function handleRemoveClick(orderID) {
    let removedOrderPrice
    setAllOrders(allOrders.filter((order) => {
        if (order.orderID == orderID){
          removedOrderPrice = order.price
          return false
        }
        return true
    }))
    setTotal(prevTotal => prevTotal - removedOrderPrice)
  }
  
  const orderedItems = allOrders.map(item => {
      return (
        <SingleOrder
          key={item.key} 
          name={item.name}
          removeClick={(e) => handleRemoveClick(e.target.dataset.remove)}
          price={item.price}
          orderID={item.key}
        />
      )
    })
  
  const items = menu.map(item => {
    const renderedIngredients = item.ingredients.map(ingredient => ingredient)
    return (
      <Menu 
        key={item.id}
        img={item.img}
        altText={item.alt}
        name={item.name}
        ingredients={renderedIngredients.join(', ')}
        price={item.price}
        id={item.id}
        handleClick={(e) => handleSelectClick(e.target.dataset.select)}
      />
    )
  })

  return (
    <div>
      <div className="main-container" id="main">
        
        <Header />
        <div className="menu-container" id="menu">
          {items}
        </div>
        <div className="order-container" id="order-container">
          <Orders style={styles}>
            <div className="order-list">
              {orderedItems}   
            </div>  
          </Orders> 
          <TotalPrice
            total={total}
          /> 
          <OrderBtn 
            handleClick={handleOrderClick}
          />
        </div>
      </div>
      <PayModal 
        style={{display: showModal ? 'flex' : 'none'}}
      />
      <footer className="img-attribution">
        <p>
          <a href="https://www.freepik.com/search?format=search&last_filter=type&last_value=icon&query=juice%20menu&type=icon"
          target="_blank">
            Icons | Freepik.com
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
