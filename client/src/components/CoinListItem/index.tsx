import React, { useContext } from 'react';
import { StyledItem, ItemTicker, ItemTitle, MarketCap, DeleteIcon } from './style';
import { StyledButton } from '../AddCoin/style';
import { WatchListContext } from '../../contexts/watchListContext';

const homepageMap = new Map([['bitcoin', 'https://bitcoin.org'], 
                            ['ethereum', 'https://ethereum.org'],
                            ['tether', 'https://tether.to'],
                            ['xrp', 'https://ripple.com'],
                            ['litecoin', 'https://litecoin.org'],
                            ['cardano', 'https://cardano.org'],
                            ['polkadot', 'https://polkadot.network'],
                            ['bitcoin cash', 'https://bitcoincash.org'],
                            ['dogecoin', 'https://dogecoin.com']]);

const imgMap = new Map([['bitcoin', 'https://upload.wikimedia.org/wikipedia/commons/2/25/Bitcoin_lightning_logo.svg'], 
                            ['ethereum', 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ethereum_Classic_Logo.svg'],
                            ['tether', 'https://cryptologos.cc/logos/tether-usdt-logo.svg?v=009'],
                            ['xrp', 'https://ripplex.io/assets/images/home-hero-ripplex.svg'],
                            ['litecoin', undefined],
                            ['dogecoin', 'https://dogecoin.com/imgs/doge.png'],
                            ['bitcoincash', undefined]]);                            

export type ListItemProps = {
  item: {
    symbol: string,
    name: string,
    image: string,
    ath: number,
    max_supply: number,
    market_cap: number,
    circulating_supply: number,
    price_change_percentage_24h: number,
    link: string,
  },
  currency: {
    id: string,
    symbol: string,
  }
}
const abbreviate_number = (num: any, fixed: any) => {
  // https://stackoverflow.com/a/10601315
  if (num === null) { return null; } // terminate early
  if (num === 0) { return '0'; } // terminate early
  fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
  var b = (num).toPrecision(2).split("e"), // get power
      k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
      c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3) ).toFixed(1 + fixed), // divide by power
      d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
      e = d + ['', 'K', 'M', 'B', 'T'][k]; // append power
  return e;
}

const CoinListItem = (props: ListItemProps) => {
  const { item, currency } = props;
  const { deleteCoin } = useContext(WatchListContext);
  return (
    <StyledItem href="https://google.com/">
      <ItemTicker delta={item.price_change_percentage_24h >= 0}><img src={imgMap.get(item.name.toLowerCase())?imgMap.get(item.name.toLowerCase()):item.image} alt={item.name} />&nbsp;{item.symbol.toUpperCase()}<br/><br/>{item.price_change_percentage_24h < 0 ? <span>&darr;</span>: <span>&uarr;</span>}{String(item.price_change_percentage_24h).replace('-','')}</ItemTicker>
      <ItemTitle>{item.name.toUpperCase()}</ItemTitle>
      <ItemTitle>{currency.symbol}{item.ath} {currency.id.toUpperCase()}</ItemTitle>
      <MarketCap>
        mkt cap:&nbsp;{abbreviate_number(item.market_cap, 0)}<br/>
        circulation:&nbsp;{abbreviate_number(item.circulating_supply, 0)}<br/>
        max supply:&nbsp;{item.max_supply?abbreviate_number(item.max_supply, 0):'n/a'}
      </MarketCap>
      <StyledButton className="grow" setJustify={true} href={homepageMap.get(item.name.toLowerCase())} target="_blank" rel="noopener noreferrer">homepage&nbsp;&#x2197;</StyledButton>
      <DeleteIcon
        onClick={(e) => {
          e.preventDefault();
          deleteCoin(item.name.toLowerCase().replaceAll(' ', '-'));
          console.log('delete');
        }}
      >&times;</DeleteIcon>
    </StyledItem>
  );
}

export default CoinListItem;