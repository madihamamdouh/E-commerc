import React from "react";
import Product from "./products";
import "../pages/style.css";
const Cart = ({
  products,
  decreastHandler,
  increastHandler,
  deleteHandler,
  resetHandler,
}) => {
  return (
    <div className="bg-black  mt-5 d-flex flex-column ">
      <div className="row d-flex align-items-center justify-content-center mx-2  ">
        <div className="d-flex align-items-center justify-content-center mb-1 ">
          {products.length === 0 && (
            <h1 className="text-light bg-black mt-5">Cart Is Empty</h1>
          )}
          {products.map((p) => (
            <Product
              key={p.id}
              products={p}
              decreastHandler={decreastHandler}
              increastHandler={increastHandler}
              deleteHandler={deleteHandler}
            />
          ))}
        </div>
      </div>
      <div className="row d-flex align-items-center justify-content-center">
        {products.length !== 0 && (
          <div
            className="btn btn-danger w-25 mb-3"
            onClick={() => resetHandler()}
          >
            Reset
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
