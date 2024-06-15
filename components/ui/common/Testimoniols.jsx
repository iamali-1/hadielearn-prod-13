import { Avatar, Card } from "antd";
import React from "react";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";

const Testimonials = () => {
  // slick setting
  const settings = {
    autoplay: false,
    autoplaySpeed: 10000,
    dots: true,
    fade: false,
    arrows: false,
  };

  const testimonialData = [
    {
      id: 1,
      name: "Alizah Jamal",
      content:
        "The 2-month graphic designing course has been amazing so far! I've gained a ton of new knowledge and the instructor is super helpful and supportive. It's been a fantastic experience!",
    },
    {
      id: 2,
      name: "Owais Khanzada",
      content:
        "Experience is amazing, being at Karachi and connecting with Hadi e learning was super smooth, and the mentor Ms Zahra Mohsin she's got immense knowledge regarding SEO , her friendly and cooperative nature makes it even more simple and easier to understand, highly recommended ☺️",
    },
    {
      id: 3,
      name: "Ubaid Ali",
      content:
        "I've been learning React JS through Hadi E-learning, and I can't express how grateful I am for the experience. The way they present complex concepts with simplicity and clarity is truly commendable. The examples they provide are not only relevant but also incredibly helpful in solidifying my understanding. Thanks to their efforts, I've gained a new level of confidence in my React skills.",
    },

    {
      id: 4,
      name: "Ayesha Hafeez",
      content:
        "I really want to appreciate Hadi eLearning platform because they provide high quality education in their classes. Currently, i am enroll in Seo course and the instructor explain everything very well. It's a best platform to learn and grow.",
    },

    {
      id: 5,
      name: "M. Zain Hassan Sabri",
      content:
        "Hadi E-Learning is a great platform for students who wants to learn new things while sitting at home and the tutors are much better than any other institute. They make sure you learn everything and teaches you in the best way possible.",
    },

    {
      id: 6,
      name: "Jannat Awan",
      content:
        "I recently had the opportunity to enroll in the Hadi E-learning Free WordPress Course, and I must say it exceeded my expectations. The course content was comprehensive and well-structured, making it easy for beginners like me to grasp the fundamentals of WordPress.",
    },
  ];

  return (
    <>
      <section
        className="testimonial__area pb-140 pt-50"
        style={{
          // backgroundColor: " rgba(49, 175, 152, 1)"
          backgroundImage: "linear-gradient(329deg, rgba(49, 175, 152, 1) 0%, rgba(15, 63, 93, 1) 100%)",
        }}
      >
        <div className="container ">

          {/* <div className="section__title section__title-3 mb-30">
            <span className="">Testimonials</span>
            <h2 className="">What students are saying</h2>
          </div> */}

          {/* <div className="mb-15">
            <Marquee gradient={false} speed={60} pauseOnHover={true} pauseOnClick={true} delay={0} play={true} direction="right">
              {
                testimonialData?.map(x =>
                  <Card hoverable className="mx-4 my-2 " key={x.id} style={{ width: "350px", }}>

                    <div className="d-flex flex-column align-items-start gap-3 ">
                      <span>"Hadi E-LEARNING's graphic designing course was comprehensive and well-structured. I gained valuable skills and confidence, thanks to the supportive instructors. Ready to take on real-world projects!"</span>
                      <div className="d-flex  align-items-center gap-2">
                        <Avatar src="images/testimonials/user.webp" size={'large'} />
                        <b>{x.name}</b>
                      </div>
                    </div>

                  </Card>
                )
              }
            </Marquee >

          </div>

          <Marquee gradient={false} speed={40} pauseOnHover={true} pauseOnClick={true} delay={0} play={true} direction="left">
            {
              testimonialData?.map(x =>
                <Card hoverable className="mx-4 my-2 " key={x.id} style={{ width: "350px", }}>

                  <div className="d-flex flex-column align-items-start gap-3 ">
                    <span>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying</span>
                    <div className="d-flex  align-items-center gap-2">
                      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" size={'large'} />
                      <b>{x.name}</b>
                    </div>
                  </div>

                </Card>
              )
            }
          </Marquee > */}



          <div className="section__title section__title-3 mb-30">
            <span className="white-color">Testimonials</span>
            <h2 className="white-color">What students are saying</h2>
          </div>

          <div className="row">
            <div className="col-12 ">
              <Slider className="testimonial__slider" {...settings}>
                {testimonialData.map((testimonial, index) => {
                  return (
                    <div key={index} className="testimonial__item ">
                      <div className="col-xl-5 col-lg-6 ">
                        <div className="testimonial__content ">
                          <div className="section__title section__title-3 mb-30">
                            <span className="white-color">{testimonial.title}</span>
                            <h2 className="white-color">{testimonial.subtitle}</h2>
                          </div>
                          <p className="white-color" style={{ fontSize: "18px" }}>
                            {testimonial.content}
                          </p>
                          <div className="testimonial__author d-flex align-items-center">
                            <div className="quote mr-20">
                              <img src="/images/common/quote.png" alt="quote" />
                            </div>
                            <div className="testimonial__info">
                              <h3 className="white-color">{testimonial.name}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7 col-lg-6 ">
                        <div className="testimonial__thumb m-img text-end pt-120">
                          <img src="/images/common/testis.png" alt="testimonial" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
