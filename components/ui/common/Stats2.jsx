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

const Stats2 = () => {
  return (
    <section className="counter__area pt-150">
      <div className="container">
        <div className="p-5 bg-white " style={{ borderRadius: "10px", boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)" }}>
          <div className="row">
            <SingleCount counter={1749} title="Enrolled Students" />
            <SingleCount counter={796} title="Live Classes" />
            <SingleCount counter={573} title="Student Waitlist" />
            <SingleCount counter={2739} title="Queries Answered" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats2;
