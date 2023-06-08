export const WS_CONNECT = 'WS_CONNECT';
export const WS_DISCONNECT = 'WS_DISCONNECT';
export const WS_OPEN = 'WS_OPEN';
export const WS_CLOSE = 'WS_CLOSE';
export const WS_ERROR = 'WS_ERROR';

export type WebSocketActionTypes = {
  wsConnect: typeof WS_CONNECT;
  wsDisconnect: typeof WS_DISCONNECT;
  onOpen: typeof WS_OPEN;
  onClose: typeof WS_CLOSE;
  onError: typeof WS_ERROR;
};

export const wsActions: WebSocketActionTypes = {
  wsConnect: WS_CONNECT,
  wsDisconnect: WS_DISCONNECT,
  onOpen: WS_OPEN,
  onClose: WS_CLOSE,
  onError: WS_ERROR,
}