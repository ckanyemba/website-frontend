import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { booksEdit } from "../../features/booksSlice";
import { PrimaryButton } from "./CommonStyled";

const EditBook = (bookId) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { items, editStatus } = useSelector((state) => state.books);

  const [previewImg, setPreviewImg] = useState("");
  const [bookImg, setBookImg] = useState("");
  const [currentBook, setCurrentBook] = useState({});
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    if (open) {
      const selectedBook = items.find((item) => item._id === bookId) || {};
      setCurrentBook(selectedBook);
      setTitle(selectedBook.title || "");
      setAuthor(selectedBook.author || "");
      setDescription(selectedBook.description || "");
      setPublicationDate(selectedBook.publicationDate || "");
      setGenre(selectedBook.genre || "");
      setBookImg(selectedBook.bookImg?.url || "");
    }
  }, [open, bookId, items]);

  const handleBookImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFile(file);
  };

  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setBookImg(reader.result);
      };
    } else {
      setBookImg("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      booksEdit({
        bookImg,
        book: {
          ...currentBook,
          title,
          author,
          description,
          publicationDate,
          genre
        }
      })
    );
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              <InputWrapper>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleBookImageUpload}
                />
              </InputWrapper>
              <InputWrapper>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </InputWrapper>

              <InputWrapper>
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="author">Author:</label>
                <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="publicationDate">Publication Date:</label>
                <input
                  type="date"
                  id="publicationDate"
                  value={publicationDate}
                  onChange={(e) => setPublicationDate(e.target.value)}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="genre">Genre:</label>
                <input
                  type="text"
                  id="genre"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  required
                />
              </InputWrapper>

              <PrimaryButton type="submit">
                {editStatus === "pending" ? "Submitting" : "Submit"}
              </PrimaryButton>
            </StyledForm>
            <ImagePreview>
              {bookImg ? (
                <img src={bookImg} alt="product image!" />
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

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
`;

export default EditBook;
