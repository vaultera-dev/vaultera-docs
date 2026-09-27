# Pricing and Settlement

Vaultera processes asynchronous deposit and redemption requests in pricing windows.

## Pricing window

For each vault, `PricingWindow` tracks the window duration and offset, maximum settlement delay, price bounds, deviation threshold, EMA reference price, authorized signers, and replay protection.

## Dual signatures

Settlement requires:

1. A `WindowQuote` signed by an authorized operator.
2. An `Acceptance` signed by every investor whose request is processed.

The quote binds the vault, window, NAV per share, asset prices, deadline, total assets, replay salt, and user-signature hash. Each acceptance binds an investor's request details to that quote.

## Verification

`SettlementVerifier` validates EIP-712 signatures and supports externally owned accounts as well as compatible smart-contract wallets. The vault checks that each acceptance matches the request, quote, vault, entry point, amount, and escrow timestamp.

## Settlement result

For accepted deposits, escrowed assets move into the vault and shares are minted. For accepted redemptions, shares are burned and assets become claimable. Fee hooks run at the configured lifecycle points.

Circuit breakers reject stale, replayed, out-of-window, or excessively deviating quotes.
