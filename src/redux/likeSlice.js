import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likes: [],
}


const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
      addLike: (state, action) => {
        const { id } = action.payload;
        const existingIndex = state.likes.findIndex((item) => item.id === id);
        if (existingIndex !== -1) {
          state.likes.splice(existingIndex, 1);
        } else {
          state.likes.push(action.payload); 
        }
      },
      removeLike:(state,action)=>{
        const id = action.payload
           state.likes=state.likes.filter(i=>i.id!==id)
      }
    },
  });
  

export const { addLike,removeLike } = likeSlice.actions
export default likeSlice.reducer