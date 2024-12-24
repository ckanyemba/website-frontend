import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { PrimaryButton } from "./CommonStyled";
import { blogsCreate } from "../../features/blogsSlice";

const CreateBlog = () => {
  const dispatch = useDispatch();
  const createStatus = useSelector((state) => state.blogs.createStatus);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [blogImg, setBlogImg] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleBlogImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFile(file);
  };

  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setBlogImg(reader.result);
      };
    } else {
      setBlogImg("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      blogsCreate({
        title,
        content,
        date,
        category,
        excerpt,
        image: blogImg
      })
    );
  };

  return (
    <StyledCreateProduct>
      <StyledForm onSubmit={handleSubmit}>
        <h3>Create a Post</h3>
        <input
          type="file"
          accept="image/*"
          onChange={handleBlogImageUpload}
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Politics">Politics</option>
          <option value="Culture">Culture</option>
          <option value="Freedom">Freedom</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          required
          placeholder="Excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
        />
        <input
          type="date"
          required
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Provide Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Provide Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <PrimaryButton type="submit">
          {createStatus === "pending" ? "Submitting" : "Submit"}
        </PrimaryButton>
      </StyledForm>
      <ImagePreview>
        {blogImg ? (
          <img src={blogImg} alt="error!" />
        ) : (
          <p>Blog image upload preview will appear here!</p>
        )}
      </ImagePreview>
    </StyledCreateProduct>
  );
};

export default CreateBlog;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;
  select,
  input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(182, 182, 182);
    margin: 0.3rem 0;
    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }
  select {
    color: rgb(95, 95, 95);
  }
`;

const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(78, 78, 78);
  img {
    max-width: 100%;
  }
`;
