import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5">About Pizza</h1>

        <div className="row h-auto">
          <div className="col-md-6">
            <img
              src="./images/Main-picture.webp"
              className="d-block w-100 h-75"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              quia ea sit rem sapiente quam neque quod libero a dolorum
              voluptates error, quae nisi laudantium. Sapiente molestiae
              voluptate quos fuga.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              quia ea sit rem sapiente quam neque quod libero a dolorum
              voluptates error, quae nisi laudantium. Sapiente molestiae
              voluptate quos fuga.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              quia ea sit rem sapiente quam neque quod libero a dolorum
              voluptates error, quae nisi laudantium. Sapiente molestiae
              voluptate quos fuga.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
