import React, { Component } from "react";
import Item from "./Item";

export class PizzaTypes extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Pizza Types</h3>
        <div className="row">
          <Item
            imgSrc="./images/Chicken-Pizza.jpg"
            title="Chicken-Pizza"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat est voluptatem, perferendis minima nesciunt, modi repellendus dolor eveniet voluptatum quaerat necessitatibus deleniti commodi?  Tenetur impedit, veritatis dolore debitis delectus ratione."
          />
          <Item
            imgSrc="./images/Veggie-pizza.webp"
            title="Veggie-Pizza"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat est voluptatem, perferendis minima nesciunt, modi repellendus dolor eveniet voluptatum quaerat necessitatibus deleniti commodi?  Tenetur impedit, veritatis dolore debitis delectus ratione."
          />
          <Item
            imgSrc="./images/Pepper.jpg"
            title="Pepper"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat est voluptatem, perferendis minima nesciunt, modi repellendus dolor eveniet voluptatum quaerat necessitatibus deleniti commodi?  Tenetur impedit, veritatis dolore debitis delectus ratione."
          />
          <Item
            imgSrc="./images/./Green-bell-pepper.webp"
            title="Green-bell-pepper"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat est voluptatem, perferendis minima nesciunt, modi repellendus dolor eveniet voluptatum quaerat necessitatibus deleniti commodi?  Tenetur impedit, veritatis dolore debitis delectus ratione."
          />
        </div>
      </div>
    );
  }
}

export default PizzaTypes;
