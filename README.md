# Juice Shop

## Overview 
A fully responsive restaurant-ordering app made with React. Users can add and remove items and fill out a pay form. The purpose of this project was to practice using React as well as a mobile-first design.

### Screenshots

![](public/icons/juice-shop-mobile-screenshot.png "Desktop")
![](public/icons/juice-shop-screenshot.png "Mobile")

### Functionality
The program keeps track of orders by initializing an "id counter" to 0 and creating a new object whenever the user makes a selection from the menu. The id counter is incremented by one per selection. This separates the order ids from the original menu ids. The new object is then added to the state array of orders and the "price" property of the item is added to the state total. Data attributes are used to target items for adding and removing.

There are eight components in total that receive props (except for the Header). Since the Menu and SingleOrder components have more properties, they're destructured so the code is less redundant.

As a form, the PayModal component uses its own state (an object with three input properties) to connect with the built-in form properites (name, id, value, onChange, and onSubmit) of the input fields. There is also a "show" state that is activated once the form is submitted, showing the confirmed order message.

### TODOs
Target menu and order items without using data attributes if possible.

 

### Links

- Live URL: (https://juice-ordering-app.netlify.app/)

### Built with

- React
- Vite

### Image Attributions:
- Menu Icons: Freepik.com


