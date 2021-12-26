import "./App.css";
import { useState } from "react";
import { Topic } from "./components/Topic";
import { DATA } from "./data";

function App() {
  const [activeItem, setActiveItem] = useState(null);
  return (
    <div className="app">
      {DATA.map((item, index) => (
        <Topic
          {...item}
          onClick={() => setActiveItem(activeItem === index ? null : index)}
          isOpened={index === activeItem}
        />
      ))}
    </div>
  );
}

export default App;
