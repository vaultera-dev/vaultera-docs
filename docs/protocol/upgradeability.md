# Upgradeability

Vaultera uses proxy patterns so protocol and vault behavior can be upgraded without replacing user-facing addresses.

## Proxy model

| Contract group | Proxy pattern | Upgrade scope |
|---|---|---|
| Protocol singletons | ERC1967 / UUPS | One singleton at a time, authorized by `OWNER_ROLE` |
| `VaultManager` | Beacon proxy | All vault managers sharing the beacon |
| `VaultShareToken` | Beacon proxy | All share tokens sharing the beacon |
| `VaultEntryPoint` | Beacon proxy | All entry points sharing the beacon |
| `VaultEscrow` | ERC1967 proxy per vault | Individual escrow proxy deployment |

## Namespaced storage

Stateful upgradeable contracts use ERC-7201 namespaced storage. Isolated storage namespaces reduce collision risk when implementations add or reorganize state across upgrades.

## Upgrade trust

Upgrade authority is a privileged security boundary. Production ownership should use controlled multisig and timelock processes, with implementation validation before execution.
