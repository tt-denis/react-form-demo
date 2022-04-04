import React from 'react';
import './App.scss';
import Form from '../Form';
import Button from '../Button';
import Type from '../Type';
import Payment from '../Puyment';

const App: React.FC = () => (
  <>
    <div className="close" />
    <div className="App">
      <h2 className="title">
        Заповніть форму
      </h2>
      <Button />
      <Form />
      <h2 className="title title--bottom">
        Види допомоги
      </h2>
      <h3 className="subtitle">
        Ви можете змінити вид допомоги
      </h3>
      <Type />
      <Payment />
    </div>
  </>
);

export default App;
