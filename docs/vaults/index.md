# Vault Lifecycle

## Creation

An account with `VAULT_CREATOR_ROLE` submits a vault configuration to `VaultFactory`. The configuration defines the share name and symbol, denomination asset, supported assets, manager, settlement mode, category, and metadata URI.

The factory deploys and connects the manager, share token, escrow, and one entry point per supported asset. It validates the asset list against protocol policy before activating the vault.

## Operating states

- **Active:** requests, settlement, claims, and rebalancing operate normally.
- **Paused:** restricted operations revert at the configured pause layer.
- **Entry point disabled:** an asset stops accepting new requests while existing requests can still be resolved.

## Deposit flow

1. The investor approves the asset entry point.
2. The investor submits a deposit request.
3. Assets move to vault escrow.
4. The manager records the pending request.
5. The request is included in a pricing window.
6. After settlement, the investor receives or claims shares.

## Redemption flow

1. The investor submits shares through the relevant entry point.
2. Shares remain in escrow pending settlement.
3. The investor accepts a signed quote.
4. Settlement burns the shares and calculates assets owed.
5. The investor receives or claims the assets.

Pending requests can be cancelled before settlement, subject to the current protocol state.
