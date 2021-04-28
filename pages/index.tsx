import { useState } from 'react';
import ReactCollapsible from 'react-collapsible';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/solid';

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
    <div className="max-w-screen-sm mx-auto py-10 prose">
      <h1>Celo - The Platform for Mobile DeFi</h1>
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

      <Collapsible title="What makes Celo special?">
        <p>Coming soon...</p>
      </Collapsible>

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

      <Collapsible title="Help! I sent CELO to my Ethereum address">
        <p>
          See this guide{' '}
          <a
            target="_blank"
            href="https://docs.celo.org/celo-owner-guide/eth-recovery"
          >
            here
          </a>
          .
        </p>
      </Collapsible>
      <Collapsible title="Help! I sent ETH to my Celo address">
        <h2></h2>
        <p>
          See this guide{' '}
          <a
            target="_blank"
            href="https://docs.celo.org/celo-owner-guide/celo-recovery"
          >
            here
          </a>
          .
        </p>
      </Collapsible>
    </div>
  );
}
