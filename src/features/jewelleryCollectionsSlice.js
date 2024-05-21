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

export const jewelleryCollectionsFetch = createAsyncThunk(
  "jewelleryCollections/jewelleryCollectionsFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/jewelleryCollections`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const jewelleryCollectionsCreate = createAsyncThunk(
  "jewelleryCollections/jewelleryCollectionsCreate",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/jewelleryCollections`,
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


export const jewelleryCollectionsEdit = createAsyncThunk(
  "jewelleryCollections/jewelleryCollectionsEdit",
  async (values) => {
    try {
      const response = await axios.put(
        `${url}/jewelleryCollections/${values.jewelleryCollection._id}`,
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

export const jewelleryCollectionsDelete = createAsyncThunk(
  "jewelleryCollections/jewelleryCollectionsDelete",
  async (id) => {
    try {
      const response = await axios.delete(
        `${url}/jewelleryCollections/${id}`, 
        setHeaders()
      );

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);


const jewelleryCollectionsSlice = createSlice({
  name: "jewelleryCollections",
  initialState,
  reducers: {},
  extraReducers: {
    [jewelleryCollectionsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [jewelleryCollectionsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [jewelleryCollectionsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [jewelleryCollectionsCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [jewelleryCollectionsCreate.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.createStatus = "success";
      toast.success("Jewellery Collection Created");
    },
    [jewelleryCollectionsCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
    [jewelleryCollectionsEdit.pending]: (state, action) => {
      state.editStatus = "pending";
    },
    [jewelleryCollectionsEdit.fulfilled]: (state, action) => { 
      const updatedJewelleryCollections = state.items.map((jewelleryCollection) =>
        jewelleryCollection._id === action.payload._id ? action.payload : jewelleryCollection
      );  
      state.items = updatedJewelleryCollections;
      state.editStatus = "success";
      toast.info("Jewellery Collection Edited");
    },
    [jewelleryCollectionsEdit.rejected]: (state, action) => {
      state.editStatus = "rejected";
    },
    [jewelleryCollectionsDelete.pending]: (state, action) => {
      state.deleteStatus = "pending";
    },
    [jewelleryCollectionsDelete.fulfilled]: (state, action) => {
      const newList = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      state.items = newList;
      state.deleteStatus = "success";
      toast.error("Jewellery Collection Deleted");
    },      
    [jewelleryCollectionsDelete.rejected]: (state, action) => {
      state.deleteStatus = "rejected";
    },
  },
});

export default jewelleryCollectionsSlice.reducer;
