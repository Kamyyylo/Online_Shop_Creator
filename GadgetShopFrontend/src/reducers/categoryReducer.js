import {
  GET_CATEGORIES,
  GET_CATEGORY,
  DELETE_CATEGORY
} from "../actions/types";

const initialState = {
  categories: [],
  category: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        //payload is loading information from app to this new states below
        categories: action.payload
      };
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          category => category.categoryIdentifier !== action.payload //filter the difference between payloads to load categories
        )
      };
    default:
      return state;
  }
}
