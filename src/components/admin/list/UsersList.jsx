import styled from "styled-components";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productsDelete } from "../../../features/productsSlice";
import EditProduct from "../EditProduct";
import { useEffect } from "react";
import { usersFetch } from "../../../features/usersSlice";


export default function UsersList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(usersFetch());
  }, [dispatch]);

  const rows =
    list &&
    list.map((user) => {
      return {
        id: user._id,
        uName: user.name,
        uEmail: user.email,
        isAdmin: user.isAdmin,
      };
    });

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 220,
    },
    {
      field: "uName ",
      headerName: "Name",
      width: 150,
    },
    {
      field: "uEmail",
      headerName: "Email",
      width: 200,
    },
    {
      field: "isAdmin",
      headerName: "Role",
      width: 100,
      renderCell: (params) => {
        return (
          <div> 
            {params.row.isAdmin ? (
              <Admin>Admin</Admin>
            ) : (
              <Customer>Customer</Customer>
            )}
          </div>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 120,
      renderCell: (params) => {
        return (
          <div>
            <Delete onClick={() => handleDelete(params.row.id)}>Delete</Delete>
            <View onClick={() => navigate(`/user/${params.row.id}`)}>View</View>
          </div>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    //dispatch(productsDelete(id));
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
}

const ImageContainer = styled.div`
  img {
    height: 40px;
  }
`;

const Admin = styled.div`
color: rgb(253, 181, 40);
background: rgb(253, 181, 40, 0.12);
padding: 3px 5px;
border-radius: 3px;
font-size: 14px;
`;

const Customer = styled.div`
color: rgb(38, 198, 249);
background-color: rgb(38, 198, 249, 0.12);
padding: 3px 5px;
border-radius: 3px;
font-size: 14px;
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

const Delete = styled.button`
  background-color: rgb(255, 77, 73);
`;

const View = styled.button`
  background-color: rgb(114, 225, 40);
`;
