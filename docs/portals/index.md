# Product Portals

## Admin portal

The admin experience supports protocol and vault operations such as role administration, vault creation, policy configuration, fee configuration, signer management, pause controls, settlement operations, and rebalancing.

Operational permissions must map to on-chain roles. Interfaces should display the connected account, required role, transaction target, and resulting state change before submission.

## Investor portal

The investor experience covers wallet connection, vault discovery, vault details, deposit and redemption requests, quote acceptance, pending-request status, cancellation, and claims.

The portal should clearly distinguish requested, escrowed, accepted, settled, claimable, claimed, and cancelled states. It should also surface supported assets, current policies, fees, pricing-window timing, and transfer restrictions.

## Supporting services

Portal applications rely on an indexer for readable state and history, a quoter for NAV and asset prices, and transaction relaying or automation where enabled. On-chain state remains authoritative.
