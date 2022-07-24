const Team = () => {
  return (
    <>
      <div className="d-flext text-center">
        <h2>About Our Team</h2>
        <p className="fw-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          aspernatur neque quidem perferendis explicabo quas nisi error
          distinctio, ipsam facere asperiores unde quam voluptatem odio vitae,
          fuga amet doloribus delectus.
        </p>
        <div className="row">
          <div className="col-4">
            <img
              className="d-block w-100 mb-4"
              src="/images/4.jpg"
              alt=""
            ></img>
          </div>
          <div className="col-8">
            <img className="d-block w-100" src="/images/5.jpg" alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
