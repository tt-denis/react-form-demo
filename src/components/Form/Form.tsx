import React from 'react';
import './Form.scss';

const Form: React.FC = () => (
  <form className="form">
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
          />
        </label>
      </div>
    </div>
  </form>
);

export default Form;
