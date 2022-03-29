import React, { Component } from "react";

class Products extends Component {
  inputChangeHandler = (e, i) => {
    var temporalState = this.props.products;
    temporalState[i].quantityProduct = e.target.value;
    temporalState[i].Subtotal = (
      temporalState[i].quantityProduct * temporalState[i].priceProduct
    ).toFixed(2);
    this.setState({ productSample: temporalState });
    this.updateTotal();
  };

  updateTotal() {
    var sumatorio = 0;
    this.props.products.map((product, i) => {
      sumatorio += parseFloat(product.Subtotal);
      return true;
    });
    document.getElementById("total").innerHTML =
      "Total: " + sumatorio.toFixed(2);
  }

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
            {this.props.products.map((product, i) => {
              return (
                <tr key={i}>
                  <td className="productImage">
                    <img
                      src={product.imageProduct}
                      style={{ width: "100px" }}
                      alt={product.nameProduct}
                    />
                  </td>
                  <td className="productName">{product.nameProduct}</td>
                  <td className="productPrice">{product.priceProduct}</td>
                  <td className="productQuantity">
                    <input
                      type="number"
                      defaultValue={product.quantityProduct}
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
        <div id="total"> Total: 0 </div>
      </div>
    );
  }
}
export default Products;
