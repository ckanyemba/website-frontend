import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import productsReducer, {
  productsFetch,
  productsSearch
} from "./features/productsSlice";
import sculpturesReducer, {
  sculpturesFetch,
  sculpturesSearch
} from "./features/sculpturesSlice";
import { productsApi } from "./features/productsApi";
import { sculpturesApi } from "./features/sculpturesApi";
import cartReducer, { getTotals } from "./features/cartSlice";
import authReducer, { loadUser } from "./features/authSlice";
import { ordersApi } from "./features/ordersApi";
import ordersReducer, { ordersFetch } from "./features/ordersSlice";
import usersSlice from "./features/usersSlice";
import blogsReducer, { blogsFetch, blogsSearch } from "./features/blogsSlice";
import { blogsApi } from "./features/blogsApi";
import booksReducer, { booksFetch, booksSearch } from "./features/booksSlice";
import { booksApi } from "./features/booksApi";

const store = configureStore({
  reducer: {
    products: productsReducer,
    sculptures: sculpturesReducer,
    orders: ordersReducer,
    users: usersSlice,
    cart: cartReducer,
    auth: authReducer,
    blogs: blogsReducer,
    books: booksReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [sculpturesApi.reducerPath]: sculpturesApi.reducer,
    [blogsApi.reducerPath]: blogsApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      productsApi.middleware,
      ordersApi.middleware,
      sculpturesApi.middleware,
      blogsApi.middleware,
      booksApi.middleware
    );
  }
});

store.dispatch(productsFetch());
store.dispatch(productsSearch()); // Example of dispatching productsSearch
store.dispatch(ordersFetch());
store.dispatch(sculpturesFetch());
store.dispatch(sculpturesSearch()); // Example of dispatching productsSearch
store.dispatch(getTotals());
store.dispatch(loadUser(null));
store.dispatch(blogsFetch()); // Dispatch the blogsFetch thunk
store.dispatch(blogsSearch()); // Example of dispatching productsSearch
store.dispatch(booksFetch()); // Dispatch the booksFetch thunk

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
