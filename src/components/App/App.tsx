import React from 'react';
import './App.scss';
import Form from '../Form';
import Type from '../Type';

const App: React.FC = () => (
  <>
    <div className="close" />
    <div className="App">
      <h2 className="title">
        Заповніть форму
      </h2>
      <button
        type="button"
        className="button"
      >
        Фіз.особа
      </button>
      <Form />
      <h2 className="title title--bottom">
        Види допомоги
      </h2>
      <h3 className="subtitle">
        Ви можете змінити вид допомоги
      </h3>
      <Type />
    </div>
  </>
);

export default App;
