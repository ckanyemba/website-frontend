import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url, setHeaders } from "./api";
import jwtDecode from "jwt-decode";
import axios from "axios";

const initialState = {
 token: localStorage.getItem("token"),
 name: "",
 email: "",
 streetNr: "",
 zipCode: "",
 country: "",
 phoneNumber: "",
 _id: "",
 isAdmin: false,
 registerStatus: "",
 registerError: "",
 loginStatus: "",
 loginError: "",
 userLoaded: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, { rejectWithValue }) => {
     try {
      const token = await axios.post(`${url}/register`, {
        name: values.name,
        email: values.email,
        password: values.password,
        streetNr: values.streetNr,
        zipCode: values.zipCode,
        country: values.country,
        phoneNumber: values.phoneNumber,
       });
 
       localStorage.setItem("token", token.data);
 
       return token.data;
     } catch (err) {
       console.log(err.response.data);
       return rejectWithValue(err.response.data);
     }
  }
 );
  
  export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (values, { rejectWithValue }) => {
      try {
        const token = await axios.post(`${url}/login`, {
          email: values.email,
          password: values.password,
        });
  
        localStorage.setItem("token", token.data);

        return token.data;
      } catch (err) {
        console.log(err.response.data);
        return rejectWithValue(err.response.data);
      }
    }
  );
  
  export const getUser = createAsyncThunk(
    "auth/getUser",
    async (id, { rejectWithValue }) => {
      try {
        const token = await axios.get(`${url}/user/${id}`, setHeaders());
  
        localStorage.setItem("token", token.data);
  
        return token.data;
      } catch (err) {
        console.log(err.response.data);
        return rejectWithValue(err.response.data);
      }
    }
  );
  
  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      loadUser(state, action) {
        const token = state.token;
  
        if (token) {
          const user = jwtDecode(token);
          return {
            ...state,
            token,
            name: user.name,
            email: user.email,
            _id: user._id,
            isAdmin: user.isAdmin,
            userLoaded: true,
          };
        } else return { ...state, userLoaded: true };
      },
      
      logoutUser(state, action) {
        localStorage.removeItem("token");
  
        return {
          ...state,
          token: "",
          name: "",
          email: "",
          _id: "",
          isAdmin: false,
          registerStatus: "",
          registerError: "",
          loginStatus: "",
          loginError: "",
        };
      },
    },
    extraReducers: (builder) => {
      builder.addCase(registerUser.pending, (state, action) => {
        return { ...state, registerStatus: "pending" };
      });
      builder.addCase(registerUser.fulfilled, (state, action) => {
        if (action.payload) {
          const user = jwtDecode(action.payload);
          return {
            ...state,
            token: action.payload,
            name: user.name,
            email: user.email,
            _id: user._id,
            isAdmin: user.isAdmin,
            registerStatus: "success",
          };
        } else return state;
      });
      builder.addCase(registerUser.rejected, (state, action) => {
        return {
          ...state,
          registerStatus: "rejected",
          registerError: action.payload,
        };
      });
      builder.addCase(loginUser.pending, (state, action) => {
        return { ...state, loginStatus: "pending" };
      });
      builder.addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload) {
          const user = jwtDecode(action.payload);
          return {
            ...state,
            token: action.payload,
            name: user.name,
            email: user.email,
            _id: user._id,
            isAdmin: user.isAdmin,
            loginStatus: "success",
          };
        } else return state;
      });
      builder.addCase(loginUser.rejected, (state, action) => {
        return {
          ...state,
          loginStatus: "rejected",
          loginError: action.payload,
        };
      });
      builder.addCase(getUser.pending, (state, action) => {
        return {
          ...state,
          getUserStatus: "pending",
        };
      });
      builder.addCase(getUser.fulfilled, (state, action) => {
        if (action.payload) {
          const user = jwtDecode(action.payload);
          return {
            ...state,
            token: action.payload,
            name: user.name,
            email: user.email,
            _id: user._id,
            isAdmin: user.isAdmin,
            getUserStatus: "success",
          };
        } else return state;
      });
      builder.addCase(getUser.rejected, (state, action) => {
        return {
          ...state,
          getUserStatus: "rejected",
          getUserError: action.payload,
        };
      });
    },
  });
  
  export const { loadUser, logoutUser  } = authSlice.actions;
  
  export default authSlice.reducer;