import { watch } from 'fs';
import React, { useContext, useEffect, useState } from 'react';
import CoinGecko from '../../apis/CoinGecko';
import { Currency, CoinListItem } from '../../components';
import { StyledList } from './style';

export type ListProps = {
  watchListLocal: any,
}

const CoinList = (props: ListProps) => {
  const { watchListLocal } = props;

  const [loading, setLoading] = useState(false);
  const [curr, setCurr] = useState({id: 'usd', symbol: '$'});
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await CoinGecko.get('/coins/markets/', {
        params: {
          vs_currency: curr.id,
          ids: watchListLocal.join(','),
        },
      });
      setCoins(response.data);
      console.log(response.data);
    }

    fetchData()
    setLoading(false);
  }, [watchListLocal]);
  return (
    <StyledList>
      {loading && (
        <span>Loading...</span>
      )}
      <Currency current={curr} setCurrent={setCurr} />
      {!loading && (
        coins.map((ticker: any) => {
          return (
            <CoinListItem key={ticker.symbol} item={ticker} currency={curr} />
          )
        })
      )}
    </StyledList>
  );
}

export default CoinList;