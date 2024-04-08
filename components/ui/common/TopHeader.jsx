import { Button, Drawer } from "antd";
import { CiLogin } from "react-icons/ci";
import { CgMenuLeft } from "react-icons/cg";
import { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import Btn from "./Btn";
import { useAuth } from "@/context/authContext";


export default function TopHeader() {
  const [auth] = useAuth();

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ marginBottom: "0px" }}>
      <div className="main-head">
        <div className="container d-flex justify-content-between py-1 px-2  ">

          <Logo />

          <div className="d-flex justify-content-center align-items-center">
            <div className="header-nav-list">
              <div className="d-flex gap-3 px-2 textColorLight" style={{ fontWeight: "550" }}>
                <span>
                  <Link href={"/"}> Home </Link>
                </span>
                <span>
                  <Link href={"/about-us"}> About </Link>
                </span>
                <span>
                  <Link href={"/programs"}> Programs </Link>
                </span>
                <span>
                  <Link href={"/workshops"}> Workshops </Link>
                </span>
                <span>
                  <Link href={"/how-it-works"}> How it works?</Link>
                </span>
                <span>
                  <Link href={"/blogs"}> Blogs </Link>
                </span>
              </div>
            </div>

            <div className="menu-icon mx-3" onClick={showDrawer} role="button">
              <CgMenuLeft size={30} className="textColor" />
            </div>

            <div style={{ borderLeft: "1px solid lightgrey" }} className="header-main-button px-2">
              {!auth?.token && <Btn className="myBtn" icon={<CiLogin size={20} className="textColor" />}>
                <Link href={'/enroll/program'}>Enroll Now</Link>
              </Btn>}


              {
                auth?.token && auth?.user?.role === "admin" && <Btn className="myBtn" >
                  <Link href={'/admin'}>Dashboard</Link>
                </Btn>
              }

              {
                auth?.token && auth?.user?.role === "student" && <Btn className="myBtn" >
                  <Link href={'/student/learning'}>Learning</Link>
                </Btn>
              }

              {
                auth?.token && auth?.user?.role === "instructor" && <Btn className="myBtn" >
                  <Link href={'/instructor'}>Teach</Link>
                </Btn>
              }
            </div>


          </div>
        </div>
      </div>

      <Drawer
        title={
          <div className="text-start">
            <Logo />
          </div>
        }
        width={250}
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div className="d-flex flex-column gap-3 px-2 textColorLight" style={{ fontWeight: "550" }}>
          <span>Home</span>
          <span>About</span>
          <span>Programs</span>
          <span>Workshops</span>
          <span>How it works?</span>
          <span>Blogs</span>
{/* 
          {!auth?.token && <Btn className="myBtn" icon={<CiLogin size={20} className="textColor" />}>
            <Link href={'/enroll/program'}>Enroll Now</Link>
          </Btn>}


          {
            auth?.token && auth?.user?.role === "admin" && <Btn className="myBtn" >
              <Link href={'/admin'}>Dashboard</Link>
            </Btn>
          }

          {
            auth?.token && auth?.user?.role === "student" && <Btn className="myBtn" >
              <Link href={'/student/learning'}>Learning</Link>
            </Btn>
          }

          {
            auth?.token && auth?.user?.role === "instructor" && <Btn className="myBtn" >
              <Link href={'/instructor'}>Teach</Link>
            </Btn>
          } */}
        </div>

      </Drawer>
    </div>
  );
}
