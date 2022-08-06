import TodoApp from './container/TodoApp';
import './App.css'
import './AppDarkMood.css'
import { createContext, useContext, useState } from 'react';

export const ColorMood = createContext();
export const ColorMoodSpatcher = createContext()


const App = () => {
  const [mood, setMood] = useState("light");

  return (
    <ColorMood.Provider value={mood}>
      <ColorMoodSpatcher.Provider value={setMood}>
        <div className={mood === 'light' ? "App" : "App_D"}>
          <TodoApp />
        </div>
      </ColorMoodSpatcher.Provider>
    </ColorMood.Provider>

  );
}

export default App;
