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

export const articleCollectionsFetch = createAsyncThunk(
    "articleCollections/articleCollectionsFetch",
    async () => {
      try {
        const response = await axios.get(`${url}/articleCollections`);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  );

  export const articleCollectionsCreate = createAsyncThunk(
    "articleCollections/articleCollectionsCreate",
    async (values) => {
      try {
        const response = await axios.post(
          `${url}/articleCollections`,
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

  export const articleCollectionsEdit = createAsyncThunk(
    "articleCollections/articleCollectionsEdit",
    async (values) => {
      try {
        const response = await axios.put(
          `${url}/articleCollections/${values.article._id}`,
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

  export const articleCollectionsDelete = createAsyncThunk(
    "articleCollections/articleCollectionsDelete",
    async (id) => {
      try {
        const response = await axios.delete(
          `${url}/articleCollections/${id}`, 
          setHeaders()
        );
  
        return response.data;
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data);
      }
    }
  );
  

  const articleCollectionsSlice = createSlice({
    name: "articleCollections",
    initialState,
    reducers: {},
    extraReducers: {
      [articleCollectionsFetch.pending]: (state, action) => {
        state.status = "pending";
      },
      [articleCollectionsFetch.fulfilled]: (state, action) => {
        state.items = action.payload;
        state.status = "success";
      },
      [articleCollectionsFetch.rejected]: (state, action) => {
        state.status = "rejected";
      },
      [articleCollectionsCreate.pending]: (state, action) => {
        state.createStatus = "pending";
      },
      [articleCollectionsCreate.fulfilled]: (state, action) => {
        state.items.push(action.payload);
        state.createStatus = "success";
        toast.success("ArticleCollections Created");
      },
      [articleCollectionsCreate.rejected]: (state, action) => {
        state.createStatus = "rejected";
      },
      [articleCollectionsEdit.pending]: (state, action) => {
        state.editStatus = "pending";
      },
      [articleCollectionsEdit.fulfilled]: (state, action) => { 
        const updatedArticleCollections = state.items.map((article) =>
        article._id === action.payload._id ? action.payload : article
        );  
        state.items = updatedArticleCollections;
        state.editStatus = "success";
        toast.info("ArticleCollections Edited");
      },
      [articleCollectionsEdit.rejected]: (state, action) => {
        state.editStatus = "rejected";
      },
      [articleCollectionsDelete.pending]: (state, action) => {
        state.deleteStatus = "pending";
      },
      [articleCollectionsDelete.fulfilled]: (state, action) => {
        const newList = state.items.filter(
          (item) => item._id !== action.payload._id
        );
        state.items = newList;
        state.deleteStatus = "success";
        toast.error("ArticleCollections Deleted"); // Fix typo here
      },      
      [articleCollectionsDelete.rejected]: (state, action) => {
        state.deleteStatus = "rejected";
      },
    },
  });

export default articleCollectionsSlice.reducer;