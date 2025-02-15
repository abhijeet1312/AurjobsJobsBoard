import { createSlice } from "@reduxjs/toolkit";

const employerSlice = createSlice({
    name:"employer",
    initialState:{
        employerProfile: null,
        isAuthenticated: false
    },
    reducers:{
        getEmployerProfile: (state, action)=>{
            state.employerProfile = action.payload
        },
        setEmployerAuthentication: (state, action) => {
            state.isAuthenticated = action.payload;
        }
    }
})

export const {getEmployerProfile,setEmployerAuthentication} = employerSlice.actions;

export default employerSlice.reducer;;