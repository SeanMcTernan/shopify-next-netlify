import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

function AppWrapper({ children }) {
  let [cartId, setCartId] = useState(null);
  let [itemQuantities, setItemQuantities] = useState(null);
  let [checkoutUrl, setCheckoutUrl] = useState(null);

  return (
    <AppContext.Provider value={{ cartId, setCartId, itemQuantities, setItemQuantities, checkoutUrl, setCheckoutUrl }}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  return useContext(AppContext);
}


export { AppContext, AppWrapper, useAppContext };