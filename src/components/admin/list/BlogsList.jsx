import styled from "styled-components";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { blogsDelete, blogsFetch } from "../../../features/blogsSlice";
import EditBlog from "../EditBlog";

export default function BlogsList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.blogs);

  React.useEffect(() => {
    dispatch(blogsFetch());
  }, [dispatch]);

  const rows = items?.map((item) => ({
    id: item._id,
    pTitle: item.title,
    pExcerpt: item.excerpt,
    pContent: item.content,
    imageUrl: item.image,
    pCategory: item.category,
    pDate: item.date
  }));

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "pTitle", headerName: "Title", width: 130 },
    {
      field: "pContent",
      headerName: "Content",
      width: 180,
      renderCell: (params) => (
        <a href={params.row.pContent} target="_blank" rel="noopener noreferrer">
          View Content
        </a>
      )
    },
    {
      field: "imageUrl",
      headerName: "Image",
      width: 80,
      renderCell: (params) => (
        <ImageContainer>
          <img src={params.row.imageUrl} alt={params.row.pTitle} />
        </ImageContainer>
      )
    },
    { field: "pCategory", headerName: "Category", width: 130 },
    { field: "pExcerpt", headerName: "Excerpt", width: 130 },
    { field: "pDate", headerName: "Date", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 170,
      renderCell: (params) => (
        <Actions>
          <Delete onClick={() => handleDelete(params.row.id)}>Delete</Delete>
          <EditBlog blogId={params.row.id} />
          <View onClick={() => navigate(`/blog/${params.row.id}`)}>View</View>
        </Actions>
      )
    }
  ];

  const handleDelete = (id) => {
    dispatch(blogsDelete(id));
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>{error}</p>;
  }

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
}

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
