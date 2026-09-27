# Security

Vaultera applies defense in depth across access control, settlement, custody, compliance, execution, and upgrades.

## Security layers

| Layer | Control |
|---|---|
| Access | Central role checks through `VaulteraAccessManager` |
| Emergency response | Global, group, target, and function pause controls |
| Settlement | Operator quote and investor acceptance signatures |
| Price integrity | Window timing, expiry, minimum price, EMA deviation, and salt replay checks |
| Custody | Dedicated escrow with vault-manager-only release functions |
| Compliance | Protocol and vault policy hooks for assets, users, adapters, transfers, and slippage |
| Execution | Approved adapters, balance snapshots, delta verification, and pre/post policies |
| Upgrades | UUPS and beacon proxies with ERC-7201 namespaced storage |

## Core invariants

- Only authorized signers can produce valid pricing quotes.
- A quote and acceptance must reference the same vault and request context.
- Every settled user explicitly accepts the quoted price.
- A quote salt can be used only once for a vault.
- Repeated batches for one window must use the same NAV and total assets.
- Share minting is restricted to authorized minters.
- Escrow releases can only be initiated by the associated vault manager.
- Protocol policies execute before vault policies.
- Rebalancing can only use adapters accepted by the active policy configuration.

## Trusted actors

| Actor | Capability |
|---|---|
| `OWNER_ROLE` | Authorizes contract upgrades. |
| `ADMIN_ROLE` | Configures protocol fees, policies, signers, and pricing safeguards. |
| `VAULT_CREATOR_ROLE` | Creates vaults. |
| `PAUSER_ROLE` | Controls emergency pauses. |
| `KEEPER_ROLE` | Runs authorized settlement and rebalancing automation. |
| Authorized quote signer | Produces signed NAV and asset-price quotes. |
| Vault manager | Configures and operates one vault within protocol controls. |

Privileged roles and signer keys should use hardened operational controls appropriate to their authority.
