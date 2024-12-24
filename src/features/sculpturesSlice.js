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

export const sculpturesFetch = createAsyncThunk(
  "sculptures/sculpturesFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/sculptures`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const sculpturesCreate = createAsyncThunk(
  "sculptures/sculpturesCreate",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/sculptures`,
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

export const sculpturesEdit = createAsyncThunk(
  "sculptures/sculpturesEdit",
  async (values) => {
    try {
      const response = await axios.put(
        `${url}/sculptures/${values.sculpture._id}`,
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

export const sculpturesSearch = createAsyncThunk(
  "sculptures/sculpturesSearch",
  async (searchParams) => {
    try {
      const response = await axios.get(`${url}/sculptures`, {
        params: searchParams
      });

      return response.data;
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data);
    }
  }
);

export const sculpturesDelete = createAsyncThunk(
  "sculptures/sculpturesDelete",
  async (id) => {
    try {
      const response = await axios.delete(
        `${url}/sculptures/${id}`,
        setHeaders()
      );

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

const sculpturesSlice = createSlice({
  name: "sculptures",
  initialState,
  reducers: {},
  extraReducers: {
    [sculpturesFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [sculpturesFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [sculpturesFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [sculpturesCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [sculpturesCreate.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.createStatus = "success";
      toast.success("sculpture Created");
    },
    [sculpturesCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
    [sculpturesEdit.pending]: (state, action) => {
      state.editStatus = "pending";
    },
    [sculpturesEdit.fulfilled]: (state, action) => {
      const updatedSculptures = state.items.map((sculpture) =>
        sculpture._id === action.payload._id ? action.payload : sculpture
      );
      state.items = updatedSculptures;
      state.editStatus = "success";
      toast.info("sculpture Edited");
    },
    [sculpturesEdit.rejected]: (state, action) => {
      state.editStatus = "rejected";
    },
    [sculpturesDelete.pending]: (state, action) => {
      state.deleteStatus = "pending";
    },
    [sculpturesDelete.fulfilled]: (state, action) => {
      const newList = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      state.items = newList;
      state.deleteStatus = "success";
      toast.error("sculpture Deleted"); // Fix typo here
    },
    [sculpturesDelete.rejected]: (state, action) => {
      state.deleteStatus = "rejected";
    },
    [sculpturesSearch.pending]: (state, action) => {
      state.searchStatus = "pending";
    },
    [sculpturesSearch.fulfilled]: (state, action) => {
      state.searchResults = action.payload;
      state.searchStatus = "success";
    },
    [sculpturesSearch.rejected]: (state, action) => {
      state.searchStatus = "rejected";
    }
  }
});

export default sculpturesSlice.reducer;
