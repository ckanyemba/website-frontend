import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import productsReducer, { productsFetch } from "./features/productsSlice";
import { productsApi } from './features/productsApi';
import { eventsApi } from './features/eventsApi';
import { jewelleryCollectionsApi } from './features/jewelleryCollectionsApi';
import { thriftCollectionsApi } from './features/thriftCollectionsApi';
import { shoeCollectionsApi } from './features/shoeCollectionsApi';
import { articleCollectionsApi } from './features/articleCollectionsApi';
import jewelleryCollectionsReducer, { jewelleryCollectionsFetch } from "./features/jewelleryCollectionsSlice";
import thriftCollectionsReducer, { thriftCollectionsFetch } from "./features/thriftCollectionsSlice";
import shoeCollectionsReducer, { shoeCollectionsFetch } from "./features/shoeCollectionsSlice";
import articleCollectionsReducer, { articleCollectionsFetch } from "./features/articleCollectionsSlice";
import cartReducer, {getTotals} from "./features/cartSlice";
import authReducer, { loadUser } from "./features/authSlice";
import ordersSlice from "./features/ordersSlice";
import usersSlice from "./features/usersSlice";
import eventsReducer, { eventsFetch } from './features/eventsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    jewelleryCollections: jewelleryCollectionsReducer,
    thriftCollections: thriftCollectionsReducer,
    shoeCollections: shoeCollectionsReducer,
    articleCollections: articleCollectionsReducer,
    events: eventsReducer,
    orders: ordersSlice,
    users: usersSlice,
    cart: cartReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
    [jewelleryCollectionsApi.reducerPath]: jewelleryCollectionsApi.reducer,
    [thriftCollectionsApi.reducerPath]: thriftCollectionsApi.reducer,
    [shoeCollectionsApi.reducerPath]: shoeCollectionsApi.reducer,
    [articleCollectionsApi.reducerPath]: articleCollectionsApi.reducer,


  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware, eventsApi.middleware, jewelleryCollectionsApi.middleware, thriftCollectionsApi.middleware, shoeCollectionsApi.middleware, articleCollectionsApi.middleware);
  },
});

store.dispatch(productsFetch());
store.dispatch(jewelleryCollectionsFetch());
store.dispatch(thriftCollectionsFetch());
store.dispatch(shoeCollectionsFetch());
store.dispatch(articleCollectionsFetch());
store.dispatch(eventsFetch());
store.dispatch(getTotals());
store.dispatch(loadUser(null));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
      </Provider>
  </React.StrictMode>
);

