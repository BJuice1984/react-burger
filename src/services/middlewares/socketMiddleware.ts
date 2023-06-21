import type { Middleware } from "redux";
import { WebSocketActionTypes, WebSocketActionsType } from "../actions/wsActions";
import { RootState } from "../types";

export const socketFeedMiddleware = (wsActions: WebSocketActionsType): Middleware<{}, RootState> => {
  return (store) => {
    let socket: WebSocket | null = null;

    return next => (action: WebSocketActionTypes) => {
      const { dispatch } = store;
      const { wsConnect, wsDisconnect, onOpen, onClose, onError, onMessage } = wsActions;

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
        socket.onmessage = (e) => {
          const { data } = e;
          dispatch({ type: onMessage, payload: JSON.parse(data) })
        }
      };

      if (socket && action.type === wsDisconnect) {
        console.log('fffff')
        socket?.close();
      };

      next(action)
    }
  }
}