import { combineReducers } from 'redux';
import getRecipes from './recipe_actions/get_recipes';
import loadingRecipes from './recipe_actions/loading_recipes';

const reducers = combineReducers({
  recipes: getRecipes,
  loadRecipes: loadingRecipes
});

export default reducers;
