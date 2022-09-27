import { useState } from 'react';
import { ThemeContext } from './contexts/theme-context';
import Home from './pages/Home';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
