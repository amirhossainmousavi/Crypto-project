import React from 'react';
import style from './Coins.module.css'

const CoinsComponent = ({ name , image , symbol , price , marketCup , priceChange}) => {
    return (
        <div className={style.container} >
            <img src={image} alt={`iamge ${name}`} />
            <span>{name}</span>
            <span>{symbol.toUpperCase()}</span>
            <span>$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ? style.changeGreen : style.changeRed}>{priceChange.toFixed(2)} %</span>
            <span className={style.marketCup}>$ {marketCup.toLocaleString()}</span>
           
        </div>
    );
};

export default CoinsComponent;


