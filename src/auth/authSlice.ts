import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "../interface/index";

const initalState: IAuthState = {
    refreshToken: null,
    accessToken: null,
    scope: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initalState,
    reducers:{
        login(state, action){
            state.refreshToken = action.payload.refreshToken;
            state.accessToken = action.payload.accessToken;
            state.scope = action.payload.scope;
            state.isAuthenticated = true;
        }
    }
})

export default authSlice.reducer;