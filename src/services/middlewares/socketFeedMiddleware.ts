import type { Middleware } from "redux";
import type { RootState } from "../types/middlewareTypes";
import { WebSocketActionTypes } from "../actions/wsActions";

export const socketFeedMiddleware = (wsActions: WebSocketActionTypes): Middleware<{}, RootState> => {
  return (store) => {
    let socket: WebSocket | null = null;

    return next => action => {
      const { dispatch } = store;
      const { wsConnect, wsDisconnect, onOpen, onClose, onError } = wsActions;

      if (action.type === wsConnect) {
        socket = new WebSocket(action.payload);
      }

      if (socket) {
        socket.onopen = () => {
          dispatch({ type: onOpen });
        }
        socket.onerror = (err) => {
          dispatch({ type: onError, payload: err })
        }
        socket.onclose = (e) => {
          if (e.code !== 1000) {
            dispatch({ type: onError, payload: e.code.toString()})
          }
          dispatch({ type: onClose })
        }
      };

      if (socket && action.type === wsDisconnect) {
        socket.close();
      };

      next(action)
    }
  }
}