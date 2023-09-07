import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesFromAPI } from '../Store/RecipeSlice'
import { getRecipeDetail } from '../Store/RecipeDetail'
import SearchArea from './SearchArea'
import RecipeDetails from './RecipeDetails'
import toast, { Toaster } from "react-hot-toast";
function GetRecipes() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipe.recipes)
  const malzeme = useSelector((state) => state.malzeme.malzeme)
  const getRecipes = (e) => {
    e.preventDefault();
    if (malzeme === null || malzeme === " " || String(malzeme).trim === "" || String(malzeme).trim === null || malzeme === undefined || malzeme === "") {
      toast("Input not be empty!", {
        icon: "⚠️"
      });
    }
    else {
      axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${String(malzeme).trim()}&app_id=d239441b&app_key=6e4f746ef31269601c64bf40d0c53811&imageSize=REGULAR&random=false&field=image&field=images&field=url&field=label&field=ingredients&field=ingredientLines&field=calories&field=cuisineType&field=mealType`)
        .then((res) => {
          if (Array.from(res.data.hits).length === 0) {
            toast.error("Try writing something real!");
            dispatch(getRecipesFromAPI());
          }
          else {
            toast.success("Products found. Bringing...");
            dispatch(getRecipesFromAPI(res.data.hits))
          }
        })
        .catch((err) => toast.error(err));
    }
  }
  return (
    <>
      <Toaster position="top-right" />
      <form onSubmit={(e) => getRecipes(e)}>
        <SearchArea />
      </form>
      <div className="flex items-top  justify-center ">
        <div className="w-3/4 meals">
          {
            (recipes !== undefined && Object.keys(recipes).length !== 0 && Array.from(recipes).length !== 0) &&
            <h1 className="text-3xl font-bold text-center my-4" >Meals</h1>
          }
          <div className="grid grid-cols-4 gap-2 place-items-center" >
            {
              recipes !== undefined &&
              recipes.map((recipe, index) => (
                <div key={index} className="rounded-2xl cursor-pointer w-full h-full" onClick={() => dispatch(getRecipeDetail(recipes[index].recipe))} title="Click to see ingredients" >
                  <img src={recipe.recipe.image} alt={"image of " + recipe.recipe.image} width={"275px"} height={"275px"} className="rounded-2xl mx-auto" />
                  <p className="text-center font-semibold">{recipe.recipe.label}</p>
                  <p className="text-center font-semibold">{Number(recipe.recipe.calories).toFixed(2)}cal</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="w-1/4">
          <RecipeDetails />
        </div>
      </div >
    </>
  );
}

export default GetRecipes;
