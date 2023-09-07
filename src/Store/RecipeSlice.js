import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    recipes: []
}
export const RecipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        getRecipesFromAPI: (state, actions) => {
            state.recipes = actions.payload;
        }
    }
})
export const { getRecipesFromAPI } = RecipeSlice.actions;
export default RecipeSlice.reducer