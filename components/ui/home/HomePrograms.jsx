// import React from "react";

// import Slider from "react-slick";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import Link from "next/link";
// import CourseCard from "./CourseCard";

// const HomePrograms = ({ courses }) => {
//   function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return <AiOutlineArrowRight id="arrowBtns" onClick={onClick} className={className} size={25} color="#0f3f5d" />;
//   }

//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return <AiOutlineArrowLeft id="arrowBtns" onClick={onClick} className={className} size={25} color="#0f3f5d" />;
//   }

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     slidesToShow: 3,
//     slidesToScroll: 2,
//     responsive: [
//       {
//         breakpoint: 992, // Medium screens
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 0,
//         },
//       },
//       {
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 3,
//         },
//       },
//     ],
//   };
//   const filtered = courses?.filter((x) => x._doc.show2 === true);
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-xl-7">
//           <div className="mb-5">
//             <h2 className="textColor">
//               <b>Programs Hadi is offering</b>
//             </h2>
//             <i style={{ fontSize: "18px" }}>
//               We invite you to explore our
//               <Link href="/programs" className="text-primary">
//                 courses
//               </Link>
//               and discover the many benefits of Hadi E-Learning.
//             </i>
//           </div>
//         </div>
//       </div>

//       <Slider className="project__slider" {...settings}>
//         {filtered?.slice(0, 6)?.map((x, index) => (
//           <React.Fragment key={index}>{x._doc.show2 && <CourseCard x={x} />}</React.Fragment>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default HomePrograms;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toImageUrl } from "@/config/APIs";
import { Rate } from "antd";
import Link from "next/link";
import CourseCard from "../common/CourseCard";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const PreviousArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-prev" onClick={onClick}>
      {/* <BiLeftArrow color="black" /> */}
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-next" onClick={onClick}>
      {/* <BiRightArrow color="black" /> */}
    </div>
  );
};

const giveSomeRates = (course) => {
  return course.includes("React")
    ? 5
    : course.includes("MERN")
    ? 4.5
    : course.includes("SEO")
    ? 4.8
    : course.includes("Shopify")
    ? 4.6
    : course.includes("Content")
    ? 4.7
    : course.includes("Designing")
    ? 5
    : 4.5;
};

const HomePrograms = ({ courses }) => {
  const settings = {
    infinite: false,
    dots: true,
    arrows: true,
    autoplay: false,
    speed: 1100,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const filtered = courses?.filter((x) => x._doc.show2 === true);
  return (
    <section style={{ position: "relative" }}>
      <img src="/images/grid/gird-5.jpg" alt="background" className="position-absolute " style={{ color: "transparent", zIndex: "-1", top: 0, width: "100%", height: "100%" }} />
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <div className="section-title section__title-3 ">
              <h2>Programs Hadi is offering </h2>
              <p style={{ fontSize: "18px" }}>
                We invite you to explore our{" "}
                <Link href="/programs" className="text-primary">
                  courses
                </Link>{" "}
                and discover the many benefits of Hadi E-Learning.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="timeline-carousel">
        <div className="container">
          <Slider {...settings}>
            {filtered?.slice(0, 6)?.map((x, index) => (
              <React.Fragment key={index}>{x._doc.show2 && <CourseCard x={x} />}</React.Fragment>
            ))}
          </Slider>
        </div>
      </section>
    </section>
  );
};

export default HomePrograms;
