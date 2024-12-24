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
  searchStatus: null,
  searchResults: []
};

export const booksFetch = createAsyncThunk("books/booksFetch", async () => {
  try {
    const response = await axios.get(`${url}/books`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const booksCreate = createAsyncThunk(
  "books/booksCreate",
  async (values) => {
    try {
      const response = await axios.post(`${url}/books`, values, setHeaders());
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

export const booksEdit = createAsyncThunk("books/booksEdit", async (values) => {
  try {
    const response = await axios.put(
      `${url}/books/${values.book._id}`,
      values,
      setHeaders()
    );
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data);
  }
});

export const booksSearch = createAsyncThunk(
  "books/booksSearch",
  async (searchParams) => {
    try {
      const response = await axios.get(`${url}/books`, {
        params: searchParams
      });

      return response.data;
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data);
    }
  }
);

export const booksDelete = createAsyncThunk("books/booksDelete", async (id) => {
  try {
    const response = await axios.delete(`${url}/books/${id}`, setHeaders());
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data);
  }
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [booksFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [booksFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [booksFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [booksCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [booksCreate.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.createStatus = "success";
      toast.success("Book Created");
    },
    [booksCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
    [booksEdit.pending]: (state, action) => {
      state.editStatus = "pending";
    },
    [booksEdit.fulfilled]: (state, action) => {
      const updatedBooks = state.items.map((book) =>
        book._id === action.payload._id ? action.payload : book
      );
      state.items = updatedBooks;
      state.editStatus = "success";
      toast.info("Book Edited");
    },
    [booksEdit.rejected]: (state, action) => {
      state.editStatus = "rejected";
    },
    [booksDelete.pending]: (state, action) => {
      state.deleteStatus = "pending";
    },
    [booksDelete.fulfilled]: (state, action) => {
      const newList = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      state.items = newList;
      state.deleteStatus = "success";
      toast.error("Book Deleted");
    },
    [booksDelete.rejected]: (state, action) => {
      state.deleteStatus = "rejected";
    },
    [booksSearch.pending]: (state, action) => {
      state.searchStatus = "pending";
    },
    [booksSearch.fulfilled]: (state, action) => {
      state.searchResults = action.payload;
      state.searchStatus = "success";
    },
    [booksSearch.rejected]: (state, action) => {
      state.searchStatus = "rejected";
    }
  }
});

export default booksSlice.reducer;
