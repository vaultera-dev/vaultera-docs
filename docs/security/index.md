# Security

Vaultera uses defense in depth across access control, settlement, custody, compliance, and upgrades.

## Pause controls

The access manager evaluates four fail-closed pause layers:

1. Global pause
2. Contract-group pause
3. Target-contract pause
4. Target-function pause

Pause checks run before protected operations, allowing incidents to be contained without redeploying contracts.

## Policy enforcement

Policy modules govern allowed assets and adapters, investor whitelists, slippage, transfers, deposits, and rebalancing. The share token exposes ERC-1404 restriction checks for compliant transfers.

## Custody and execution

Pending assets remain in a dedicated vault escrow. The vault manager controls releases, while strategy execution is routed through the execution manager and explicitly allowed adapters.

## Upgradeability

Per-vault managers, share tokens, and entry points use beacon proxies. Protocol singletons use UUPS proxies. Upgrade authority belongs to the owner role and should be assigned to a secured multisig with operational controls.

## Trust assumptions

Users and integrators must account for the operator signer, protocol governance, vault manager, approved adapters, price inputs, and upgrade authorities when evaluating a vault.
