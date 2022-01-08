import { useState, useEffect } from "react";
import OptionsIcon from "./assets/options-icon.svg?component";
import { Topic } from "./components/Topic";
import { DATA } from "./data";
import { Options } from './components/Options';

import "./App.css";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState({});
  const [activeItem, setActiveItem] = useState(null);
  const [data, setData] = useState(DATA);
  const [availableData, setAvailableData] = useState(DATA);
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

  const toggleShowModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSubmit = (values) => {
    setVisibleItems(values);
  }

  useEffect(() => {
    setVisibleItems(JSON.parse(localStorage.getItem('options')));
  }, []);

  const handleFilter = (input, filter) => {
    return [...input].filter((item) => (
        item.data &&
        item.data.filter((item) => {
          return (
            item.title?.toLowerCase().includes(filter) ||
            item.header?.toLowerCase().includes(filter)
          );
        }).length > 0
    ));
  }

  // Filter DATA
  useEffect(() => {
    if (filter) {
      const newData = handleFilter([...availableData], filter);
      setData(newData);
      executeScroll();
    } else {
      setData(availableData);
      setActiveItem(null);
      executeScroll();
    }
  }, [filter]);

  useEffect(() => {
    setAvailableData([...DATA].filter((item) => visibleItems[item.id]));
    executeScroll();
  }, [visibleItems]);

  useEffect(() => {
    setData(availableData);
    executeScroll();
  }, [availableData]);

  // Set item active if it's only one
  useEffect(() => {
    setActiveItem(data.length === 1 ? 0 : null);
  }, [data]);

  console.log(visibleItems)

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
          <div onClick={toggleShowModal} className="optionsIcon"><OptionsIcon /></div>
        </div>
      </div>
      <div className="app">
        <div className="divider" />
        {data
          ?.sort((a, b) => (a.title > b.title ? 1 : -1))
          .map((item, index) => (
            <Topic
              key={item.id}
              {...item}
              filter={filter}
              onClick={() => setActiveItem(activeItem === index ? null : index)}
              isOpened={index === activeItem}
            />
          ))}
        {data?.length === 0 && "Not found"}
        <div className="divider" />
        <Options 
          isOpen={isModalVisible}
          onClose={toggleShowModal}
          onSubmit={handleSubmit}
        />
        <div className="buffer">Info by Glowing Fragments</div>
      </div>
    </>
  );
}

export default App;
