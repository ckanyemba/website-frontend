import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
  deleteStatus: null,
  editStatus: null
};

export const blogsFetch = createAsyncThunk("blogs/blogsFetch", async () => {
  try {
    const response = await axios.get(`${url}/blogs`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; // Ensure errors are thrown to be caught by createAsyncThunk }
  }
});

export const blogsCreate = createAsyncThunk(
  "blogs/blogsCreate",
  async (values) => {
    try {
      const response = await axios.post(`${url}/blogs`, values, setHeaders());

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

export const blogsEdit = createAsyncThunk("blogs/blogsEdit", async (values) => {
  try {
    const response = await axios.put(
      `${url}/blogs/${values.blog._id}`,
      values,
      setHeaders()
    );
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data);
  }
});

export const blogsSearch = createAsyncThunk(
  "blogs/blogsSearch",
  async (searchParams) => {
    try {
      const response = await axios.get(`${url}/blogs`, {
        params: searchParams
      });

      return response.data;
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data);
    }
  }
);

export const blogsDelete = createAsyncThunk("blogs/blogsDelete", async (id) => {
  try {
    const response = await axios.delete(`${url}/blogs/${id}`, setHeaders());

    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data);
  }
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: {
    [blogsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [blogsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [blogsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [blogsCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [blogsCreate.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.createStatus = "success";
      toast.success("Blog Created");
    },
    [blogsCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
    [blogsEdit.pending]: (state, action) => {
      state.editStatus = "pending";
    },
    [blogsEdit.fulfilled]: (state, action) => {
      const updatedBlogs = state.items.map((blog) =>
        blog._id === action.payload._id ? action.payload : blog
      );
      state.items = updatedBlogs;
      state.editStatus = "success";
      toast.info("Blog Edited");
    },
    [blogsEdit.rejected]: (state, action) => {
      state.editStatus = "rejected";
    },
    [blogsDelete.pending]: (state, action) => {
      state.deleteStatus = "pending";
    },
    [blogsDelete.fulfilled]: (state, action) => {
      const newList = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      state.items = newList;
      state.deleteStatus = "success";
      toast.error("Blog Deleted"); // Fix typo here
    },
    [blogsDelete.rejected]: (state, action) => {
      state.deleteStatus = "rejected";
    },
    [blogsSearch.pending]: (state, action) => {
      state.searchStatus = "pending";
    },
    [blogsSearch.fulfilled]: (state, action) => {
      state.searchResults = action.payload;
      state.searchStatus = "success";
    },
    [blogsSearch.rejected]: (state, action) => {
      state.searchStatus = "rejected";
    }
  }
});

export default blogsSlice.reducer;
