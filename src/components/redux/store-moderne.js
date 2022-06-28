import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counterSlice";

export default configureStore({
  reducer: {
    // Nom de la slice utilisé pour accéder à cette partie du state dans le store
    counter: counterReducer
  }
});