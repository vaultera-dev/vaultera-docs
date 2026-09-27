# Protocol Overview

Vaultera separates protocol-wide governance and services from contracts deployed for each vault.

## Protocol services

| Area | Contracts | Responsibility |
|---|---|---|
| Access and pause | `VaulteraAccessManager`, `PauseManager` | Roles and emergency controls |
| Factory | `VaultFactory` | Deploy and register vault contract sets |
| Fees | `FeeManager` and fee modules | Accrue and distribute fees |
| Policies | `PolicyManager` and policy modules | Compliance and risk rules |
| Execution | `ExecutionManager` and adapters | Controlled strategy execution |
| Settlement | `PricingWindow`, `SettlementVerifier` | Quote schedules, prices, and signatures |

## Per-vault contract set

- `VaultManager` orchestrates requests, settlement, claims, and rebalancing.
- `VaultShareToken` represents investor ownership.
- `VaultEntryPoint` accepts requests for a supported asset.
- `VaultEscrow` holds assets and shares while requests are pending.

## Standards and primitives

Vaultera uses OpenZeppelin access control, EIP-712 typed signatures, ERC-7201 namespaced storage, ERC-7540 asynchronous request semantics, ERC-7575 share semantics, and ERC-1404 transfer restrictions.

## Roles

Protocol roles include owner, admin, vault creator, relayer, guardian, compliance admin, keeper, and pauser. Each vault also has a manager address responsible for vault-level configuration and execution.
