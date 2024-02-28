import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

export default function recieveData() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const socket = io('http://localhost:1880');

    socket.on('message', (data) => {
      setResponse(data.result); // assuming the server returns { result: true } or { result: false }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (response.toString());
}

