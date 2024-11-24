import React from 'react';
import ToastShelf from '../ToastShelf';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [stack, setStack] = React.useState([]);

  const add = (variant, message) => {
    setStack([...stack, { variant, message }]);
  }

  const remove = (index) => {
    const newStack = stack.filter((item, i) => index !== i);
    setStack(newStack);
  }

  const reset = () => {
    setStack([]);
  }

  return <ToastContext.Provider value={{stack, add, remove, reset}}>
    <ToastShelf items={stack} onCloseItem={remove}/>
    {children}
  </ToastContext.Provider>;
}

export default ToastProvider;
