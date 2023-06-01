const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUsers(state, action) {},
    removeUser(state, action) {},
    deleteUsers(state, action) {},
  },
});
console.log(userSlice.actions);

export { userSlice };
