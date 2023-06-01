const { createSlice } = require("@reduxjs/toolkit");

const users = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUsers(state, action) {},
    removeUser(state, action) {},
    deleteUsers(state, action) {},
  },
});

export { users };
