import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="card">
          <img src={this.props.imgSrc} className="card-img-top" alt="..." />
          <h1 className="px-3 py-2 pt-4">{this.props.title}</h1>
          <div className="px-3">
            <p>{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
