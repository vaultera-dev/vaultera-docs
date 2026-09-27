# Supported Adapters

## Sepolia

Vaultera supports three execution adapters on Sepolia. Every adapter must be allowed by protocol and vault policy before it can be used for rebalancing.

| Adapter | Purpose | Address |
|---|---|---|
| <img class="asset-logo" src="https://cryptologos.cc/logos/1inch-1inch-logo.svg" alt="1inch" /> 1inch | Executes spot swaps through the 1inch v5 aggregation router. | <AddressLink address="0xF78025f006Eb45cD067b46F35690F3a65e0FbC0c" explorer-url="https://sepolia.etherscan.io/address/0xF78025f006Eb45cD067b46F35690F3a65e0FbC0c" /> |
| <img class="asset-logo" src="https://cryptologos.cc/logos/uniswap-uni-logo.svg" alt="Uniswap" /> Uniswap V3 | Executes exact-input spot swaps through the Uniswap V3 router. | <AddressLink address="0x65525888382c3D8E63FDd433c6257220eF14D79b" explorer-url="https://sepolia.etherscan.io/address/0x65525888382c3D8E63FDd433c6257220eF14D79b" /> |
| <img class="asset-logo" src="/logo.svg" alt="Vaultera Mock Adapter" /> Mock Adapter | Tests rebalancing with Sepolia mock assets by minting the incoming token and burning the spent token instead of routing a liquidity-dependent swap. | <AddressLink address="0xe5958ee784edd681395d10cf4b549892bdf261d6" explorer-url="https://sepolia.etherscan.io/address/0xe5958ee784edd681395d10cf4b549892bdf261d6" /> |

## Execution safeguards

`ExecutionManager` parses each adapter action, validates pre-execution policies, snapshots balances, transfers the spend assets, calls the adapter, verifies spend and incoming balance deltas, and then validates post-execution policies.

The mock adapter is test-only. It avoids testnet liquidity constraints and must not be treated as a market execution venue or price source.
