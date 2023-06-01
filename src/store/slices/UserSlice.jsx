import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUsers(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeUser(state, action) {},
    deleteUsers(state, action) {},
  },
});

export { userSlice };
//console.log(userSlice.actions); //this is action creators so we need to export it
export const { addUsers } = userSlice.actions;
