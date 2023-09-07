import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    malzeme: ""
}
export const MalzemeSlice = createSlice({
    name: "malzeme",
    initialState,
    reducers: {
        getMalzeme: (state,actions) => {
            state.malzeme=actions.payload;
        }
    }
})
export default MalzemeSlice.reducer;
export const { getMalzeme } = MalzemeSlice.actions;