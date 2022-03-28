import React, { Component } from "react";
import productSample from "../providers/productSample";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productSample: productSample,
    };
  }

  inputChangeHandler = (e, i) => {
    var temporalState = this.state.productSample;
    // console.log("Modificamos producto: " + i);
    // console.log("State: " + this.state.productSample[i].nameProduct);
    // console.log("Cantidad: " + e.target.value);
    // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    temporalState[i].quantityProduct = e.target.value;
    temporalState[i].Subtotal =
      temporalState[i].quantityProduct * temporalState[i].priceProduct;
    this.setState({ productSample: temporalState });
  };

  render() {
    return (
      <div id="products">
        <table>
          <thead>
            <tr>
              <th className="productImage">Image</th>
              <th className="productName">Product</th>
              <th className="productPrice">Price</th>
              <th className="productQuantity">Quantity</th>
              <th className="productSubtotal">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {productSample.map((product, i) => {
              return (
                <tr key={i}>
                  <td className="productImage">{product.nameProduct}</td>
                  <td className="productName">{product.nameProduct}</td>
                  <td className="productPrice">{product.priceProduct} €</td>
                  <td className="productQuantity">
                    <input
                      type="number"
                      defaultValue={product.quantityProduct}
                      // onChange={() => {
                      //   this.inputChangeHandler(this, i);
                      // }}
                      onChange={(e) => {
                        this.inputChangeHandler(e, i);
                      }}
                    ></input>
                  </td>
                  <td className="productSubtotal">{product.Subtotal}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Products;
