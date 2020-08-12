import React from "react";
import { Link } from "react-router";

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagrsam</Link>
        </h1>
        {/* Pass down all props to rendered children */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;
