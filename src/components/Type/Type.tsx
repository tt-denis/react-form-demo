import React from 'react';
import './Type.scss';
import { ReactComponent as Hand } from './img/hand.svg';
import { ReactComponent as Wallet } from './img/wallet.svg';
import { ReactComponent as Tshirt } from './img/tshirt.svg';
import { ReactComponent as Heart } from './img/heart.svg';

const Type: React.FC = () => (
  <div className="wrapp">
    <div className="item">
      <div className="icon">
        <Hand
          className="img"
          width="45px"
          height="45px"
        />
      </div>
      <p className="item__title">Зробити</p>
    </div>
    <div className="item">
      <div className="icon">
        <Wallet
          className="img"
          width="45px"
          height="45px"
        />
      </div>
      <p className="item__title">
        Фінансова допомога
      </p>
    </div>
    <div className="item">
      <div className="icon">
        <Tshirt
          className="img"
          width="45px"
          height="45px"
        />
      </div>
      <p className="item__title">Матеріальна допомога</p>
    </div>
    <div className="item">
      <div className="icon">
        <Heart
          className="img"
          width="45px"
          height="45px"
        />
      </div>
      <p className="item__title">Волонтерство</p>
    </div>
  </div>
);

export default Type;
