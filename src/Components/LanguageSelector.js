import React from 'react';
import flagRU from '../languages/flags/ru.png';
import flagUA from '../languages/flags/ua.png';
import flagEN from '../languages/flags/us.png';
import Select from 'react-select';
import { setLanguage } from './redux/actions';
import {connect} from "react-redux";
function LanguageSelector({ currentLanguage, setLanguage }) {
  const options = [
    { value: 'english', label: <div><img src={flagEN} alt="ES" style={{width: 20, height: 15, marginRight: 10}} /> English</div> },
    { value: 'russian', label: <div><img src={flagRU} alt="RU" style={{width: 20, height: 15, marginRight: 10}} /> Русский</div> },
    { value: 'ukrainian', label: <div><img src={flagUA} alt="UA" style={{width: 20, height: 15, marginRight: 10}} /> Українська</div> }
  ];

  const handleChange = (selectedOption) => {
    setLanguage(selectedOption.value);
  };
  // const customStyles = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     display: 'flex',
  //     alignItems: 'center',
  //     color: state.isSelected ? 'white' : 'black',
  //     backgroundColor: state.isSelected ? 'blue' : 'white',
  //     padding: 10,
  //   }),
  //   control: (provided) => ({
  //     ...provided,
  //     marginTop: 10,
  //     width: 220
  //   })
  // };

  return (
    <Select
      value={options.find(option => option.value === currentLanguage)}
      onChange={handleChange}
      options={options}
    />
  );
}

const mapStateToProps = (state) => ({
  currentLanguage: state.currentLanguage
});

const mapDispatchToProps = {
  setLanguage
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);