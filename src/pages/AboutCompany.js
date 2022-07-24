import "./style.css";
const Company = () => {
  return (
    <>
      <div className="d-flext text-center">
        <h2>About Our Company</h2>
        <p className="fw-light text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          aspernatur neque quidem perferendis explicabo quas nisi error
        </p>
        <div className=" row d-flex justify-content-center">
          <img
            className=" company-pic d-block w-50"
            src="/images/7.jpg"
            alt=""
          ></img>
          <div className="line w-100 ">gfg</div>
        </div>
      </div>
    </>
  );
};

export default Company;
