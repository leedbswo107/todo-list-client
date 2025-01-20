import React, { useState } from 'react';

const useModeSwitch = (value: boolean) => {
  const [mode, setMode] = useState(value);
  setMode(!mode);
  return mode;
};

export default useModeSwitch;
