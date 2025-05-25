import React from "react";
import "./testimonials.css";
import abhishek from "../../assets/abhishek.jpg";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Aryan Varshney",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 2,
      name: "Chanchal Aggrawal",  
      position: "Student",
      message:  
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://cdn.pixabay.com/photo/2019/11/30/08/44/girl-4662826_1280.jpg",
    },
    {
      id: 3,
      name: "Priyanshu Shakya",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
        "https://150837384.v2.pressablecdn.com/wp-content/uploads/2018/12/DrBrianMcGowanHeadshot-crop.jpg",
    },
    {
      id: 4,
      name: "Abhishek Gurjar",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image: abhishek,
      
        
    },
  ];
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>  
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
