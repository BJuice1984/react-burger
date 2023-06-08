import { ThunkDispatch } from "redux-thunk";
import { rootReducer } from "../reducers/rootReducer";

export type AppDisatch = ThunkDispatch<RootState, unknown, AppActions>;
export type RootState = ReturnType<typeof rootReducer>;

export type AppActions = any