/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import './Main.css';
import axios from 'axios';

const src = 'https://t-pay.iqfit.app/subscribe/list-test';

function Main() {
  const [info, setInfo] = useState([]);
  const [timerFinished, setTimerFinished] = useState(false);

  useEffect(() => {
    axios
      .get(src)
      .then(response => {
        setInfo(response.data.slice(0, 4));
      })
      .catch(error => {
        console.error('Произошла ошибка при загрузке данных:', error);
      });
  }, []);

  const promoData = [
    { index: 0, name: '1 неделя', price: '999', hideOldPrice: true, hideSaleImage: true },
    { index: 1, name: '1 месяц', price: '1690', hideOldPrice: true, hideSaleImage: true },
    { index: 2, name: '3 месяца', price: '5990', hideOldPrice: true, hideSaleImage: true },
    { index: 3, name: 'навсегда', price: '18 990', hideOldPrice: true, hideSaleImage: true }
  ];

  useEffect(() => {
    const countdownDate = new Date().getTime() + 61000;

    setTimeout(() => {
      setTimerFinished(true);
    }, 61000);
  }, []);

  useEffect(() => {
    if (timerFinished) {
      setInfo(promoData);
    }
  }, [timerFinished]);

  const handleItemClick = e => {
    const items = document.querySelectorAll('.promo__item');
    items.forEach(item => {
      item.classList.remove('selected');
    });
    e.currentTarget.classList.add('selected');
  };

  return (
    <main>
      <div className="main">
        <h2 className="main__title">Выберите подходящий тарифный план</h2>
        <div className="main__content">
          <div className="main__image"></div>
          <div className="main__info">
            <ul className="promo">
              {info.slice(0, 4).map((item, index) => (
                <li
                  key={item.id}
                  className={`promo__item item ${index + 1} ${index === 3 ? 'item4' : ''}`}
                  onClick={handleItemClick}
                >
                  {!item.hideSaleImage && (
                    <img
                      src={
                        index === 0
                          ? '/sale30.png'
                          : index === 1
                          ? '/sale40.png'
                          : index === 2
                          ? '/sale50.png'
                          : '/sale70.png'
                      }
                      className="promo__image"
                      alt="Sale"
                    />
                  )}
                  <p className={`promo__period ${index === 3 ? 'promo__period_forever' : ''}`}>
                    {item.name}
                  </p>
                  <div className={`promo__price ${index === 3 ? 'promo__price_forever' : ''}`}>
                    <p className="promo__newPrice">{item.price}₽</p>
                    {!item.hideOldPrice && (
                      <p className="promo__oldPrice">
                        {index === 0
                          ? '999₽'
                          : index === 1
                          ? '1690₽'
                          : index === 2
                          ? '5990₽'
                          : '18 990₽'}
                      </p>
                    )}
                  </div>
                  <p className={`promo__text ${index === 3 ? 'promo__text_forever' : ''}`}>
                    {index === 0
                      ? 'Чтобы просто начать 👍🏻'
                      : index === 1
                      ? 'Привести тело впорядок 💪🏻'
                      : index === 2
                      ? 'Изменить образ жизни 🔥'
                      : 'Всегда быть в форме ⭐️'}
                  </p>
                </li>
              ))}
            </ul>
            <p className="promo__paragraph">
              Следуя плану на 3 месяца, люди получают в 2 раза лучший результат, чем за 1 месяц
            </p>
            <input type="checkbox" id="checkbox" className="promo__checkbox" />
            <label htmlFor="checkbox" className="promo__label">
              Я соглашаюсь с <span>Правилами сервиса</span> и условиями
              <span> Публичной оферты</span>.
            </label>
            <a href="#">
              <button className="promo__button">Купить</button>
            </a>
            <article className="promo__article">
              Нажимая «Купить», Пользователь соглашается на автоматическое списание денежных средств
              по истечению купленного периода. Дальнейшие списания по тарифам участвующим в акции
              осуществляются по полной стоимости согласно оферте.
            </article>
          </div>
        </div>
      </div>

      <div className="popup" id="popup">
        <div className="popup-content">
          <span className="close" id="close">
            &times;
          </span>
          <h2>Welcome to the Popup!</h2>
          <p>This is a self-popping popup.</p>
        </div>
      </div>
    </main>
  );
}

export default Main;

/* <li className="promo__item item2" onClick={handleItemClick}>
                <img src="/src/img/sale40.png" className="promo__image"></img>
                <p className="promo__period">1 месяц</p>
                <div className="promo__price">
                  <p className="promo__newPrice">999₽</p>
                  <p className="promo__oldPrice">1690₽</p>
                </div>
                <p className="promo__text">Привести тело впорядок 💪🏻</p>
              </li>
              <li className="promo__item item3" onClick={handleItemClick}>
                <img src="/src/img/sale50.png" className="promo__image"></img>
                <p className="promo__period">3 месяца</p>
                <div className="promo__price">
                  <p className="promo__newPrice">2990₽</p>
                  <p className="promo__oldPrice">5990₽</p>
                </div>
                <p className="promo__text">Изменить образ жизни 🔥</p>
              </li>
              <li className="promo__item item4" onClick={handleItemClick}>
                <img src="/src/img/sale70.png" className="promo__image"></img>
                <p className="promo__period promo__period_forever">навсегда</p>
                <div className="promo__price promo__price_forever">
                  <p className="promo__newPrice">5990₽</p>
                  <p className="promo__oldPrice">18 990₽</p>
                </div>
                <p className="promo__text promo__text_forever">
                  Всегда быть в форме и поддерживать своё здоровье ⭐️
                </p>
              </li> */

/* <p className="promo__oldPrice">
                      {index === 0
                        ? '999₽'
                        : index === 1
                        ? '1690₽'
                        : index === 2
                        ? '5990₽'
                        : '18 990₽'}
                    </p> */
