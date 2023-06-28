import { createContext, useState } from 'react';

const ArrowUpContext = createContext();

function ArrowUpProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <ArrowUpContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </ArrowUpContext.Provider>
  );
}

export { ArrowUpProvider };
export default ArrowUpContext;
