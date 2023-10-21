'use client';

import { ReactNode, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import { SocketType } from 'dgram';
import { io, Socket } from 'socket.io-client';

interface AppProviderProps {
  children: ReactNode;
}

const ENDPOINT = 'http://localhost:3000';
const newSocket = io(ENDPOINT);

function AppProvider({ children }: AppProviderProps) {
  const [socket, setSocket] = useState<Socket | null>(null);

  const fetchSocket = () => {
    try {
      setSocket(newSocket);
    } catch (e) {
      return { message: 'Socket Server is not ready.' };
    }
  };

  useEffect(() => {
    fetchSocket();
  }, [setSocket]);

  const values = useMemo(
    () => ({
      socket,
      setSocket,
    }),
    [socket, setSocket]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default AppProvider;
