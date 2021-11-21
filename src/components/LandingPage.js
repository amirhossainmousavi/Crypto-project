import React, { useEffect , useState } from 'react';
import { getApi } from '../services/api';
import Loading from './Loading';
import CoinsComponent from './CoinsComponent';
import style from './LandingPage.module.css'

const LandingPage = () => {

    const [Coins, setCoin] = useState([]);
    const [search , setSearch] = useState('')

    useEffect(() => {
        const FetchApi = async () => {
            const data = await getApi();
            setCoin(data)
        }
        FetchApi();
    }, []);

    const changeHandler = (event) => {
        setSearch(event.target.value)
    }
    const searchCoin = Coins.filter(coines => coines.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className={style.container}>
            <input placeholder='Search Coins !' value={search} onChange={changeHandler}  />
           {Coins.length ? searchCoin.map(Coin => <CoinsComponent 
           key={Coin.id}
           name ={Coin.name}
           image = {Coin.image}
           symbol = {Coin.symbol}
           price = {Coin.current_price}
           marketCup = {Coin.market_cap}
           priceChange = {Coin.price_change_24h}
           />)  : 
           <Loading />
           }
        </div>
    );
};

export default LandingPage;