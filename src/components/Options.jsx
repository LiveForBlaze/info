import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import { DATA } from '../data';
import CloseIcon from "../assets/close-icon.svg?component";

import "../App.css";

export const Options = ({ isOpen, onClose, onSubmit }) => {
  const [checkboxes, setCheckboxes] = useState({});
  
  useEffect(() => {
    const data = localStorage.getItem('options');
    setCheckboxes({...checkboxes, ...JSON.parse(data)});
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(checkboxes);
    onSubmit(checkboxes);
    localStorage.setItem('options', JSON.stringify(checkboxes));
    onClose();
  };

  const toggleChange = (e) => {
    setCheckboxes({...checkboxes, [e.target.name]: !checkboxes[e.target.name]});
    console.log(checkboxes);
  };

  const handleSelectAll = () => {
    const newCheckboxes = {};
    DATA.forEach((item) => newCheckboxes[item.id] = true);
    setCheckboxes(newCheckboxes);
  };

  const handleUnSelectAll = () => {
    setCheckboxes({});
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="optionsModal"
      overlayClassName="optionsModalOverlay"
      contentLabel="Options"
      >
      <div className="optionsHeader">
        <div className="optionsTitle">Options</div>
        <CloseIcon onClick={onClose} className="optionsCloseIcon" />
      </div>
      <form onSubmit={handleSubmit} id="options">
        <div className="options">
          {DATA.map((item) => <label key={item.id} className="optionsItem"><input type="checkbox" name={item.id} checked={checkboxes[item.id] ? checkboxes[item.id] : false} onChange={toggleChange} />{item.title}</label>)}
        </div>
      </form>
      <div className="optionsFooter">
        <div>
          <button className="clear" onClick={handleSelectAll}>Add all</button>
          <button className="close" onClick={handleUnSelectAll}>Remove all</button>
        </div>
        <button type="submit" className="clear" form="options">SAVE</button>
      </div>
      </Modal>
  )
};