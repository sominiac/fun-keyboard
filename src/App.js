import React from 'react';
import Button from './components/keyboard-button';
import Select from './components/select';

import lightOn from './assets/images/light_on.svg';
import keyBoard from './assets/arrays/keyboard.json';

import './style.scss';

function App() {
  let array = Object.assign({}, keyBoard['En']);

  setLanguage();

  let arrayKeyboard = array['keyboard'];
  let keyboardFirstRow = arrayKeyboard['first-row'];
  let keyboardSecondRow = arrayKeyboard['second-row'];
  let keyboardThirdRow = arrayKeyboard['third-row'];
  let keyboardFourthRow = arrayKeyboard['fourth-row'];
  let keyboardFifthRow = arrayKeyboard['fifth-row'];

  let arrayHeader = array['header'];
  let headerScoreText = arrayHeader['headerScoreText'];
  let headerTitleText = arrayHeader['headerTitleText'];
  let languageText = arrayHeader['languageText'];
  let optionEn = arrayHeader['optionEn'];
  let optionRu = arrayHeader['optionRu'];

  let arrayMainContent = array['mainContent'];
  let titleTop = arrayMainContent['titleTop'];
  let titleBottom = arrayMainContent['titleBottom'];

  let arrayFooter = array['footer'];
  let link = arrayFooter['link'];

  let arrayButtonsValue = [];

  function setLanguage() {
    if (localStorage.getItem('language') === 'En') {
      array = Object.assign({}, keyBoard['En']);
    } else if (localStorage.getItem('language') === 'Ru') {
      array = Object.assign({}, keyBoard['Ru']);
    }
  }

  getKeyboardValue(keyboardFirstRow);
  getKeyboardValue(keyboardSecondRow);
  getKeyboardValue(keyboardThirdRow);
  getKeyboardValue(keyboardFourthRow);
  getKeyboardValue(keyboardFifthRow);

  function getKeyboardValue(array) {
    Object.entries(array).map((item) => (
      Object.entries(item[1]).map((item) => (
        arrayButtonsValue.push(item[1][1]['keyCode'])
      ))
    ))
  }

  function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomButton(array) {
    let randomNumber = getRandomNumbers(0, 54);
    return array[randomNumber]
  }

  let counter = 0;
  let [scoreCounter, setScoreCounter] = React.useState((localStorage.getItem('score') !== 0) ? localStorage.getItem('score') : 0);
  const [titleCounter, setTitleCounter] = React.useState(0);
  const [selectedButton, setSelectedButton] = React.useState(getRandomButton(arrayButtonsValue));

  React.useEffect(() => {
    const onKeyPressed = (event) => {
      let pressedButton = event.keyCode;

      if (pressedButton == selectedButton) {
        setSelectedButton(getRandomButton(arrayButtonsValue));
        counter = titleCounter + 1;
        setTitleCounter(counter);
      } else if (pressedButton !== selectedButton) {
        if (titleCounter > scoreCounter) {
          setScoreCounter(titleCounter);
          localStorage.setItem('score', titleCounter);
        }
        setTitleCounter(0);
        counter = 0;
      }
    };

    window.addEventListener('keydown', onKeyPressed);

    return () => {
      window.removeEventListener('keydown', onKeyPressed);
    }
  });

  return (
    <React.Fragment>
      <div className="wrapper">
        <header className="header">
          <div className="header__score">
            <p className="text header-score__text">{headerScoreText}</p>
            <p className="text score__counter">{scoreCounter}</p>
          </div>
          <div className="header__title">
            <h1 className="text header-title__text">{headerTitleText}</h1>
            <h1 className="text title__counter">{titleCounter}</h1>
          </div>
          <div className="header__user-menu">
            {/* <div className="theme">
            <img className="theme__image" src={lightOn} alt="Выключить свет" />
          </div> */}
            <div className="language">
              <p className="text language__text">{languageText}</p>
              <Select optionEn={optionEn} optionRu={optionRu} />
            </div>
          </div>
        </header>
        <section className="main-content">
          <h2 className="text main-content__title main-content__title_top">{titleTop}</h2>
          <div className="keyboard">
            <div className="row keyboard__row1">
              {Object.entries(keyboardFirstRow).map((item, index) => (
                Object.entries(item[1]).map((item) => (
                  <Button colorName={item[1][0]['keyColor']} buttonKey={item[0]} key={index} buttonWidth={(item[0] === "Tab" || item[0] === "Back") ? '96' : (item[0] === "Caps" || item[0] === "Enter") ? '117' : (item[0] === "Shift" || item[0] === "RShift") ? '154' : '64'} buttonActive={(selectedButton == item[1][1]['keyCode']) ? item[1][0]['keyColor'] : ''} />
                ))
              ))}
            </div>
            <div className="row keyboard__row2">
              {Object.entries(keyboardSecondRow).map((item, index) => (
                Object.entries(item[1]).map((item) => (
                  <Button colorName={item[1][0]['keyColor']} buttonKey={item[0]} key={index} buttonWidth={(item[0] === "Tab" || item[0] === "Back") ? '96' : (item[0] === "Caps" || item[0] === "Enter") ? '117' : (item[0] === "Shift" || item[0] === "RShift") ? '154' : '64'} buttonActive={(selectedButton == item[1][1]['keyCode']) ? item[1][0]['keyColor'] : ''} />
                ))
              ))}
            </div>
            <div className="row keyboard__row3">
              {Object.entries(keyboardThirdRow).map((item, index) => (
                Object.entries(item[1]).map((item) => (
                  <Button colorName={item[1][0]['keyColor']} buttonKey={item[0]} key={index} buttonWidth={(item[0] === "Tab" || item[0] === "Back") ? '96' : (item[0] === "Caps" || item[0] === "Enter") ? '117' : (item[0] === "Shift" || item[0] === "RShift") ? '154' : '64'} buttonActive={(selectedButton == item[1][1]['keyCode']) ? item[1][0]['keyColor'] : ''} />
                ))
              ))}
            </div>
            <div className="row keyboard__row4">
              {Object.entries(keyboardFourthRow).map((item, index) => (
                Object.entries(item[1]).map((item) => (
                  <Button colorName={item[1][0]['keyColor']} buttonKey={item[0]} key={index} buttonWidth={(item[0] === "Tab" || item[0] === "Back") ? '96' : (item[0] === "Caps" || item[0] === "Enter") ? '117' : (item[0] === "Shift" || item[0] === "RShift") ? '154' : '64'} buttonActive={(selectedButton == item[1][1]['keyCode']) ? item[1][0]['keyColor'] : ''} />
                ))
              ))}
            </div>
            <div className="row keyboard__row5">
              {Object.entries(keyboardFifthRow).map((item, index) => (
                Object.entries(item[1]).map((item) => (
                  <Button colorName={item[1][0]['keyColor']} buttonKey={item[0]} key={index} buttonWidth={(item[0] === "Tab" || item[0] === "Back") ? '96' : (item[0] === "Caps" || item[0] === "Enter") ? '117' : (item[0] === "Shift" || item[0] === "RShift") ? '154' : '64'} buttonActive={(selectedButton == item[1][1]['keyCode']) ? item[1][0]['keyColor'] : ''} />
                ))
              ))}
            </div>
          </div>
          <h2 className="text main-content__title main-content__title_bottom">{titleBottom}</h2>
        </section>
        <footer className="footer"><a className="text" href="https://codepen.io/evilpaper/pen/dyyZjLQ" target="_blank">{link}</a></footer>
      </div>
    </React.Fragment>
  );
}

export default App;
