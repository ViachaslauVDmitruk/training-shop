import { combineReducers } from "redux";
import sendingReducer from './sending/sending-reducer';
import shopReducer from './Shopping/shopping-reducer';
const rootReducer = combineReducers({
	shop: shopReducer,
	send: sendingReducer,
});

export default rootReducer;