import axios from 'axios';

const CoinGeckoURL = 'https://api.coingecko.com/api/v3'

export default axios.create({
  baseURL: CoinGeckoURL,
});