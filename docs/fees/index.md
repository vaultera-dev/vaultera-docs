# Fees

`FeeManager` is the protocol singleton that registers fee modules and invokes them at defined vault lifecycle hooks.

## Supported fee modules

| Fee | Scope | Current rate | Settlement mechanism | Recipient | Status |
|---|---|---:|---|---|---|
| Entry fee | Protocol | 25 bps (0.25%) | Direct share transfer | Vaultera treasury | Active |
| Exit fee | Protocol | 25 bps (0.25%) | Direct share transfer | Vaultera treasury | Active |
| Management fee | Per vault | 25 bps (0.25%) | Share minting based on continuous accrual | Vault manager | Active |
| Performance fee | Per vault | TBD | Share minting or asset transfer at settlement | Vault manager / protocol | Planned |

The active on-chain configuration is authoritative. Interfaces should read the configured module settings before presenting estimates.

## Entry fee

The entry fee is calculated from gross shares minted during deposit settlement. At 25 bps, a deposit worth **1,000 USDC** at the settlement price produces a fee equivalent to:

```text
1,000 × 0.0025 = 2.50 USDC equivalent
```

The treasury receives **2.50 USDC equivalent** in share tokens, while the investor receives shares representing **997.50 USDC equivalent**, before any other applicable adjustment.

## Exit fee

The exit fee is calculated from redeemed shares during redemption settlement. At 25 bps, a redemption worth **1,000 USDC** at the settlement price produces a fee equivalent to:

```text
1,000 × 0.0025 = 2.50 USDC equivalent
```

The treasury receives **2.50 USDC equivalent** in share tokens, while the investor receives **997.50 USDC equivalent** in assets, before any other applicable adjustment.

## Management fee

The management fee uses a continuous, per-second scaled rate. Accrued fees are realized through share minting when the applicable fee hook runs, compensating the vault manager through dilution rather than an immediate asset transfer.

At a configured annual rate of 25 bps, a constant **1,000 USDC** vault value accrues approximately:

```text
Full year: 1,000 × 0.0025 = 2.50 USDC equivalent
30 days:   1,000 × 0.0025 × 30 ÷ 365 ≈ 0.2055 USDC equivalent
```

The actual amount depends on elapsed time, vault value, share price, and the active module configuration at settlement.

## Share-based collection

Entry, exit, and management fees settle in vault share tokens. Treasury or manager processes can later swap collected shares into supported assets such as USDC, WETH, or WBTC, subject to vault liquidity, adapter authorization, and active policies.

## Performance fee

A performance fee module is planned for future integration. It will calculate a percentage of realized returns or profits at settlement or redemption, typically using a high-water-mark basis, and settle by minting shares or transferring assets to the configured recipient.

Once deployed, the fee module will register with `FeeManager` and be invoked at the appropriate lifecycle hooks, subject to vault-level configuration and on-chain governance.

## Vault Token (VLT) fee discounts

Holders of the Vaultera Token (VLT) will be eligible for fee discounts on protocol-level fees. The discount is applied as a reduction to the fee amount charged at settlement, before the net fee is transferred or shares are minted.

| Discount tier | Max discount | Applies to |
|---|---|---|
| VLTR | Up to 50% | Protocol fees only |

VLTR discounts will not reduce vault-level fees such as management or performance fees, and the exact tier and discount rate will be read from the on-chain configuration when available.

## Fee lifecycle

`FeeManager` supports hooks for continuous accrual, pre-settlement processing, deposit fulfillment, redemption fulfillment, and post-deposit fulfillment. A module is invoked only when it is registered and enabled for the applicable protocol or vault scope.
