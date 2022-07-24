import React from "react";
const Product = ({
  products,
  decreastHandler,
  increastHandler,
  deleteHandler,
}) => {
  const { name, price, count } = products;

  return (
    <div className="container p-2 mt-3 mx-2 overflow-y-hidden m-0">
      <div className="card mt-4" style={{ width: "16rem", maxHeight: "22rem" }}>
        <img
          style={{
            // width: "100%",
            height: "18rem",
            background: "./images/3.jpg",
            backgroundRepeat: " no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center ",
          }}
          className="d-block"
          src="../images/3.jpg"
          alt="Third slide"
        />
        <div className=" d-flex align-center gap-2 p-2 m-1">
          <span className="fw-bold">{name}</span>
          <span className="p-1">{price}$</span>
          <div
            className="btn btn-primary py-1  px-2"
            onClick={() => increastHandler(name)}
          >
            +
          </div>
          <span className="p-1"> {count}</span>
          <div
            className="btn btn-primary py-1 px-2"
            onClick={() => decreastHandler(name)}
          >
            -
          </div>
          <div
            onClick={() => deleteHandler(name)}
            className="btn btn-danger btn-sm "
          >
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Product;
