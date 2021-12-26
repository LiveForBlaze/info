import "./App.css";
import { useState, useEffect } from "react";
import { Topic } from "./components/Topic";
import { DATA } from "./data";

function App() {
  const [activeItem, setActiveItem] = useState(null);
  const [data, setData] = useState(DATA);
  const [filter, setFilter] = useState("");

  const executeScroll = () => window.scrollTo(0, 0);

  const handleClose = () => {
    setActiveItem(null);
    executeScroll();
  };

  const handleClear = () => {
    setFilter("");
    executeScroll();
  };

  useEffect(() => {
    if (filter) {
      const newData = [...DATA].filter((item) => {
        return (
          item.data &&
          item.data.filter((item) => {
            return (
              item.title?.toLowerCase().includes(filter) ||
              item.header?.toLowerCase().includes(filter)
            );
          }).length > 0
        );
      });
      setData(newData);
      executeScroll();
    } else {
      setData(DATA);
      setActiveItem(null);
      executeScroll();
    }
  }, [filter]);

  useEffect(() => {
    if (data.length === 1) {
      setActiveItem(0);
    }
  }, [data]);

  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <input
            type="text"
            className="search"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          />
          <div className="clear" onClick={handleClear}>
            clear filter
          </div>
          <div className="close" onClick={handleClose}>
            close all
          </div>
        </div>
      </div>
      <div className="app">
        <div className="divider" />
        {data?.map((item, index) => (
          <Topic
            {...item}
            filter={filter}
            onClick={() => setActiveItem(activeItem === index ? null : index)}
            isOpened={index === activeItem}
          />
        ))}
        {data?.length === 0 && "Not found"}
        <div className="divider" />
        <div className="buffer">Info by Glowing Fragments</div>
      </div>
    </>
  );
}

export default App;
