# Investor Portal

The Investor Portal is the end-user interface for discovering vaults, depositing assets, redeeming shares, signing quote acceptances, and monitoring positions.

## Investor journey

1. Connect a supported wallet on the selected network.
2. Review vault metadata, supported assets, policies, fees, and current status.
3. Submit a deposit or redemption request.
4. Review the quoted NAV, asset price, fee estimate, amount, and deadline.
5. Sign the EIP-712 acceptance if the quote is acceptable.
6. Track settlement and claim assets or shares when required.

## Deposit request

The portal presents a **"Buy Shares"** interface where investors convert supported tokens into vault shares at the current share price. This is the first step of the deposit flow.

The screen shows a **"Buy Shares" / "Sell Shares"** toggle, the asset to spend (for example, USDC with an editable amount and balance), and the vault shares to receive (for example, **Vaultera Yield Vault** shares). Before confirming, the investor reviews key terms such as the lock-up period, management fee, and the share-price conversion. The investor must agree to the **Terms & Conditions**, then clicks **Buy** to submit the request or **Cancel** to abort.

![Investor Portal deposit request screen showing Buy Shares form](/portal-screenshots/Invetor-deposit-request.png)

## Request states

The portal should distinguish each request state clearly:

- **Requested:** submitted on-chain.
- **Escrowed:** assets or shares are held pending settlement.
- **Awaiting acceptance:** a quote is available for review.
- **Accepted:** the investor signed the quote acceptance.
- **Settled:** the request was processed in a pricing window.
- **Claimable:** assets or shares are ready to claim.
- **Claimed:** the claim completed.
- **Cancelled:** escrowed funds were returned before settlement.

## Information shown to investors

Each vault view should show supported assets, latest NAV, pricing-window timing, entry and exit fees, management fees, transfer restrictions, policy requirements, pause status, manager details, and relevant risk disclosures.

## Planned improvements

Planned capabilities include quote decline and refund flows, portfolio valuation, performance charts, notifications, improved paused-vault guidance, and mobile experiences.
