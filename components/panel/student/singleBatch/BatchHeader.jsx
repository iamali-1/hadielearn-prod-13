import { styles } from "@/config/styles";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Drawer, Grid } from "antd";
import React, { useState } from "react";
import LeftColMenus from "./LeftColMenus";
import { MdWebAsset } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import BatchRightCol from "./BatchRightCol";
import { useAuth } from "@/context/authContext";
import InstBatchRightCol from "../../instructor/singleBatch/InstBatchRightCol";

const { useBreakpoint } = Grid;

const BatchHeader = ({ setShowCenteral, showCenteral }) => {
  const [auth] = useAuth();
  const role = auth?.user?.role;

  const points = Grid.useBreakpoint();

  const breakpoints = useBreakpoint();
  const [drawerVisibility, setDrawerVisibility] = useState(false);
  const [drawerVisibility2, setDrawerVisibility2] = useState(false);

  return (
    <>
      <div className="pb-2 border-bottom d-flex flex-row justify-content-between align-items-center ">
        {!breakpoints.md && <MenuOutlined style={{ color: styles.primaryColor }} onClick={() => setDrawerVisibility(true)} />}
        <span style={{ color: styles.primaryColor, fontWeight: "600" }}>Welcome {auth?.user?.name}</span>
        <div className="d-flex flex-row justify-content-center align-items-center gap-2" style={{ color: styles.primaryColor, fontWeight: "600" }}>
          {/* <span className="d-flex flex-row justify-content-center align-items-center gap-1 border-end px-1">
            {role === "student" ? (
              <>
                <FiExternalLink /> Join Live
              </>
            ) : (
              role === "instructor" && (
                <>
                  <FiExternalLink /> Update Link
                </>
              )
            )}
          </span> */}
          {!points.md && (
            <span className="d-flex flex-row justify-content-center align-items-center " onClick={() => setDrawerVisibility2(true)}>
              <MdWebAsset />
              Assets
            </span>
          )}
        </div>
      </div>
      <Drawer
        // style={{ background: "linear-gradient(329deg,#31af98,#0f3f5d)" }}
        placement="left"
        closable={false}
        width={250}
        onClose={() => setDrawerVisibility(false)}
        open={drawerVisibility}
        extra={<CloseOutlined onClick={() => setDrawerVisibility(false)} />}
      >
        <LeftColMenus setShowCenteral={setShowCenteral} showCenteral={showCenteral} />
      </Drawer>

      <Drawer
        // style={{ background: "linear-gradient(329deg,#31af98,#0f3f5d)" }}
        placement="right"
        closable={false}
        width={250}
        onClose={() => setDrawerVisibility2(false)}
        open={drawerVisibility2}
        extra={<CloseOutlined onClick={() => setDrawerVisibility2(false)} />}
      >
        {role === "student" && <BatchRightCol />}
        {role === "instructor" && <InstBatchRightCol />}
      </Drawer>
    </>
  );
};

export default BatchHeader;
