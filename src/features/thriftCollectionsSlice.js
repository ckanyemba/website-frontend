import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
  deleteStatus: null,
  editStatus: null,
};

export const thriftCollectionsFetch = createAsyncThunk(
  "thriftCollections/thriftCollectionsFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/thriftCollections`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const thriftCollectionsCreate = createAsyncThunk(
  "thriftCollections/thriftCollectionsCreate",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/thriftCollections`,
        values,
        setHeaders()
      );

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);


export const thriftCollectionsEdit = createAsyncThunk(
  "thriftCollections/thriftCollectionsEdit",
  async (values) => {
    try {
      const response = await axios.put(
        `${url}/thriftCollections/${values.thriftCollection._id}`,
        values,
        setHeaders()
      );
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

export const thriftCollectionsDelete = createAsyncThunk(
  "thriftCollections/thriftCollectionsDelete",
  async (id) => {
    try {
      const response = await axios.delete(
        `${url}/thriftCollections/${id}`, 
        setHeaders()
      );

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);


const thriftCollectionsSlice = createSlice({
  name: "thriftCollections",
  initialState,
  reducers: {},
  extraReducers: {
    [thriftCollectionsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [thriftCollectionsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [thriftCollectionsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [thriftCollectionsCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [thriftCollectionsCreate.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.createStatus = "success";
      toast.success("Thrift Collection Created");
    },
    [thriftCollectionsCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
    [thriftCollectionsEdit.pending]: (state, action) => {
      state.editStatus = "pending";
    },
    [thriftCollectionsEdit.fulfilled]: (state, action) => { 
      const updatedThriftCollections = state.items.map((thriftCollection) =>
        thriftCollection._id === action.payload._id ? action.payload : thriftCollection
      );  
      state.items = updatedThriftCollections;
      state.editStatus = "success";
      toast.info("Thrift Collection Edited");
    },
    [thriftCollectionsEdit.rejected]: (state, action) => {
      state.editStatus = "rejected";
    },
    [thriftCollectionsDelete.pending]: (state, action) => {
      state.deleteStatus = "pending";
    },
    [thriftCollectionsDelete.fulfilled]: (state, action) => {
      const newList = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      state.items = newList;
      state.deleteStatus = "success";
      toast.error("Thrift Collection Deleted");
    },      
    [thriftCollectionsDelete.rejected]: (state, action) => {
      state.deleteStatus = "rejected";
    },
  },
});

export default thriftCollectionsSlice.reducer;
