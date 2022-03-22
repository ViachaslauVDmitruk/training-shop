import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import rootReduser from "./rootReducer";
import { productsRequestWatcher } from './saga/index'

const sagaMiddlewere = createSagaMiddleware();

const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(sagaMiddlewere)));

sagaMiddlewere.run(productsRequestWatcher)

export default store; 