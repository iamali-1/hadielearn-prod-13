import { useCreateBlog } from "@/actions/_blogs";
import { useCategory } from "@/actions/_category";
import { useAuth } from "@/context/authContext";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import BlogForm from "./blog/BlogForm";
import { API } from "@/config/APIs";
import axios from "axios";

const initialState = {
  slug: "",
  seoTitle: "",
  metaDescription: "",
  title: "",
  tags: "",
  description: "",
  content: null,
  image: "",
  preImage: "",
};

const EditBlogComponent = ({ id }) => {
  const [auth] = useAuth();
  const authToken = auth && auth.token;
  const [_values, _setValues] = useState(initialState);
  const [cats, setCats] = useState([]);
  const { create, loading } = useCreateBlog();
  const [singleLoading, setSingleLoading] = useState(false);

  const changeHandler = (e) => {
    if (e.target.files) {
      _setValues((prevValues) => ({ ...prevValues, image: e.target.files[0] }));
    } else {
      const { name, value } = e.target;
      _setValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
  };

  const fetchSingleBlog = async () => {
    try {
      setSingleLoading(true);
      const { data } = await axios.get(`${API}/admin/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });

      console.log(data);

      _setValues(data);
      _setValues((prev) => ({ ...prev, preImage: data?.image }));
      _setValues((prev) => ({ ...prev, image: "" }));

      if (Array.isArray(data?.tags))
        _setValues((prevFormData) => ({
          ...prevFormData,
          tags: data?.tags.join(", "),
        }));

      let arr = [];
      data.categories.map((c) => arr.push(c.name));
      setCats(arr);
      setSingleLoading(false);
    } catch (error) {
      console.log(error);
      setSingleLoading(false);
      toast.error("Failed, try again.");
    }
  };

  useEffect(() => {
    if (id && authToken) {
      fetchSingleBlog();
    }
  }, [authToken, id, fetchSingleBlog]);

  const handleSubmit = () => create(`blog/${id}`, { ..._values, image: _values.preImage ? _values.preImage : _values.image, categories: cats });

  return (
    <>
      {singleLoading && "loading..."}
      <BlogForm
        from="blog-edit"
        _values={_values}
        _setValues={_setValues}
        handleSubmit={handleSubmit}
        submitLoading={loading}
        changeHandler={changeHandler}
        setCats={setCats}
        cats={cats}
      />
    </>
  );
};

export default EditBlogComponent;
