import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import troText from "./media/troText.svg";

const ImageSlider = ({ slides, token }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInteraction, setUserInteraction] = useState(false);

  if (!userInteraction) {
    setTimeout(() => {
      //   console.log("changing slide");
      //   nextBtn.click();
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 3000);
  }

  const logoutHandler = () => {};

  const sliderStyles = {
    height: "100%",
    width: "100%",
    position: "relative",
    // zIndex: 3,
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    // borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "0.5rem",
    fontSize: "3rem",
    color: "#ffffff",
    zIndex: 1,
    cursor: "pointer",
    height: "5rem",
    padding: "0.25rem",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: "1rem",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "0.5rem",
    fontSize: "3rem",
    color: "#ffffff",
    zIndex: 1,
    cursor: "pointer",
    height: "5rem",
    padding: "0.25rem",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: "1rem",
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyles = {
    margin: "0",
    cursor: "pointer",
    fontSize: "2rem",
  };

  const prevShot = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setUserInteraction(true);
  };

  const nextShot = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setUserInteraction(true);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    setUserInteraction(true);
  };

  const transitionSlide = () => {
    const nextBtn = document.getElementById("next-btn");
  };

  useEffect(() => {
    transitionSlide();
  }, [currentIndex]);

  return (
    <div style={sliderStyles}>
      {/* <div className="slide-cover"> */}
      <div className="navbar">
        <Link to="/">
          {/* <h1 id="site-title">The Reel Ones</h1> */}
          {/* <img src={siteLogo} id="site-logo" /> */}
          <img type="image/svg" src={troText} className="logo-svg" />
          {/* <h6 id="site-title">TRO</h6> */}
        </Link>
        <div className="site-nav-links">
          {/* <Link to="/films">Films</Link> */}
          {/* {token ? <Link to="/profile">Profile</Link> : <></>} */}
          {/* <Link to="/cart">Cart</Link> */}
          {!token ? (
            <Link to="/login" className="landing-page-nav-link">
              Sign In
            </Link>
          ) : (
            <></>
          )}
          <Link
            to="/api/docs"
            className="landing-page-nav-link"
            id="api-docs-link"
          >
            API Docs
          </Link>
          {token ? <Link onClick={logoutHandler}>Logout</Link> : <></>}
        </div>
      </div>
      <div className="landing-tagline">
        {/* <p>The greatest films of all time.</p> */}
        <label className="get-started">Let's get started</label>
        <span>
          <input
            type="text"
            className="landing-email-input"
            placeholder="Pick a username"
          />
          <button className="start-btn">Get Started &#x27A4;</button>
        </span>
      </div>
      <div style={leftArrowStyles} onClick={prevShot} id="prev-btn">
        &#x21d0;
      </div>
      <div style={rightArrowStyles} onClick={nextShot} id="next-btn">
        &#x21d2;
      </div>
      <div style={slideStyles}></div>
      {/* <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => {
          return (
            <div
              key={slideIndex}
              style={dotStyles}
              onClick={() => {
                goToSlide(slideIndex);
              }}
            >
              •
            </div>
          );
        })}
      </div> */}
      {/* </div> */}
    </div>
  );
};

export default ImageSlider;