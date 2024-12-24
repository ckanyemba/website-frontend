import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { blogsEdit } from "../../features/blogsSlice";
import { PrimaryButton } from "./CommonStyled";

const EditBlog = ({ blogId }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { items, editStatus } = useSelector((state) => state.blogs);

  const [currentProd, setCurrentProd] = useState({});
  const [previewImg, setPreviewImg] = useState("");
  const [blogImg, setBlogImg] = useState("");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (open) {
      const selectedBlog = items.find((item) => item._id === blogId) || {};
      setCurrentProd(selectedBlog);
      setPreviewImg(selectedBlog.image?.url || "");
      setBlogImg("");
      setTitle(selectedBlog.title || "");
      setExcerpt(selectedBlog.excerpt || "");
      setCategory(selectedBlog.category || "");
      setDate(selectedBlog.date || "");
      setContent(selectedBlog.content || "");
    }
  }, [open, blogId, items]);

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      blogsEdit({
        blogImg,
        blog: {
          ...currentProd,
          title,
          excerpt,
          category,
          date,
          content
        }
      })
    );
  };

  return (
    <div>
      <EditButton onClick={handleClickOpen}>Edit</EditButton>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogTitle>Edit Post</DialogTitle>
        <DialogContent>
          <StyledEditProduct>
            <StyledForm onSubmit={handleSubmit}>
              <h3>Edit Post</h3>
              <input
                type="file"
                accept="image/*"
                onChange={handleBlogImageUpload}
              />
              <select
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              >
                <option value="">Select Title</option>
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
                type="text"
                required
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
              <PrimaryButton type="submit">
                {editStatus === "pending" ? "Submitting" : "Submit"}
              </PrimaryButton>
            </StyledForm>
            <ImagePreview>
              {blogImg ? (
                <img src={blogImg} alt="product image!" />
              ) : (
                <p>Image upload preview will appear here!</p>
              )}
            </ImagePreview>
          </StyledEditProduct>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditBlog;

const EditButton = styled.button`
  border: none;
  outline: none;
  padding: 3px 5px;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  background-color: #4b70e2;
`;

const StyledEditProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

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
