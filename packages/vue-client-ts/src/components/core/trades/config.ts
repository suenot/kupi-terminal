import { WidgetConfig } from '@/types'

export default [
  {
    name: 'trades',
    title: '',
    component: 'Trades',
    settings: 'core_components/Trades/Settings.js',
    settingsWidth: '300px',
    img: 'core_components/Trades/Trades.png',
    header: 'Trades',
    customHeader: '',
    description: 'People trades',
    author: '#core',
    authorLink: 'https://github.com/kupi-network/kupi-terminal',
    source: 'https://github.com/kupi-network/kupi-terminal/blob/master/react-client/src/core_components/Trades/Trades.js',
    data: {
      'stock': 'BINANCE',
      'pair': 'ETH_BTC',
      'group': '',
      'groupColor': ''
    },
    categories: ['Trades']
  }
] as WidgetConfig[]
