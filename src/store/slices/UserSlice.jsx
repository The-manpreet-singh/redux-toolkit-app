import { createSlice } from "@reduxjs/toolkit";
import { deleteAllUsers } from "../actions";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUsers(state, action) {
      state.push(action.payload);
      //console.log(action.payload);
    },
    removeUser(state, action) {
      //console.log("delete:", action.payload);
      state.splice(action.payload, 1);
    },
    // deleteUsers(state, action) {
    //   //console.log("delete all users:");
    //   return [];
    // },
  },
  extraReducers(buider) {
    buider.addCase(deleteAllUsers, () => {
      return [];
    });
  },
});

export { userSlice };
//console.log(userSlice.actions); //this is action creators so we need to export it
export const { addUsers, removeUser } = userSlice.actions;
