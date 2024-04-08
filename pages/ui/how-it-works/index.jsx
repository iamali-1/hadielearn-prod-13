import CTA from "@/components/ui/common/CTA";
import Footer from "@/components/ui/common/Footer";
import PageHeading from "@/components/ui/common/PageHeading";
import React from "react";
import FAQs from "../faqs";
import Price from "@/components/ui/common/Price";
import Tops from "@/components/ui/common/Tops";

const HowItWorks = () => {
  return (
    <>
      <Tops
        header
        grid
        title={
          "How our best online learning platform, Hadi e-learning works"
        }
        desc={
          "Go through these simple steps and enroll now in the most suitable course to make your mark in this digital world with the best online learning platform, hadi e-learning."
        }
        conLink={"https://hadielearning.com/how-it-works"}
      />

      <PageHeading
        title={"How it works?"}
        para={
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
        }
      />
      <div className="container pt-90">
        <div className="boxes">
          <div id="leftBox">
            <h1>01</h1>
            <div className="left-box-content">
              <h2 className="myH2">Explore our available program list</h2>
            </div>
            <div className="left-box-image">
              <img src="/images/how-it-works/1st.png" />
            </div>
          </div>

          <div id="rightBox">
            <div className="right-box-image">
              <img src="/images/how-it-works/2nd.png" />
            </div>

            <div className="right-box-content">
              <h2 className="myH2">Chat with our student coordinator to learn more about your options</h2>
            </div>
            <h1>02</h1>
          </div>

          <div id="leftBox2">
            <h1>03</h1>
            <div className="left-box-content2">
              <h2 className="myH2">Choose the program that suits you the best </h2>
            </div>
            <div className="left-box-image2">
              <img src="/images/how-it-works/3rd.png" />
            </div>
          </div>

          <div id="rightBox">
            <div className="right-box-image2">
              <img src="/images/how-it-works/4th.png" />
            </div>

            <div className="right-box-content">
              <h2 className="myH2">Fill out the registration form and get the link to the relevant entry test.</h2>
            </div>

            <h1>04</h1>
          </div>

          <div id="leftBox3">
            <h1>05</h1>
            <div className="left-box-content3">
              <h2 className="myH2">Take the Test</h2>
            </div>
            <div className="left-box-image3">
              <img src="/images/how-it-works/5th.png" />
            </div>
          </div>

          <div id="rightBox-pass">
            <div className="right-box-pass-image2">
              <img src="/images/how-it-works/Pass.png" />
            </div>

            <div className="right-box-content-pass">
              <div className="">
                <h2 className="text-start">Pass</h2>
                <h5>You will be added to the waitlist and will be entertained on a first come first basis.</h5>
              </div>
            </div>

            <h1>5.1</h1>
          </div>

          <div id="leftBox3-fail">
            <h1>5.2</h1>
            <div className="left-box-content3-fail">
              {/* <a href="#leftBox2-fail"> */}
              <h2 className="myH2">Fail</h2>
              <h5 style={{ maxWidth: "300px" }}>Dont worry! Get back to step 5 and reattempt.</h5>
              {/* </a> */}
            </div>
            <div className="left-box-image3-fail">
              <img src="/images/how-it-works/Fail.png" />
            </div>
          </div>

          <div id="rightBox3">
            <div className="right-box-image3">
              <img src="/images/how-it-works/6th.png" />
            </div>

            <div className="right-box-content3">
              <h2 className="myH2">Learn about the course outline, outcomes, and schedules</h2>
            </div>
            <h1>06</h1>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src="/images/how-it-works/stars.png" />
          <div>
            <h2 className="star-heading">Brighten up your future with our specially designed programs</h2>
          </div>
        </div>
      </div>

      <CTA />
      {/* <Price /> */}
      <FAQs list={3} component={false} />
      <Footer />
    </>
  );
};

export default HowItWorks;
