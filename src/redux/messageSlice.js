import { createSlice } from "@reduxjs/toolkit";





const initialState = {
    message : ""
}





const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setMessage: (state, action) => {
            
            state.message = action.payload
        },
        resetMessage: (state) => {
            state.message = "";
        }
    }

})


export default messageSlice.reducer
export const {setMessage, resetMessage} = messageSlice.actions