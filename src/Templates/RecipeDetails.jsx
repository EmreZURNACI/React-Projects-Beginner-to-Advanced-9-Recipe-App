import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { BsCircleFill } from 'react-icons/bs'
import { useEffect } from 'react';
import {getRecipeDetail} from '../Store/RecipeDetail'
function RecipeDetails() {
    const dispatch=useDispatch();
    const RecipeDetail = useSelector((state) => state.recipeDetail.recipeDetail);
    const recipe = useSelector((state) => state.recipe.recipes);
    const malzeme = useSelector((state) => state.malzeme.malzeme);
    useEffect(()=>{
        dispatch(getRecipeDetail())
    },[malzeme,dispatch])
    return (
        <div>
            {
                (RecipeDetail !== null && RecipeDetail !== undefined && Object.keys(RecipeDetail).length !== 0 && recipe !== undefined && recipe !== [])
                &&
                (
                    <>
                        <h1 className="text-3xl font-bold text-center my-4">Ingredients of {RecipeDetail.label}</h1>
                        <div>
                            <ul className='list-disc'>
                                {
                                    RecipeDetail.ingredientLines.map((recipe, index) => (
                                        <li key={index} className='flex items-center justify-start gap-2 text-base'>
                                            <BsCircleFill></BsCircleFill>
                                            <p className='font-semibold'>
                                                {recipe.charAt(0).toUpperCase() + recipe.slice(1)}
                                            </p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </>
                )
            }
        </div>
    )

}

export default RecipeDetails