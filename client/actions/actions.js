import axios from 'axios';

export const LOADING_RECIPES = 'LOADING_RECIPES';
export const GET_RECIPES = 'GET_RECIPES';

export function loadingRecipes(loading) {
  return {
    type: LOADING_RECIPES,
    payload: loading
  };
}

export function fetchRecipes(data) {
  return {
    type: GET_RECIPES,
    payload: data
  };
}

export function recipesFetchData(url) {
  return dispatch => {
    const request = axios.get(url);
    request.then(response => {
      dispatch(loadingRecipes(false));
      dispatch(fetchRecipes(response.data.recipe));
    });
  };
}
