import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Margherita Pizza",
    ingredients: "Tomato and mozzarella cheese",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Spinach Pizza",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Mushroom Pizza",
    ingredients: "Tomato, mozzarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pepperoni Pizza",
    ingredients: "Tomato, mozzarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Ham & Arugula Pizza",
    ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* Conditional rendering with && operator */}
      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}
      {/* Conditional Rendering with ternary operator */}
      {numPizzas > 0 ? (
        <>
          <p>
            Freshly baked pizzas, made with quality ingredients. Six delicious
            options straight from our stone oven.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later:)</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price="10"
      />
      <Pizza
        name="Pizza funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price="12"
      /> */}
    </main>
  );
}
function Pizza(props) {
  // if (props.pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt="Pizza Spinaci" />
      <div>
        <p>{props.pizzaObj.name}</p>
        <p>{props.pizzaObj.ingredients}</p>
        <span>
          {props.pizzaObj.soldOut ? "Sold Out" : props.pizzaObj.price}
        </span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {openHour ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're Currently open now, until {closeHour}:00. Come visit us or order
        online
      </p>
      <button className="btn">Order Now </button>
    </div>
  );
}
//React V18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// React.render(<App />);
