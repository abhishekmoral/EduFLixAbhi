import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./home.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "../../components/testimonials/Testimonials";

const slides = [
  {
    image: "https://static.vecteezy.com/system/resources/previews/032/614/450/non_2x/top-view-of-school-equipment-arranged-in-a-frame-on-a-wooden-background-a-back-to-school-concept-featuring-educational-supplies-and-the-teacher-student-presentation-concept-ai-generative-photo.jpg",
    text: "Welcome to EduFlix - AKTU/CSS",
    subText: "Learn, Grow, Excel",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQEoSLRp06j-iW9x2IjpIyg7c1NYNzMMmuMK1KAXfKEIlvTazY5n9aXF6ZzNY8u0T_t1Y&usqp=CAU",
    text: "Explore Our Top Courses",
    subText: "Get career-ready with expert content",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQc5-ReTjzPDv-XA9buQ1uSFn_DA_k8rtlibHHOwj48-BWKZlY7OeJCAYf-Xtbdr1-ec&usqp=CAU",
    text: "Learn Anytime, Anywhere",
    subText: "Start your journey with EduFlix",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="home-slider"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="overlay">
                <div className="home-content">
                  <h1>{slide.text}</h1>
                  <p>{slide.subText}</p>
                  <button onClick={() => navigate("/courses")} className="common-btn">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <Testimonials />
    </div>
  );
};

export default Home;
