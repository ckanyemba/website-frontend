import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
    list: [],
    status: null,
    deleteStatus: null,
};

export const usersFetch = createAsyncThunk("users/usersFetch", async () => {
    try {
        const response = await axios.get(`${url}/users`, setHeaders());
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const userDelete = createAsyncThunk("users/userDelete", async (id) => {
    try {
        const response = await axios.delete(`${url}/users/${id}`, setHeaders()); // Corrected the URL to include the user id

        return response.data;
    } catch (error) {
        console.log(error.response.data);
        toast.error(error.response?.data, {
            position: "bottom-left",
        });
        throw error; // Rethrow the error to keep the rejection behavior
    }
});

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [usersFetch.pending]: (state, action) => {
            state.status = "pending";
        },
        [usersFetch.fulfilled]: (state, action) => {
            state.list = action.payload;
            state.status = "success";
        },
        [usersFetch.rejected]: (state, action) => {
            state.status = "rejected";
        },
        [userDelete.pending]: (state, action) => {
            state.deleteStatus = "pending";
        },
        [userDelete.fulfilled]: (state, action) => {
            const newList = state.list.filter(
                (user) => user._id !== action.payload._id
            );
            state.list = newList;
            state.deleteStatus = "success";
            toast.error("User Deleted!", {
                position: "bottom-left",
            });
        },
        [userDelete.rejected]: (state, action) => {
            state.deleteStatus = "rejected"; // Corrected the property name
        },
    },
});

export default usersSlice.reducer; // Corrected the property name
