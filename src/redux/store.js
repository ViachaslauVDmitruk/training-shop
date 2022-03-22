import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import rootReduser from "./rootReducer";
import productsRequestWorker from './saga/index'

const sagaMiddlewere = createSagaMiddleware();

const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(sagaMiddlewere)));

sagaMiddlewere.run(productsRequestWorker)

export default store; 