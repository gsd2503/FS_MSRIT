import React, { Component } from "react";
import "./Exe3.css";

class Exe3 extends Component {
  state = {
    restaurants: [
      {
        id: 1,
        name: "The Italian Bistro",
        menu: [
          { id: 101, name: "Pizza Margherita", price: "$12.99" },
          { id: 102, name: "Spaghetti Carbonara", price: "$14.99" },
        ],
      },
      {
        id: 2,
        name: "Burger Haven",
        menu: [
          { id: 301, name: "Cheeseburger", price: "$10.99" },
          { id: 302, name: "Veggie Burger", price: "$9.99" },
        ],
      },
    ],
  };

  render() {
    return (
      <div>
        <h1>Restaurant List</h1>
        <ul>
          {this.state.restaurants.map(({ id, name, menu }) => (
            <li key={id}>
              <h2>{name}</h2>
              <ul>
                {menu.map(({ id, name, price }) => (
                  <li key={id}>
                    {name} - {price}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Exe3;
