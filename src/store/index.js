import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store  = createStore(
    rootReducer,
    composedEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default { persistor, store };