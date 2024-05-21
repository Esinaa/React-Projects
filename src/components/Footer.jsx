import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <p className="para">
          &copy; {new Date().getFullYear()} jita-technologies, All Rights
          Reserved
        </p>
      </footer>
    );
  }
}

export default Footer;
