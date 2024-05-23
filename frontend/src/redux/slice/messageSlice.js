import { createSlice } from "@reduxjs/toolkit";

const initialState={
    chatUser:null,
    messages:null,
    chatSelected:true
}

export const messageSlice=createSlice({
    name:"message",
    initialState,
    reducers:{
        getMessage:(state,action)=>{
            state.messages=action.payload
        },
        sendMessage:(state,action)=>{
           state.messages=[...state.messages,action.payload] 
        },
        setChatUser:(state,action)=>{
            state.chatSelected=false
            state.chatUser=action.payload
        }
    }
})


export const {getMessage,sendMessage,setChatUser}=messageSlice.actions

export default messageSlice.reducer
