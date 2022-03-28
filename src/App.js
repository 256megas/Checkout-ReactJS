import "./assets/css/reset.css";
import "./assets/css/App.css";

import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <div id="App">
      <header className="App-header">
        <h1>Checkout with React</h1>
      </header>
      <div>
        <Products />
        <Cart />
      </div>
    </div>
  );
}

export default App;
