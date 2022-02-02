import authReducer from "./reducers/auth/reducer";
import { combineReducers } from "redux"
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const rootReducer  = combineReducers({
    auth: authReducer
});

const persistConfig = {
    key: "root",
    storage
}

export default persistReducer(persistConfig, rootReducer);