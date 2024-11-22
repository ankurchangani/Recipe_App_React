
const initialState = {
  recipes: [],
  loading: false,
  error: null,
};
const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_RECIPE':
      return {
          ...state
          , recipes: [...state.recipes, action.recipe]
      }
      
      case 'UPDATE_RECIPE':
        return {
            ...state ,
            recipes : action.payload
        };

      case 'DELETE_RECIPE':
          return {
              ...state
          };

      case 'FETCH_RECIPES_REQUEST':
          return {
              ...state,
              loading: true,
          };
      case 'FETCH_RECIPES_SUCCESS':
          return {
              ...state,
              loading: false,
              
              recipes: action.payload.map(recipe => ({
                  ...recipe,
                  ingredients: recipe.ingredients || [], 
              })),
          };
      case 'FETCH_RECIPES_FAILURE':
          return {
              ...state,
              loading: false,
              error: action.payload,
          };
      default:
          return state;
  }
};

export default recipeReducer;
