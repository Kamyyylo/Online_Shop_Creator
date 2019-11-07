import { GET_SHOP_MAIN_DATA } from "../actions/types";

const initialState = {
  shopMainData: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SHOP_MAIN_DATA:
      return {
        ...state,
        shopMainData: action.payload
      };
    default:
      return state;
  }
}
