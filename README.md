# 🍕 React Pizza Menu App  
A beginner-friendly React project where I built a dynamic pizza menu UI using reusable components, props, JSX, and conditional rendering. This project helped me strengthen my React fundamentals while keeping the code clean and modular.

---

## 🚀 Project Overview  
This app displays a list of pizzas, indicates which ones are sold out, and even shows whether the shop is currently open. It’s a simple UI, but it covers all the essential building blocks of React.

**Special thanks to my mentor** for guiding me through these concepts and helping me understand the component architecture the right way. 🙌

---

## 🧩 What I Learned

### ✔️ Component-Based Architecture  
I built separate components for each part of the UI:
- `App`
- `Header`
- `Menu`
- `Pizza`
- `Footer`
- `Order`

Each component handles one clear responsibility, making the project easy to scale.

---

### ✔️ Props  
Passed data like:
- Name  
- Price  
- Ingredients  
- Image  
- Sold-out status  

This helped me understand how to make components dynamic and reusable.

---

### ✔️ JSX & Rendering  
Used JSX to structure the UI clearly and cleanly, with conditional rendering such as:
- Showing menu only when pizzas exist  
- Displaying “Sold Out” dynamically  
- Showing order message only during open hours  

---

### ✔️ List Rendering  
Mapped over an array of pizza objects to render the menu programmatically instead of hardcoding multiple `<Pizza />` components.

---

### ✔️ Conditional Styling  
Pizzas that are sold out get a special class (`sold-out`) that changes their look.

---

### ✔️ React 18 Setup  
Used:
```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
