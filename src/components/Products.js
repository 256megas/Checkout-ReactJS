import React, { Component } from "react";
import productSample from "../providers/productSample";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productSample: productSample,
    };
  }

  inputChangeHandler = (i) => {
    console.log("Modificamos producto" + i);
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
                      value={product.quantityProduct}
                      onChange={() => {
                        this.inputChangeHandler(i);
                      }}
                    ></input>
                  </td>
                  <td className="productSubtotal">Subtotal</td>
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
