import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    recipeDetail: {}
}
export const RecipeDetail = createSlice({
    name: "recipeDetail",
    initialState,
    reducers: {
        getRecipeDetail: (state, actions) => {
            state.recipeDetail = actions.payload;
        }
    }
})
export const { getRecipeDetail } = RecipeDetail.actions;
export default RecipeDetail.reducer;