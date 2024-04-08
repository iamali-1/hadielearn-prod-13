import { FaUser } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { Card, Rate } from "antd";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsCalendar } from "react-icons/bs";
import Link from "next/link";
import { toImageUrl } from "@/config/APIs";
import { useScreens } from "./screens";
import { useRouter } from "next/router";

const checkStringTitle = (title) => {
  if (title?.length > 25) {
    return title.substring(0, 25) + "...";
  } else {
    return title;
  }
};

const CourseCard = ({ x }) => {
  const { screen } = useScreens();
  const router = useRouter()
  const DurationsTOHrs = (classes) => {
    const hoursPerClass = 1.5;

    const totalCourseHours = classes * hoursPerClass;

    return totalCourseHours;
  };

  const giveSomeRates = (course) => {
    return course.includes("React")
      ? 5
      : course.includes("MERN")
        ? 4.5
        : course.includes("SEO")
          ? 4.8
          : course.includes("Shopify")
            ? 4.6
            : course.includes("Content")
              ? 4.7
              : course.includes("Designing")
                ? 5
                : 4.5;
  };

  return (
    <>
      <Card onClick={() => router.push(`/program/${x._doc.slug}`)}
        hoverable={true}
        className="mx-2"
        cover={
          <>
            {x._doc.image?.url?.includes("courseImages") ? (
              <img src={toImageUrl(x._doc.image?.url)} alt="" height={screen.md ? 240 : !screen.md && 160} />
            ) : (
              <img src={x._doc.image?.url} alt="" height={screen.md ? 240 : !screen.md && 160} />
            )}
          </>
        }
        actions={[
          <div
            key={"instructor"}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              marginLeft: "20px",
            }}
          >
            {x._doc.instructor && !x._doc.instructor?.image ? <FaUser size={25} color="gray" /> : <img src={x._doc.instructor?.image.url} alt="" height={30} />}
            <span
              style={{
                color: "#0f3f5d",
                fontWeight: "500",
                marginLeft: "10px",
              }}
            >
              {x._doc.instructor?.name}
            </span>
          </div>,
          <span key={"price"} style={{ fontWeight: "bold", color: "#0f3f5d" }}>
            {x._doc.regFee == 0 && "Free"} {x._doc.regFee != 0 && "PKR" + " " + x._doc.regFee?.toLocaleString()}
          </span>,
        ]}
      >
        <div className="d-flex align-items-center gap-2 mb-3">
          <Rate value={giveSomeRates(x._doc?.title)} style={{ color: "#0f3f5d", fontSize: "10px" }} />
          <small style={{ fontWeight: "bold" }}>{giveSomeRates(x._doc?.title)}</small>
        </div>
        <h3 style={{ fontSize: "22px" }} role="button">
          <Link href={`/program/${x._doc.slug}`}>{checkStringTitle(x._doc.title)}</Link>
        </h3>
        <div className={`mt-3  d-flex align-items-center justify-content-between `}>
          <div className="d-flex align-items-center gap-1">
            <BsCalendar size={15} />
            <small style={{ fontSize: "15px" }}>{x._doc.duration}</small>
          </div>
          {screen.md && (
            <div className="d-flex align-items-center gap-1">
              <HiOutlineDocumentText size={18} />
              <small style={{ fontSize: "15px" }}>{x._doc.classes} classes</small>
            </div>
          )}
          <div className="d-flex align-items-center gap-1">
            <IoMdTime size={18} />
            <small style={{ fontSize: "15px" }}>{DurationsTOHrs(x._doc.classes)} hrs</small>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CourseCard;
