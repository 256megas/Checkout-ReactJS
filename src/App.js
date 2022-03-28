import "./assets/css/reset.css";
import "./assets/css/App.css";
import React, { Component } from "react";
import Products from "./components/Products";

import productSample from "./providers/productSample";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productSample: productSample,
    };
  }

  render() {
    return (
      <div id="App">
        <header className="App-header">
          <h1>Checkout with React</h1>
        </header>
        <div>
          <Products products={this.state.productSample} />
        </div>
      </div>
    );
  }
}

export default App;
