import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./components/cart";
import Category from "./pages/Category";
import Basic from "./pages/login";
import Header from "./pages/Header";
import NotFound from "./pages/NotFound";
import "./pages/style.css";

const App = () => {
  const [products, setProduct] = useState([
    {
      id: 1,
      name: "Burger",
      price: 55,
      count: 0,
      isInCart: false,
      category: 1,
    },
    {
      id: 2,
      name: "Fries",
      price: 120,
      count: 0,
      isInCart: false,
      category: 1,
    },
    {
      id: 3,
      name: "Pepsi",
      price: 120,
      count: 0,
      isInCart: false,
      category: 1,
    },
    {
      id: 4,
      name: "Large Burger",
      price: 120,
      count: 0,
      isInCart: false,
      category: 2,
    },
    { id: 5, name: "Compo", price: 50, count: 0, isInCart: false, category: 2 },
    { id: 6, name: "Cola", price: 20, count: 0, isInCart: false, category: 2 },
  ]);
  const category = [
    { id: 0, name: "All" },
    { id: 1, name: "mediam meal" },
    { id: 2, name: "large meal" },
  ];
  const handelAddToCart = (producId) => {
    let newProduct = [...products];
    //update
    let index = newProduct.findIndex((p) => p.id === producId);

    newProduct[index].isInCart = !newProduct[index].isInCart;
    //setstate
    setProduct(newProduct);
  };
  //handel
  const increastHandler = (productsName) => {
    //clone
    let newProduct = [...products];
    //update
    let index = newProduct.findIndex((p) => p.name === productsName);

    newProduct[index].count = newProduct[index].count + 1;
    //setstate
    setProduct(newProduct);
  };

  //handel
  const decreastHandler = (productsName) => {
    //clone
    let newProduct = [...products];
    //update
    const index = newProduct.findIndex((p) => p.name === productsName);
    if (newProduct[index].count > 0)
      newProduct[index].count = newProduct[index].count - 1;
    //setstate
    setProduct(newProduct);
  };
  const deleteHandler = (productsName) => {
    //clone
    let newProduct = [...products];
    //update
    let index = newProduct.findIndex((p) => p.name === productsName);
    // console.log(newProduct[index]);
    newProduct.splice(index, 1);
    //setstate
    setProduct(newProduct);
  };

  //handel
  const resetHandler = () => {
    //clone
    let newProduct = [...products];
    //update
    newProduct = newProduct.map((el) => {
      return { ...el, count: 0 };
    });

    //setstate
    setProduct(newProduct);
  };

  return (
    <Router>
      <div className="bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Category"
            element={
              <Category
                products={products}
                handelAddToCart={handelAddToCart}
                category={category}
              />
            }
          />
          <Route path="/About/*" element={<About />} />
          <Route path="/login" element={<Basic />} />
          <Route
            path="/cart"
            element={
              <Cart
                products={products.filter((p) => p.isInCart)}
                decreastHandler={decreastHandler}
                increastHandler={increastHandler}
                deleteHandler={deleteHandler}
                resetHandler={resetHandler}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
