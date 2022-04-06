import React, { ChangeEvent, useState } from 'react';
import './Payment.scss';
import classNames from 'classnames';
import { ReactComponent as Maestro } from './img/maestro.svg';
import { ReactComponent as Visa } from './img/visa.svg';
import { ReactComponent as Atm } from './img/atm.svg';
import { ReactComponent as Webmoney } from './img/webmoney.svg';
import { ReactComponent as Paypal } from './img/paypal.svg';

const Button: React.FC = () => {
  const [cardNumber1, setCardNumber1] = useState('');
  const [cardNumber2, setCardNumber2] = useState('');
  const [cardNumber3, setCardNumber3] = useState('');
  const [cardNumber4, setCardNumber4] = useState('');
  const [cardData, setCardData] = useState('');
  const [CVC, setCVC] = useState('');

  const [isVisa, setIsVisa] = useState(false);
  const [isPrivat, setIsPrivat] = useState(true);
  const [isTerminal, setIsTerminal] = useState(false);
  const [isWebMoney, setIsWebMoney] = useState(false);
  const [isPayPal, setIsPayPal] = useState(false);

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const numberValidation = ((event: ChangeEvent<HTMLInputElement>, changer: (value: string) => void) => {
    if (event.target.value.split('').every((char: string) => numbers.includes(char))) {
      changer(event.target.value);
    }
  });
  const resetType = () => {
    setIsVisa(false);
    setIsPrivat(false);
    setIsTerminal(false);
    setIsWebMoney(false);
    setIsPayPal(false);
  };

  return (
    <div className="payment">
      <div className="payment__wrapp">
        <div className="methods">
          <div
            className={classNames(
              'method',
              { 'method--checked': isVisa },
            )}
            role="button"
            tabIndex={0}
            onKeyDown={() => {
              resetType();
              setIsVisa(!isVisa);
            }}
            onClick={() => {
              resetType();
              setIsVisa(!isVisa);
            }}
          >
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
          <div
            className={classNames(
              'method',
              { 'method--checked': isPrivat },
            )}
            role="button"
            tabIndex={0}
            onKeyDown={() => {
              resetType();
              setIsPrivat(!isPrivat);
            }}
            onClick={() => {
              resetType();
              setIsPrivat(!isPrivat);
            }}
          >
            <p className="privat24">Приват24 </p>
            <p className="method__title">Приват24</p>
          </div>
          <div
            className={classNames(
              'method',
              { 'method--checked': isTerminal },
            )}
            role="button"
            tabIndex={0}
            onKeyDown={() => {
              resetType();
              setIsTerminal(!isTerminal);
            }}
            onClick={() => {
              resetType();
              setIsTerminal(!isTerminal);
            }}
          >
            <Atm
              className="atm"
              width="54px"
              height="50px"
            />
            <p className="method__title">Термінали України</p>
          </div>
          <div
            className={classNames(
              'method',
              { 'method--checked': isWebMoney },
            )}
            role="button"
            tabIndex={0}
            onKeyDown={() => {
              resetType();
              setIsWebMoney(!isWebMoney);
            }}
            onClick={() => {
              resetType();
              setIsWebMoney(!isWebMoney);
            }}
          >
            <Webmoney
              className="webmoney"
              width="100px"
              height="50px"
            />
            <p className="method__title">WebMoney</p>
          </div>
          <div
            className={classNames(
              'method',
              { 'method--checked': isPayPal },
            )}
            role="button"
            tabIndex={0}
            onKeyDown={() => {
              resetType();
              setIsPayPal(!isPayPal);
            }}
            onClick={() => {
              resetType();
              setIsPayPal(!isPayPal);
            }}
          >
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
            <div className="card__form">
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
                    minLength={4}
                    value={cardNumber1}
                    onChange={(event) => numberValidation(event, setCardNumber1)}
                    required
                  />
                  <input
                    type="text"
                    className="card__number"
                    maxLength={4}
                    minLength={4}
                    required
                    value={cardNumber2}
                    onChange={(event) => numberValidation(event, setCardNumber2)}
                  />
                  <input
                    type="text"
                    className="card__number"
                    maxLength={4}
                    minLength={4}
                    required
                    value={cardNumber3}
                    onChange={(event) => numberValidation(event, setCardNumber3)}
                  />
                  <input
                    type="text"
                    className="card__number"
                    maxLength={4}
                    minLength={4}
                    required
                    value={cardNumber4}
                    onChange={(event) => numberValidation(event, setCardNumber4)}
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
                      type="text"
                      required
                      value={cardData}
                      onChange={(event) => numberValidation(event, setCardData)}
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
                      required
                      value={CVC}
                      onChange={(event) => numberValidation(event, setCVC)}
                    />
                  </label>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
function numberCheck(event: React.ChangeEvent<HTMLInputElement>, setCardNumber1: React.Dispatch<React.SetStateAction<string>>): void {
  throw new Error('Function not implemented.');
}

