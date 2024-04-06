import { useState, useEffect } from 'react';
import './Popup.css';
import axios from 'axios';

const src = 'https://t-pay.iqfit.app/subscribe/list-test';

const Popup = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(src)
      .then(response => {
        setInfo(response.data.slice(8, 11));
      })
      .catch(error => {
        console.error('Произошла ошибка при загрузке данных:', error);
      });
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 65000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleRadioChange = radioNumber => {
    setIsChecked1(radioNumber === 1);
    setIsChecked2(radioNumber === 2);
    setIsChecked3(radioNumber === 3);
  };

  const handleItemClick = (radioNumber, e) => {
    const items = document.querySelectorAll('.promoCards__item');
    items.forEach(item => {
      item.classList.remove('selected');
    });
    e.currentTarget.classList.add('selected');
    setIsChecked1(radioNumber === 1);
    setIsChecked2(radioNumber === 2);
    setIsChecked3(radioNumber === 3);
  };

  return (
    <div className={`popup ${showPopup ? 'show' : ''}`}>
      <div className="popup-content">
        <span className="promotion">горящее предложение</span>
        <span className="close" onClick={closePopup}>
          X
        </span>
        <h2 className="title">
          Не упусти свой <span className="lastChance">последний шанс</span>
        </h2>
        <p className="text">
          Мы знаем, как трудно начать..<b> Поэтому!</b>
        </p>
        <p className="sale">
          Дарим скидку для <span className="lastChance">лёгкого старта</span> 🏃‍♂️
        </p>
        <p className="gift">Посмотри, что мы для тебя приготовили 🔥</p>
        <div className="promoCards">
          {info.slice(-3).map((item, index) => (
            <div
              key={item.id}
              className="promoCards__item"
              onClick={e => handleItemClick(index + 1, e)}
            >
              <input
                className="radio"
                type="radio"
                id="radio"
                checked={index === 0 ? isChecked1 : index === 1 ? isChecked2 : isChecked3}
                onChange={() => handleRadioChange(index + 1)}
              />
              <label className="radio__period" htmlFor={`radio${index + 1}`}>
                {item.name}
              </label>
              <del className="radio__oldPrice">
                {index === 0 ? '999Р' : index === 1 ? '1690Р' : '5990Р'}
              </del>
              <p className="radio__newPrice">{item.price}₽</p>
              <img
                src={index === 0 ? '/sale40.png' : index === 1 ? '/sale50.png' : '/sale60.png'}
                className={`radio__image ${index === 2 ? 'radio__image_sale' : ''}`}
              />
            </div>
          ))}
        </div>
        <a href="#" className="popup-button" onClick={closePopup}>
          Начать тренироваться
        </a>
      </div>
    </div>
  );
};

export default Popup;

/* <div className="promoCards__item" onClick={e => handleItemClick(2, e)}>
              <input
                className="radio"
                type="radio"
                id="radio"
                checked={isChecked2}
                onChange={() => handleRadioChange(2)}
              />
              <label className="radio__period" htmlFor="radio2">
                1 месяц
              </label>
              <p className="radio__oldPrice">1690Р</p>
              <p className="radio__newPrice">799₽</p>
              <img src="/src/img/sale50.png" className="radio__image" />
            </div>
            <div className="promoCards__item" onClick={e => handleItemClick(3, e)}>
              <input
                className="radio"
                type="radio"
                id="radio"
                checked={isChecked3}
                onChange={() => handleRadioChange(3)}
              />
              <label className="radio__period" htmlFor="radio3">
                3 месяца
              </label>
              <p className="radio__oldPrice">5990Р</p>
              <p className="radio__newPrice">1690₽</p>
              <img src="/src/img/sale60.png" className="radio__image radio__image_sale" />
            </div> */

// const handleRadioChange = radioNumber => {
//   if (radioNumber === 1) {
//     setIsChecked1(true);
//     setIsChecked2(false);
//     setIsChecked3(false);
//   } else if (radioNumber === 2) {
//     setIsChecked1(false);
//     setIsChecked2(true);
//     setIsChecked3(false);
//   } else if (radioNumber === 3) {
//     setIsChecked1(false);
//     setIsChecked2(false);
//     setIsChecked3(true);
//   }
// };

// const handleItemClick = (radioNumber, e) => {
//   const items = document.querySelectorAll('.promoCards__item');
//   items.forEach(item => {
//     item.classList.remove('selected');
//   });
//   e.currentTarget.classList.add('selected');
//   if (radioNumber === 1) {
//     setIsChecked1(true);
//     setIsChecked2(false);
//     setIsChecked3(false);
//   } else if (radioNumber === 2) {
//     setIsChecked1(false);
//     setIsChecked2(true);
//     setIsChecked3(false);
//   } else if (radioNumber === 3) {
//     setIsChecked1(false);
//     setIsChecked2(false);
//     setIsChecked3(true);
//   }
// };
