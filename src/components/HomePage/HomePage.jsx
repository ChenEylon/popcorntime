import './home-page.css'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

function HomePage({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ff00008e",
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };
  return (
    <div className="home-page-container">
      <h1 className="home-page-title">השכרת ציוד למסיבות</h1>
      <h2 className="home-page-title">!ברוכים הבאים לפופקורן אירועים</h2>
      <div className="carousel">
        <div className="carousel-images">
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              variants={slideVariants}
            />
          </AnimatePresence>
          <div className="slide_direction">
            <motion.div
              variants={slidersVariants}
              whileHover="hover"
              className="left"
              onClick={handlePrevious}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="0"
                viewBox="0 96 960 960"
                width="20"
              >
                <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
              </svg>
            </motion.div>
            <motion.div
              variants={slidersVariants}
              whileHover="hover"
              className="right"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="0"
                viewBox="0 96 960 960"
                width="20"
              >
                <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
              </svg>
            </motion.div>
          </div>
        </div>
        <div className="carousel-indicator">
          {images.map((_, index) => (
            <motion.div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
              initial="initial"
              animate={currentIndex === index ? "animate" : ""}
              whileHover="hover"
              variants={dotsVariants}
            ></motion.div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="home-page-sec-title">?מי אנחנו</h1>
        <h2 className='home-page-about'>אנחנו פופקורן אירועים, המקור המוביל שלך לדוכנים אירועים. אנו מתמחים בהשכרת מכונות באיכות מעולה, מה שהופך את האירועים שלכם לבלתי נשכחים. ממפגשים משפחתיים ועד לפסטיבלים בקנה מידה גדול, דאגנו לכם. סמכו עלינו על ציוד אמין ושירות יוצא דופן. האירוע שלך, המכונות שלנו - התאמה מושלמת</h2>
      </div>
      <div>
        <h1 className="home-page-sec-title" style={{ marginBottom: '20px' }}>:המכונות שלנו</h1>
        <div class="wrapper">
          <Link className='a' to={'/products'}><span>למכונות</span></Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
