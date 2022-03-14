import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReduser from "./rootReducer";

const store = createStore(rootReduser, composeWithDevTools());

export default store; 