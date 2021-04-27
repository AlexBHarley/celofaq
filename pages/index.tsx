export default function Home() {
  return (
    <div className="max-w-screen-sm mx-auto py-10 prose">
      <h1>Celo - The Platform for Mobile DeFi</h1>
      <p>
        Celo is a mobile first, decentralised blockchain platform enabling
        access to financial services. More information can be found in the{' '}
        <a href="https://docs.celo.org/overview">documentation</a> on{' '}
        <a href="https://celo.org">celo.org</a>.
      </p>

      <h2>What makes Celo special?</h2>
      <p>Coming soon...</p>

      <h2>Buying CELO</h2>
      <p>
        You can buy CELO, cUSD and cEUR at most major exchanges,
        <ul>
          <li>
            <a href="https://binance.com">Binance</a>
          </li>
          <li>
            <a href="https://coinbase.com">Coinbase</a>
          </li>
          <li>
            <a href="https://bittrex.com">Bittrex</a>
          </li>
        </ul>
        to name a few. For a more in depth look, see the{' '}
        <a href="https://coinmarketcap.com/currencies/celo/markets/">
          Coin Market Cap exchanges overview
        </a>
        .
      </p>

      <h2>Staking</h2>
      <p>
        Staking is the act of voting for a validator group in the Celo network.
        Once a validator group has enough votes (one CELO equals one vote) they
        are able to elect individual validators to run on the Celo network.
      </p>
      <p>
        Staking enables users to earn up to 5.5% APY for their investment.
        Rewards are paid out daily.
      </p>
      <p>
        You can currently stake via the following methods:
        <ul>
          <li>
            <a href="https://plock.fi">Plock.fi</a>
          </li>
          <li>
            <a href="https://celowallet.app">Celo Wallet</a>
          </li>
          <li>
            <a href="https://celoterminal.com">Celo Terminal</a>
          </li>
          <li>
            <a href="https://docs.celo.org/command-line-interface/introduction">
              Celo CLI
            </a>{' '}
            - for advanced users only.
          </li>
        </ul>
      </p>
    </div>
  );
}
