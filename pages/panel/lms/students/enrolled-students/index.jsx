import LMSLayout from "@/components/panel/lms/LMSLayout";
import PanelHeading from "@/components/ui/common/PanelHeading";
import { Card } from "antd";
import React from "react";
import { BiListCheck } from "react-icons/bi";

const EnrolledStudents = () => {
  return (
    <LMSLayout>
      <Card>
        <PanelHeading title={"All Student List"} Icon={<BiListCheck />} />
      </Card>
    </LMSLayout>
  );
};

export default EnrolledStudents;
