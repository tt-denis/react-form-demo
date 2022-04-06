import React from 'react';
import Type from '../Type';
import './Form.scss';

const Form: React.FC = () => (
  <>
    <div>
      <h2 className="title">
        Заповніть форму
      </h2>
      <button
        type="button"
        className="button"
      >
        Фіз.особа
      </button>
    </div>
    <form
      action="#"
      method="post"
      className="form"
    >
      <div className="form__wrapp">
        <div className="form__half">
          <div className="row">
            <label
              htmlFor="name"
              className="label label--left"
            >
              {'Ім\'я'}
              <input
                id="name"
                className="input"
                type="text"
                placeholder={'Ім\'я'}
                required
              />
            </label>
            <label
              htmlFor="last_name"
              className="label label--left"
            >
              Прізвище
              <input
                id="last_name"
                className="input"
                type="text"
                placeholder="Прізвище"
                required
              />
            </label>
          </div>
          <label
            htmlFor="company"
            className="label label--left"
          >
            Назва компанії, організації
            <input
              id="company"
              className="input"
              type="text"
              placeholder="Назва компанії"
              required
            />
          </label>
          <label
            htmlFor="email"
            className="label label--left"
          >
            Email-адрес
            <input
              id="email"
              className="input"
              type="email"
              placeholder="Email"
              required
            />
          </label>
          <label
            htmlFor="number"
            className="label label--left"
          >
            Номер телефона
            <input
              id="number"
              className="input"
              type="tel"
              placeholder="Номер телефона"
              required
            />
          </label>
        </div>
        <div className="form__half">
          <label
            htmlFor="country"
            className="label label--left"
          >
            Країна
            <input
              id="country"
              className="input"
              type="text"
              placeholder="Країна"
              required
            />
          </label>
          <div className="row">
            <label
              htmlFor="city"
              className="label label--left"
            >
              Місто
              <input
                id="city"
                className="input"
                type="text"
                placeholder="Місто"
                required
              />
            </label>
            <label
              htmlFor="region"
              className="label label--left"
            >
              Штат, район
              <input
                id="region"
                className="input"
                type="text"
                placeholder="Штат, район"
                required
              />
            </label>
          </div>
          <label
            htmlFor="address"
            className="label label--left"
          >
            Адрес
            <input
              id="address"
              className="input"
              type="text"
              placeholder="Адрес"
              required
            />
          </label>
          <div className="row row--half">
            <label
              htmlFor="index"
              className="label label--left"
            >
              Поштовий індекс
              <input
                id="index"
                className="input input--half"
                type="number"
                placeholder="Індекс"
                required
              />
            </label>
          </div>
        </div>
      </div>
      <h2 className="title title--bottom">
        Види допомоги
      </h2>
      <h3 className="subtitle">
        Ви можете змінити вид допомоги
      </h3>
      <Type />
      <button
        type="submit"
        className="button button--help"
      >
        Допомогти
      </button>
    </form>
  </>
);

export default Form;
