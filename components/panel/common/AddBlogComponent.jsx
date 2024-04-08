import { useCreateBlog } from "@/actions/_blogs";
import PanelHeading from "@/components/ui/common/PanelHeading";
import { Card } from "antd";
import React, { useState } from "react";
import { MdCreate } from "react-icons/md";
import BlogForm from "./blog/BlogForm";

const initialState = {
  slug: "",
  seoTitle: "",
  metaDescription: "",
  title: "",
  tags: "",
  description: "",
  content: "",
  image: "",
};

const AddBlogComponent = () => {
  const [_values, _setValues] = useState(initialState);
  const [cats, setCats] = useState([]);
  const { create, loading } = useCreateBlog();

  const changeHandler = (e) => {
    if (e.target.files) {
      _setValues((prevValues) => ({ ...prevValues, image: e.target.files[0] }));
    } else {
      const { name, value } = e.target;
      _setValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
  };
  const handleSubmit = () => create("create-blog", { ..._values, categories: cats });

  return (
    <Card>
      <PanelHeading Icon={<MdCreate />} title="Add Blog" para={"Please upload image in webp."} />

      <BlogForm
        from="blog-create"
        _values={_values}
        _setValues={_setValues}
        handleSubmit={handleSubmit}
        submitLoading={loading}
        changeHandler={changeHandler}
        setCats={setCats}
        cats={cats}
      />
    </Card>
  );
};

export default AddBlogComponent;
