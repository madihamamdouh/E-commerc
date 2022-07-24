import { useState } from "react";

const Category = ({ products, category, handelAddToCart }) => {
  const [currentCat, setcurrentCat] = useState(0);
  const FilterHandler =
    currentCat === 0
      ? products
      : products.filter((p) => p.category === currentCat);
  const itemCountPerPage = 3;
  const [currentPage, setcurrentPage] = useState(1);
  const startIndexPage = (currentPage - 1) * itemCountPerPage;
  const paginatedItem = FilterHandler.slice(
    startIndexPage,
    startIndexPage + itemCountPerPage
  );
  const pageNo = Math.ceil(products.length / itemCountPerPage);
  const pageArray = [];
  for (let i = 1; i <= pageNo; i++) {
    pageArray.push(i);
  }
  const ChangePageHandler = (page) => {
    setcurrentPage(page);
  };
  const ChangeCatHandler = (catId) => {
    setcurrentCat(catId);
  };
  return (
    <>
      <div className="h-150 w-100 mb-5 mt-5 bg-black">{" gg"}</div>
      <div className="row m-1">
        <div className="col-3 m-0 p-0">
          <ul class="list-group">
            {category.map((cat) => (
              <li
                key={cat.id}
                className={
                  cat.id === currentCat
                    ? "list-group-item active"
                    : "list-group-item"
                }
                onClick={() => ChangeCatHandler(cat.id)}
                aria-current="true"
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </div>
        <div className=" col-9  overflow-hidden  ">
          <table className="table mx-3 ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Add to Cart</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {paginatedItem.map((p) => {
                return (
                  <tr key={p.id}>
                    <th>{p.name}</th>
                    <td>{p.price}$</td>
                    <td>
                      <div>
                        <button
                          className={
                            p.isInCart
                              ? "btn btn-outline-danger"
                              : "btn btn-outline-dark"
                          }
                          onClick={() => handelAddToCart(p.id)}
                        >
                          <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="ms-5  pb-4">
            <nav aria-label="...">
              <ul className="pagination pagination-sm">
                {pageArray.map((page) => {
                  return (
                    <li
                      key={page}
                      className={
                        page === currentPage ? "page-item active" : "page-item"
                      }
                      type="button"
                      aria-current="page"
                      onClick={() => ChangePageHandler(page)}
                    >
                      <span className="page-link">{page}</span>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
