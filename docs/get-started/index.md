# Get Started

Vaultera is a decentralized fund infrastructure protocol for launching and operating tokenized investment vaults on-chain.

## Who these docs are for

- Vault managers creating and operating funds
- Investors depositing into and redeeming from vaults
- Integrators building portals, indexers, quoters, and automation
- Auditors reviewing protocol architecture and security assumptions

## Core model

A vault accepts one or more approved ERC-20 assets and issues an ERC-20 share token. Deposit and redemption requests are asynchronous. An authorized operator supplies a signed NAV quote, each participating investor signs an acceptance, and the vault settles the pricing window on-chain.

## Design principles

- NAV is supplied off-chain and verified on-chain.
- Settlement requires operator and investor signatures.
- Policies and fees are modular.
- Independent pause layers support emergency response.
- Singleton and per-vault contracts are upgradeable.

## Next steps

1. Read the [protocol overview](/protocol/).
2. Follow the [vault lifecycle](/vaults/).
3. Understand [settlement](/settlement/) and [security](/security/).
