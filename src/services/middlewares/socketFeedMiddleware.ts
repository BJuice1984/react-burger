import type { Middleware, MiddlewareAPI } from "redux";
import type { AppDisatch, RootState, AppActions } from "../types/middlewareTypes";

export const socketFeedMiddleware = (wsActions): Middleware<{}, RootState> => {
  return (store) => {
    let socket = null;

    return next => action => {
      const { dispatch } = store;
      const { wsConnect, wsDisconnect, onOpen, onClose, onError } = wsActions;

      if (wsConnect.match(action)) {
        socket = new WebSocket(action.payload);
      }

      if (socket) {
        socket.onopen = () => {
          dispatch(onOpen());
        }
      };

      if (wsDisconnect.match(action)) {
        socket.close();
      };

      next(action)
    }
  }
}