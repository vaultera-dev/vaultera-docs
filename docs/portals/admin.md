# Admin Portal

The Admin Portal is the operations interface for protocol administrators, vault creators, compliance teams, and vault managers.

## Core capabilities

| Capability | Purpose | Required authority |
|---|---|---|
| Dashboard | Review protocol activity, vault status, and recent events | Authorized operator |
| Create vault | Configure and deploy a new vault contract set | `VAULT_CREATOR_ROLE` |
| Manage roles | Grant or revoke protocol permissions | Role administrator |
| Configure policies | Manage allowed assets, adapters, users, and risk controls | `ADMIN_ROLE` or vault manager |
| Configure fees | Review and configure protocol or vault-level fees | `ADMIN_ROLE` or vault manager |
| Manage signers | Maintain authorized quotation signers | `ADMIN_ROLE` |
| Pause operations | Apply global, group, target, or function pauses | `PAUSER_ROLE` |
| Rebalance vaults | Submit orders through approved adapters | Vault manager or `KEEPER_ROLE` |

## Transaction safety

Before requesting a signature, the portal should display the connected wallet, required role, target contract, network, function, parameters, expected state change, and estimated fee impact. Destructive or emergency operations should require explicit confirmation.

## Operational visibility

The portal should clearly identify active and paused vaults, enabled entry points, supported assets, current policy modules, configured fee rates, latest settlement window, pending requests, and adapter availability.

## Planned improvements

Planned capabilities include multisig workflows, richer fee reporting, unified policy management, expanded multi-asset controls, and guided rebalancing.
