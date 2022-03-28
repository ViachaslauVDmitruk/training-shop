import { combineReducers } from "redux";
import reviewReducer from "./review/review-reducer";
import shopReducer from './Shopping/shopping-reducer';
const rootReducer = combineReducers({
	shop: shopReducer,
	review: reviewReducer
});

export default rootReducer;