# Policies and Compliance

`PolicyManager` stores protocol-wide and vault-scoped policy configuration. Protocol policies run before vault policies.

## Policy hooks

Policies can validate deposit and redemption requests, fulfillment, cancellation, share transfers, execution-manager calls, and tracked-asset changes.

## Active policy modules

| Policy | Scope | Purpose |
|---|---|---|
| `AllowedAssetsPolicyProtocol` | Protocol | Global asset allowlist. |
| `AllowedAssetsPolicy` | Vault | Vault-specific asset allowlist. |
| `AllowedAdaptersPolicyProtocol` | Protocol | Global execution-adapter allowlist. |
| `AllowedAdaptersPolicy` | Vault | Vault-specific execution-adapter allowlist. |
| `WhitelistPolicyProtocol` | Protocol | Global account compliance list. |
| `WhitelistPolicy` | Vault | Vault-specific account compliance list. |
| `SlippagePolicy` | Vault | Validates minimum output amounts during execution. |

Only policies approved in the manager's policy whitelist can be enabled for a vault.

## Share transfer restrictions

`VaultShareToken` implements ERC-1404. When compliance checks are active, share transfers call the policy manager with the `PreTransferShares` hook. A non-zero restriction code explains why a transfer is blocked.

| Code | Meaning |
|---:|---|
| `0` | Transfer allowed |
| `1` | Transfers paused |
| `16` | Receiver is not whitelisted |
| `17` | Controller is not whitelisted |
| `32` | Asset is not allowed |
| `33` | Tracked asset is not allowed |
| `48` | Adapter is not allowed |
| `64` | Minimum-output list length mismatch |
| `65` | Slippage limit exceeded |
