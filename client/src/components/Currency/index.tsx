import React from 'react';
import { WatchListContext } from '../../contexts/watchListContext';
import { FlexRC, StyledLabel, StyledSelect } from './style';

export type CurrencyProps = {
  current: any,
  setCurrent: any,
}

export const supportedCurrencies = [
  {id: 'usd', name: 'US Dollar', symbol: '$'},
  {id: 'eur', name: 'Euro', symbol: '€'},
  {id: 'rub', name: 'Russian Ruble', symbol: 'RUB'},
  {id: 'idr', name: 'Indonesian Rupiah', symbol: 'IDR'},
  {id: 'kwr', name: 'South Korean Won', symbol: '₩'},
  {id: 'cny', name: 'Chinese Yuan', symbol: 'CN¥'},
  {id: 'jpy', name: 'Japanese Yen', symbol: '¥'},
];

export const symbolMap = new Map([
  ['usd', '$'],
  ['eur', '€'],
  ['rub', 'RUB'],
  ['idr', 'IDR'],
  ['kwr', '₩'],
  ['cny', 'CN¥'],
  ['jpy', '¥']
])

const Currency = (props: CurrencyProps) => {
  const { current, setCurrent } = props;

  return (
    <FlexRC>
      <StyledLabel>{current.symbol}&nbsp;</StyledLabel>
      <StyledSelect name="currency" id="currency" onChange={e => setCurrent({id: e.target.value, symbol: symbolMap.get(e.target.value)})}>
        {supportedCurrencies.map(c => {
          return <option key={c.id} value={c.id}>{c.id.toUpperCase()}</option>
        })}
      </StyledSelect>
    </FlexRC>
  );
}

export default Currency;