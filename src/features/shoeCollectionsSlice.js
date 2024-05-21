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

export const shoeCollectionsFetch = createAsyncThunk(
  "shoeCollections/shoeCollectionsFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/shoeCollections`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const shoeCollectionsCreate = createAsyncThunk(
  "shoeCollections/shoeCollectionsCreate",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/shoeCollections`,
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


export const shoeCollectionsEdit = createAsyncThunk(
  "shoeCollections/shoeCollectionsEdit",
  async (values) => {
    try {
      const response = await axios.put(
        `${url}/shoeCollections/${values.shoeCollection._id}`,
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

export const shoeCollectionsDelete = createAsyncThunk(
  "shoeCollections/shoeCollectionsDelete",
  async (id) => {
    try {
      const response = await axios.delete(
        `${url}/shoeCollections/${id}`, 
        setHeaders()
      );

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);


const shoeCollectionsSlice = createSlice({
  name: "shoeCollections",
  initialState,
  reducers: {},
  extraReducers: {
    [shoeCollectionsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [shoeCollectionsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [shoeCollectionsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [shoeCollectionsCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [shoeCollectionsCreate.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.createStatus = "success";
      toast.success("shoe Collection Created");
    },
    [shoeCollectionsCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
    [shoeCollectionsEdit.pending]: (state, action) => {
      state.editStatus = "pending";
    },
    [shoeCollectionsEdit.fulfilled]: (state, action) => { 
      const updatedshoeCollections = state.items.map((shoeCollection) =>
        shoeCollection._id === action.payload._id ? action.payload : shoeCollection
      );  
      state.items = updatedshoeCollections;
      state.editStatus = "success";
      toast.info("shoe Collection Edited");
    },
    [shoeCollectionsEdit.rejected]: (state, action) => {
      state.editStatus = "rejected";
    },
    [shoeCollectionsDelete.pending]: (state, action) => {
      state.deleteStatus = "pending";
    },
    [shoeCollectionsDelete.fulfilled]: (state, action) => {
      const newList = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      state.items = newList;
      state.deleteStatus = "success";
      toast.error("shoe Collection Deleted");
    },      
    [shoeCollectionsDelete.rejected]: (state, action) => {
      state.deleteStatus = "rejected";
    },
  },
});

export default shoeCollectionsSlice.reducer;
