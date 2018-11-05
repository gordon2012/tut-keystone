import { LOADING_RECIPES } from '../../actions/actions';

export default function loadingRecipe(state = true, action) {
  switch (action.type) {
    case LOADING_RECIPES:
      return action.payload;
  }
  return state;
}
