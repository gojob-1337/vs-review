import React, { useState, useEffect } from 'react';

const useCommand = () => {
  const [command, setCommand] = useState({ name: 'none' });

  useEffect(() => {
    const listener = (event: any) => setCommand(event.data);
    window.addEventListener('message', listener, false);
    return () => window.removeEventListener('message', listener, false);
  }, [command, setCommand]);

  return command;
};

export function Root() {
  const command = useCommand();

  return <div>hello {command.name} </div>;
}
