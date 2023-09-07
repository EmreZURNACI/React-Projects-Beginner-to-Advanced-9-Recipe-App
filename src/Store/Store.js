import { configureStore } from "@reduxjs/toolkit";
import RecipeReducer from './RecipeSlice'
import MalzemeReducer from './MalzemeSlice';
import RecipeDetailReducer from "./RecipeDetail";
export const Store = configureStore({
    reducer: {
        recipe: RecipeReducer,
        malzeme: MalzemeReducer,
        recipeDetail: RecipeDetailReducer
    }
})