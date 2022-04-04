import React from 'react';
import './Payment.scss';
import { ReactComponent as Maestro } from './img/maestro.svg';
import { ReactComponent as Visa } from './img/visa.svg';
import { ReactComponent as Atm } from './img/atm.svg';
import { ReactComponent as Webmoney } from './img/webmoney.svg';
import { ReactComponent as Paypal } from './img/paypal.svg';

const Button: React.FC = () => (
  <div className="payment">
    <div className="payment__wrapp">
      <div className="methods">
        <div className="method">
          <Maestro
            className="maestro"
            width="45px"
            height="45px"
          />
          <Visa
            className="visa"
            width="50px"
            height="50px"
          />
          <p className="method__title">Карта Visa/MasterCard</p>
        </div>
        <div className="method">
          <p className="privat24">Приват24 </p>
          <p className="method__title">Приват24</p>
        </div>
        <div className="method">
          <Atm
            className="atm"
            width="54px"
            height="50px"
          />
          <p className="method__title">Термінали України</p>
        </div>
        <div className="method">
          <Webmoney
            className="webmoney"
            width="100px"
            height="50px"
          />
          <p className="method__title">WebMoney</p>
        </div>
        <div className="method">
          <Paypal
            className="paypal"
            width="100%"
            height="50px"
          />
          <p className="method__title">PayPal</p>
        </div>
      </div>
      <div className="card__wrapp">
        <div className="card">
          <form className="card__form">
            <label
              className="card__number-label"
              htmlFor="card-number"
            >
              Номер карти
              <div className="card__number-wrapp">
                <input
                  id="card-number"
                  type="text"
                  className="card__number"
                  maxLength={4}
                />
                <input
                  type="text"
                  className="card__number"
                  maxLength={4}
                />
                <input
                  type="text"
                  className="card__number"
                  maxLength={4}
                />
                <input
                  type="text"
                  className="card__number"
                  maxLength={4}
                />
              </div>
              <div className="row row--half-mini">
                <label
                  htmlFor="name"
                  className="label label--left "
                >
                  Термін дії
                  <input
                    id="name"
                    className="input"
                    type="date"
                  />
                </label>
                <label
                  htmlFor="cvc"
                  className="label label--left"
                >
                  CVC/CVV
                  <input
                    id="cvc"
                    className="input card__cvc"
                    type="password"
                    maxLength={3}
                  />
                </label>
              </div>
            </label>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Button;
