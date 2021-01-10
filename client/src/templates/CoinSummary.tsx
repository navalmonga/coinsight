import React, { useContext, useState } from 'react';
import { WatchListContext } from '../contexts/watchListContext';
import { CoinList, GlassPane } from '../organisms';
import { AddCoin } from '../components';

const userList = ['bitcoin', 'ethereum', 'dogecoin', 'the-graph', 'cardano', 'chainlink', 'binance-coin'];

const localTZ = Intl.DateTimeFormat().resolvedOptions().timeZone

const CoinSummary = () => {
  const { watchList } = useContext(WatchListContext);
  let [time, setTime] = useState(new Date().toLocaleTimeString())
  setInterval(
    () => { setTime(new Date().toLocaleTimeString())},
    1000
  )
  return (
    <GlassPane width="75vw" height="80vh" title={`${localTZ} ${time}`} footer={`© ${new Date().getFullYear()} naval monga`}>
      <AddCoin />
      <CoinList watchListLocal={watchList} />
    </GlassPane>
  );
}

export default CoinSummary;