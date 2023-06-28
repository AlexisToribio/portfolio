import { ThemeProvider } from './context/ThemeContext';
import { TranslationProvider } from './context/TranslationContext';
import Home from './pages/Home';

function App() {
  return (
    <TranslationProvider>
      <ThemeProvider>
        <div className="App">
          <Home />
        </div>
      </ThemeProvider>
    </TranslationProvider>
  );
}

export default App;
