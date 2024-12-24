import styled from "styled-components";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { booksDelete } from "../../../features/booksSlice";
import EditBook from "../EditBook";

const BooksList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.books);

  const rows =
    items &&
    items.map((item) => {
      return {
        id: item._id,
        title: item.title,
        author: item.author,
        description: item.description,
        genre: item.genre,
        publicationDate: item.publicationDate,
        image: item.image,
        price: item.price
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "title", headerName: "Title", width: 130 },
    { field: "author", headerName: "Author", width: 130 },
    {
      field: "description",
      headerName: "Description",
      width: 180,
      renderCell: (params) => (
        <div>
          <p>{params.row.description}</p>
        </div>
      )
    },
    { field: "genre", headerName: "Genre", width: 130 },
    { field: "publicationDate", headerName: "Publication Date", width: 130 },
    {
      field: "image",
      headerName: "Cover Image",
      width: 80,
      renderCell: (params) => (
        <ImageContainer>
          <img src={params.row.image} alt={params.row.title} />
        </ImageContainer>
      )
    },
    { field: "price", headerName: "Price", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 170,
      renderCell: (params) => (
        <Actions>
          <Delete onClick={() => handleDelete(params.row.id)}>Delete</Delete>
          <EditBook bookId={params.row.id} />
          <View onClick={() => navigate(`/book/${params.row.id}`)}>View</View>
        </Actions>
      )
    }
  ];

  const handleDelete = (id) => {
    dispatch(booksDelete(id));
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

const ImageContainer = styled.div`
  img {
    height: 40px;
  }
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    border: none;
    outline: none;
    padding: 3px 5px;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }
`;

const buttonStyles = `
  border: none;
  outline: none;
  padding: 3px 5px;
  color: white;
  border-radius: 3px;
  cursor: pointer;
`;

const Delete = styled.button`
  ${buttonStyles}
  background-color: rgb(255, 77, 73);
`;

const View = styled.button`
  ${buttonStyles}
  background-color: rgb(114, 225, 40);
`;

export default BooksList;
