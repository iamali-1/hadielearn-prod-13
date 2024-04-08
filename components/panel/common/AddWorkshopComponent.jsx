import React, { useState } from "react";
import WorkshopForm from "./workshop/WorkshopForm";
import { useCreateWorkshop } from "@/actions/_workshops";

const initValues = {
  title: "",
  breadTitle: "",
  content: "",
  outlines: "",
  image: "",
  conclusion: "",
  dateAndTime: "",
  instructor: "",
  zoomLink: "",
  meetingId: "",
  pascodeId: "",
  meetingTiming: "",
  tags: "",
};

const AddWorkshopComponent = () => {
  const [_values, _setValues] = useState(initValues);
  const { createSubmit, loading } = useCreateWorkshop();
  const [cats, setCats] = useState([]);

  const handleChange = (e) => {
    if (e.target.files) {
      _setValues((prev) => ({ ...prev, image: e.target.files[0] }));
    } else {
      const { name, value } = e.target;
      _setValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <>
      <WorkshopForm
        handleSubmit={createSubmit}
        loading={loading}
        from="workshop-create"
        handleChange={handleChange}
        _values={_values}
        _setValues={_setValues}
        cats={cats}
        setCats={setCats}
      />
    </>
  );
};

export default AddWorkshopComponent;
