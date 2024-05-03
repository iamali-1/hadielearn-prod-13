import LMSLayout from "@/components/panel/lms/LMSLayout";

import { Card, Grid } from "antd";
import { useState } from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";



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

const LMS = () => {
  return <LMSLayout>
    <div className="row mb-30">

      <CounterBox counter={1500} title="Total Enrollments" image={'live_classes'} />
      <CounterBox counter={30000} title="Courses" image={'enrolled_Students'} />
      <CounterBox counter={3000} title="Workshops" image={'students_on_waitlist'} />
      <CounterBox counter={50000} title="Students" image={'queries_answered'} />

    </div>


  </LMSLayout>;
};

export default LMS;
