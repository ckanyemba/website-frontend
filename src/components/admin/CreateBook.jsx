import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { PrimaryButton } from "./CommonStyled";
import { booksCreate } from "../../features/booksSlice";

const CreateBook = () => {
  const dispatch = useDispatch();
  const { createStatus } = useSelector((state) => state.books);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [genre, setGenre] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [price, setPrice] = useState("");

  const handleBookImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFile(file);
  };

  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setCoverImage(reader.result);
      };
    } else {
      setCoverImage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      booksCreate({
        title,
        author,
        description,
        publicationDate,
        genre,
        image: coverImage,
        price
      })
    );
  };

  return (
    <StyledCreateBook>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Create New Book</h2>
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
        <InputWrapper>
          <label htmlFor="image">Cover Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleBookImageUpload}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </InputWrapper>
        <PrimaryButton type="submit">
          {createStatus === "pending" ? "Submitting" : "Submit"}
        </PrimaryButton>
      </StyledForm>
      <ImagePreview>
        {coverImage ? (
          <img src={coverImage} alt="Cover preview" />
        ) : (
          <p>Book image upload preview will appear here!</p>
        )}
      </ImagePreview>
    </StyledCreateBook>
  );
};

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

const StyledCreateBook = styled.div`
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

export default CreateBook;
