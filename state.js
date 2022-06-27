import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

function AppWrapper({ children }) {
  let [cartId, setCartId] = useState(null);
  let [itemQuantities, setItemQuantities] = useState(null);

  return (
    <AppContext.Provider value={{ cartId, setCartId, itemQuantities, setItemQuantities }}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  return useContext(AppContext);
}


export { AppContext, AppWrapper, useAppContext };