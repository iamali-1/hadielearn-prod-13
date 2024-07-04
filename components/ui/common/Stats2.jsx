import { Card, Grid } from "antd";
import React, { useEffect, useState } from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { IoIosGitNetwork } from "react-icons/io";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import axios from "axios";
import { API } from "@/config/APIs";
import toast from "react-hot-toast";



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


const CounterBox = ({ counter, title, color, image, Icon, from }) => {
  const [viewCountUp, setViewCountUp] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setViewCountUp(true);
    }
  };
  return (
    <div className="col-12 col-lg-3 col-md-6  mb-1 ">
      <Card hoverable>
        <div className="d-flex align-items-center gap-3" style={{ color: "#135c6c" }}>
          {Icon && Icon}
          {image && <img src={`images/hero/${image}.svg`} alt="live class" height={60} />}
          <div className="d-flex flex-column ">
            <b style={{ color: "#135c6c", fontSize: "30px" }}>
              <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 10 }} delayedCall>
                <>
                  <CountUp end={viewCountUp ? counter : 0} duration={8} /> <span>{from === "admins" ? "" : "+"}</span>
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

const Stats2 = ({ from = "homepage" }) => {

  const points = Grid.useBreakpoint()

  const [Total, setTotal] = useState(0)

  const enrollmentCount = async () => {
    try {
      const { data } = await axios.get(`${API}/enrollment-count`);
      setTotal(data?.total - 619)
    } catch (error) {
      toast.error("Please try again...");
    }
  }

  useEffect(() => {
    enrollmentCount()
  }, []);

  return (
    <section className={`counter__area ${points.md ? `${from === "admins" ? "" : 'pt-150'} ` : 'pt-10'}`}>
      <div className="container">
        <div className="row mb-30">
          <CounterBox from={from} counter={Total} title="Enrolled students" image={'enrolled_students'} />
          <CounterBox from={from} counter={from === "admins" ? 17300 : 17000} title="Students Accommodated" image={'queries_answered'} />
          <CounterBox from={from} counter={from === "admins" ? 4015 : 4000} title="Certified students" Icon={<AiOutlineSafetyCertificate size={50} />} />
          <CounterBox from={from} counter={from === "admins" ? 609 : 600} title="Internships Provided" Icon={<IoIosGitNetwork size={50} />} />
          <CounterBox from={"homepage"} counter={950} title="Success Stories" image={'live_classes'} />
        </div>
      </div>
    </section>
  );
};

export default Stats2;
