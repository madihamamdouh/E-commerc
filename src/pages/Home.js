import { useState } from "react";
import { Link } from "react-router-dom";

// import {useLocation} from
function Home() {
  let [currentImg, setCurrentImg] = useState(1);

  const handleNextImage = () => {
    currentImg < 3
      ? setCurrentImg(currentImg + 1)
      : setCurrentImg((currentImg = 1));
  };

  const handlePreviousImage = () => {
    currentImg > 1
      ? setCurrentImg(currentImg - 1)
      : setCurrentImg((currentImg = 3));
  };
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide bg-black mb-2"
        dataRide="carousel"
      >
        <div
          id="carouselExampleControls"
          className="carousel slide mb-2"
          dataRide="carousel"
        >
          <div className="carousel-inner mb-2">
            <div className="carousel-item active mb-3">
              <img
                className="d-block w-100 h-50 mb-2"
                src={`./images/${currentImg}.jpg`}
                alt="First slide"
              />
              <div className="carousel-item mb-2">
                <img
                  className="d-block w-100 h-50"
                  src="./images/1.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item mb-2">
                <img
                  className="d-block w-100 h-50"
                  src="./images/3.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <Link
              className="carousel-control-prev "
              to="#carouselExampleControls"
              role="button"
              data-slide="prev"
              onClick={handlePreviousImage}
            >
              <span
                className="carousel-control-prev-icon"
                ariaHidden="true"
              ></span>
              <span className="sr-only"></span>
            </Link>
            <Link
              className="carousel-control-next"
              to="#carouselExampleControls"
              role="button"
              dataSlide="next"
              onClick={handleNextImage}
            >
              <span
                className="carousel-control-next-icon"
                ariaHidden="true"
              ></span>
              <span className="sr-only"></span>
            </Link>
          </div>
        </div>
      </div>
      {/* <section class="carousel">
        <div class="reel">
          <article>
            <Link to="#" class="image featured">
              <img src="images/pic01.jpg" alt="" />
            </Link>
            <header>
              <h3>
                <Link to="#">Pulvinar sagittis congue</Link>
              </h3>
            </header>
            <p>
              Commodo id natoque malesuada sollicitudin elit suscipit magna.
            </p>
          </article>

          <article>
            <Link to="#" class="image featured">
              <img src="images/pic02.jpg" alt="" />
            </Link>
            <header>
              <h3>
                <Link to="#">Fermentum sagittis proin</Link>
              </h3>
            </header>
            <p>
              Commodo id natoque malesuada sollicitudin elit suscipit magna.
            </p>
          </article>

          <article>
            <Link to="#" class="image featured">
              <img src="images/pic03.jpg" alt="" />
            </Link>
            <header>
              <h3>
                <Link to="#">Sed quis rhoncus placerat</Link>
              </h3>
            </header>
            <p>
              Commodo id natoque malesuada sollicitudin elit suscipit magna.
            </p>
          </article>

          <article>
            <Link to="#" class="image featured">
              <img src="images/pic04.jpg" alt="" />
            </Link>
            <header>
              <h3>
                <Link to="#">Ultrices urna sit lobortis</Link>
              </h3>
            </header>
            <p>
              Commodo id natoque malesuada sollicitudin elit suscipit magna.
            </p>
          </article>

          <article>
            <Link to="#" class="image featured">
              <img src="images/pic05.jpg" alt="" />
            </Link>
            <header>
              <h3>
                <Link to="#">Varius magnis sollicitudin</Link>
              </h3>
            </header>
            <p>
              Commodo id natoque malesuada sollicitudin elit suscipit magna.
            </p>
          </article>

          <article>
            <Link to="#" class="image featured">
              <img src="images/pic01.jpg" alt="" />
            </Link>
            <header>
              <h3>
                <Link to="#">Pulvinar sagittis congue</Link>
              </h3>
            </header>
            <p>
              Commodo id natoque malesuada sollicitudin elit suscipit magna.
            </p>
          </article>

          <article>
            <Link to="#" class="image featured">
              <img src="images/pic02.jpg" alt="" />
            </Link>
            <header>
              <h3>
                <Link to="#">Fermentum sagittis proin</Link>
              </h3>
            </header>
            <p>
              Commodo id natoque malesuada sollicitudin elit suscipit magna.
            </p>
          </article>

          <article>
            <Link to="#" class="image featured">
              <img src="images/pic03.jpg" alt="" />
            </Link>
            <header>
              <h3>
                <Link to="#">Sed quis rhoncus placerat</Link>
              </h3>
            </header>
            <p>
              Commodo id natoque malesuada sollicitudin elit suscipit magna.
            </p>
          </article>

          <article>
            <Link to="#" class="image featured">
              <img src="images/pic04.jpg" alt="" />
            </Link>
            <header>
              <h3>
                <Link to="#">Ultrices urna sit lobortis</Link>
              </h3>
            </header>
            <p>
              Commodo id natoque malesuada sollicitudin elit suscipit magna.
            </p>
          </article>

          <article>
            <Link to="#" class="image featured">
              <img src="images/pic05.jpg" alt="" />
            </Link>
            <header>
              <h3>
                <Link to="#">Varius magnis sollicitudin</Link>
              </h3>
            </header>
            <p>
              Commodo id natoque malesuada sollicitudin elit suscipit magna.
            </p>
          </article>
        </div>
      </section> */}
    </>
  );
}

export default Home;
