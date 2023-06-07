import React, {createContext} from 'react';
import io from 'socket.io-client';
import {WS_BASE} from './config';
import {useDispatch} from 'react-redux';
import {increment, setText} from './actions/pingSlice';

const WebSocketContext = createContext(null);

export {WebSocketContext};

// @ts-ignore
export default ({children}) => {
  let socket: any, ws: any;
  const dispatch = useDispatch();

  const sendMessage = (roomId: String, message: any) => {
    const payload = {
      roomId: roomId,
      data: message,
    };
    socket.emit('event://send-message', JSON.stringify(payload));
    dispatch(increment());
  };

  if (!socket) {
    socket = io(WS_BASE, {
      reconnectionDelayMax: 10000,
      autoConnect: true,
      forceNew: false,
    });

    socket.once('connect', () => {
      console.info('Connected to Domitai', socket.id);
      socket.emit('message', 'hola');
    });

    socket.on('disconnect', () => {
      console.info('Reconecting to Domitai', socket.id);
    });

    socket.on('message', (data: {payload: string}) => {
      // console.log('Recibi', data);
      if (data.payload.startsWith('pong')) {
        dispatch(increment());
        dispatch(setText(data.payload));
        setTimeout(() => socket.emit('message', 'ping'), 1000);
        socket.emit(
          'GET',
          {
            path: '/api/v2/authentication',
            params: {},
            query: {},
            body: {},
          },
          console.log,
        );
      }
    });

    socket.on('event://get-message', (msg: any) => {
      // const payload = JSON.parse(msg);
      console.debug('MESSAGE', msg);
      dispatch(increment());
    });

    ws = {
      socket: socket,
      sendMessage,
    };
  }

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
};
