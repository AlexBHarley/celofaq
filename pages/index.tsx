import { useState } from 'react';
import ReactCollapsible from 'react-collapsible';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { Logo, Footer } from '../components';

function Collapsible({ title, children }: any) {
  const [open, setOpen] = useState(false);

  return (
    <ReactCollapsible
      trigger={
        <h2 className="flex items-center space-x-3">
          {open ? (
            <ChevronDownIcon className="h-6 w-6" />
          ) : (
            <ChevronRightIcon className="h-6 w-6" />
          )}
          <span>{title}</span>
        </h2>
      }
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      {children}
    </ReactCollapsible>
  );
}

export default function Home() {
  return (
    <div className="max-w-screen-sm mx-auto py-10 prose px-4">
      <div className="inline-flex items-center space-x-3 mb-2">
        <Logo className="h-6 w-6" />
        <h1
          style={{
            fontFamily: 'Jost',
            display: 'inline',
            marginBottom: '0px',
            marginLeft: '0.5em',
          }}
        >
          celo
        </h1>
      </div>
      <h2 style={{ marginBottom: '1em', marginTop: '0.5em' }}>
        The Platform for Mobile DeFi
      </h2>
      <p>
        Celo is a mobile first, decentralised blockchain platform enabling
        access to financial services. More information can be found in the{' '}
        <a target="_blank" href="https://docs.celo.org/overview">
          documentation
        </a>{' '}
        on{' '}
        <a target="_blank" href="https://celo.org">
          celo.org
        </a>
        .
      </p>

      <Collapsible title="What are CELO, cUSD and cEUR?">
        <p>
          cUSD and cEUR are stable coins on the Celo network. They track the
          price 1-to-1 of their real world counterparts. Stable coins are
          important to a blockchain platform as it enables users to send and
          receive amounts that aren't subject to large fluctuations in price.
        </p>
        <p>
          CELO is the platforms native asset and is used to vote for validator
          groups (staking) and vote on governance proposals.
        </p>
      </Collapsible>

      <h2></h2>
      <Collapsible title="Buying CELO">
        <p>
          You can buy CELO, cUSD and cEUR at most major exchanges,
          <ul>
            <li>
              <a target="_blank" href="https://binance.com">
                Binance
              </a>
            </li>
            <li>
              <a target="_blank" href="https://coinbase.com">
                Coinbase
              </a>
            </li>
            <li>
              <a target="_blank" href="https://bittrex.com">
                Bittrex
              </a>
            </li>
          </ul>
          to name a few. For a more in depth look, see the{' '}
          <a
            target="_blank"
            href="https://coinmarketcap.com/currencies/celo/markets/"
          >
            Coin Market Cap exchanges overview
          </a>
          .
        </p>
      </Collapsible>

      <Collapsible title="Staking">
        <p>
          Staking is the act of voting for a validator group in the Celo
          network. Once a validator group has enough votes (one CELO equals one
          vote) they are able to elect individual validators to run on the Celo
          network.
        </p>
        <p>
          Staking enables users to earn up to 5.5% APY for their investment.
          Rewards are paid out daily.
        </p>
        <p>
          You can currently stake via the following methods:
          <ul>
            <li>
              <a target="_blank" href="https://plock.fi">
                Plock.fi
              </a>
            </li>
            <li>
              <a target="_blank" href="https://celowallet.app">
                Celo Wallet
              </a>
            </li>
            <li>
              <a target="_blank" href="https://celoterminal.com">
                Celo Terminal
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://docs.celo.org/command-line-interface/introduction"
              >
                Celo CLI
              </a>{' '}
              - for advanced users only.
            </li>
          </ul>
        </p>
      </Collapsible>

      <Collapsible title="Wallets">
        <p>
          You can use a few different wallets to securely store your tokens on
          Celo.
        </p>

        <p>
          <ul>
            <li>
              <a href="https://valoraapp.com">Valora</a>
            </li>
            <li>
              <a href="https://celoterminal.com">Celo Terminal</a>
            </li>
            <li>
              <a href="https://celowallet.app">Celo Wallet</a>
            </li>
            <li>
              <a href="https://docs.celo.org/celo-owner-guide/ledger">Ledger</a>
            </li>
          </ul>
        </p>

        <p>
          Each wallet has its own benefits so please take your time to research
          each before choosing one.
        </p>
      </Collapsible>

      <Collapsible title="Help! I sent CELO/ETH to my Celo/Ethereum address">
        <p>
          Don't fret! As long as you have the private key or seed phrase for the
          receiving account you'll be able to recover your funds.
        </p>
        <p>
          See{' '}
          <a
            target="_blank"
            href="https://docs.celo.org/celo-owner-guide/eth-recovery"
          >
            this
          </a>{' '}
          guide if you've sent ETH to your Celo address, and{' '}
          <a
            target="_blank"
            href="https://docs.celo.org/celo-owner-guide/celo-recovery"
          >
            this one
          </a>{' '}
          if you've sent CELO to an Ethereum address.
        </p>
      </Collapsible>
    </div>
  );
}
