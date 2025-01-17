import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";

const initialState = {
  list: [],
  status: null,
};

export const ordersFetch = createAsyncThunk("orders/ordersFetch", async () => {
  try {
    const response = await axios.get(`${url}/orders`, setHeaders());
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

// Updated ordersEdit async thunk with a different API endpoint or logic
export const ordersEdit = createAsyncThunk(
  "orders/ordersEdit", 
  async (values, { getState }) => {
    const state = getState();

    let currentOrder = state.orders.list.filter(
      (order) => order._id === values.id
    );

    const newOrder = {
       ...  currentOrder[0],
       delivery_status: values.delivery_status,
    };


  try {
    const response = await axios.put(
      `${url}/orders/${values.id}`, 
      newOrder, 
      setHeaders()
      );
      return response.data;
  } catch (error) {
    console.log(error);
  }
});

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: {
    [ordersFetch.pending]: (state) => {
      state.status = "pending";
    },
    [ordersFetch.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
    },
    [ordersFetch.rejected]: (state) => {
      state.status = "rejected";
    },
    [ordersEdit.pending]: (state) => {
      state.status = "pending";
    },
    [ordersEdit.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
    },
    [ordersEdit.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default ordersSlice.reducer;
