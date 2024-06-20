import { Card, Grid } from "antd";
import React, { useState } from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { IoIosGitNetwork } from "react-icons/io";
import { AiOutlineSafetyCertificate } from "react-icons/ai";



const SingleCount = ({ counter, title, color }) => {
  const [viewCountUp, setViewCountUp] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setViewCountUp(true);
    }
  };
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
        <div className="counter__item text-center mb-30">
          <h2 className={`counter ${color && color}`}>
            <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 10 }} delayedCall>
              <>
                <CountUp end={viewCountUp ? counter : 0} duration={8} /> <span>+</span>
              </>
            </VisibilitySensor>
          </h2>
          <span>{title}</span>
        </div>
      </div>
    </>
  );
};


const CounterBox = ({ counter, title, color, image, Icon }) => {
  const [viewCountUp, setViewCountUp] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setViewCountUp(true);
    }
  };
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-1 ">
      <Card hoverable>
        <div className="d-flex align-items-center gap-3" style={{ color: "#135c6c" }}>
          {Icon && Icon}
          {image && <img src={`images/hero/${image}.svg`} alt="live class" height={60} />}
          <div className="d-flex flex-column ">
            <b style={{ color: "#135c6c", fontSize: "30px" }}>
              <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 10 }} delayedCall>
                <>
                  <CountUp end={viewCountUp ? counter : 0} duration={8} /> <span>+</span>
                </>
              </VisibilitySensor>
            </b>
            <span>{title}</span>
          </div>
        </div >
      </Card>
    </div >
  )
}

const Stats2 = () => {

  const points = Grid.useBreakpoint()

  return (
    <section className={`counter__area ${points.md ? 'pt-150' : 'pt-10'}`}>
      <div className="container">

        <div className="row mb-30">


          {/* <SingleCount counter={1500} title="Live classes" />
            <SingleCount counter={30000} title="Enrolled Students" />
            <SingleCount counter={3000} title="Students on waitlist" />
            <SingleCount counter={50000} title="Queries answered" /> */}

          <CounterBox counter={40000} title="Enrolled students" image={'enrolled_students'} />
          <CounterBox counter={17000} title="Students Accommodated" image={'queries_answered'} />
          <CounterBox counter={4000} title="Certified students" Icon={<AiOutlineSafetyCertificate size={50} />} />
          <CounterBox counter={600} title="Internships Provided" Icon={<IoIosGitNetwork size={50} />} />

          <CounterBox counter={950} title="Success Stories" image={'live_classes'} />


        </div>
      </div>
    </section>
  );
};

export default Stats2;
