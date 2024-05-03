import { Card, Grid } from "antd";
import React, { useState } from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

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


const CounterBox = ({ counter, title, color, image }) => {
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
          <img src={`images/hero/${image}.svg`} alt="live class" height={60} />
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

          <CounterBox counter={1500} title="Live classes" image={'live_classes'} />
          <CounterBox counter={30000} title="Enrolled Students" image={'enrolled_Students'} />
          <CounterBox counter={3000} title="Students on waitlist" image={'students_on_waitlist'} />
          <CounterBox counter={50000} title="Queries answered" image={'queries_answered'} />
        </div>
      </div>
    </section>
  );
};

export default Stats2;
