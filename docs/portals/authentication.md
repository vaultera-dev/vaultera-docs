# Authentication

The Investor Portal supports multiple sign-up and sign-in methods so investors can choose the option that best fits their workflow.

## Authentication methods

| Method | Description |
|---|---|
| **Email & Password** | Standard account creation and login with email verification. |
| **Google OAuth** | One-click sign-up/sign-in using an existing Google account. |
| **WalletConnect** | Connect any supported EVM wallet through WalletConnect. |
| **BitxPay Wallet** | Connect or create a BitxPay non-custodial wallet directly in the portal. |

## Sign-in page

The sign-in page greets returning investors with the heading **"Welcome back"** and the prompt **"Sign in to continue to Vaultera."** Investors can choose any of the supported authentication methods from a single screen.

At the top, the page presents two one-click wallet options: **WalletConnect** (left icon) and **Google OAuth** (right icon). Below these, the email and password form allows traditional sign-in, with a visible password toggle and a **"Forgot Password?"** recovery link. New users can follow the **"Sign up"** link at the bottom of the form to create an account.

![Investor Portal sign-in page with WalletConnect, Google, email, and password options](/portal-screenshots/Investor-portal-sign-in.png)

## BitxPay Wallet

The portal natively supports **BitxPay Wallet**, a non-custodial wallet from BITX that gives web2 users a familiar onboarding experience while keeping funds under their own control.

- **Non-custodial by design** — private keys remain with the user, protected by Trusted Execution Environment (TEE) and Intel SGX.
- **Web2-friendly login** — sign in or sign up with email, Passkey (WebAuthn), or password.
- **Gasless transactions** — eligible transactions are sponsored by BitxPay, so investors do not need to hold native gas tokens to deposit, redeem, or claim.
- **More details** — [docs.bitxpay.com](https://docs.bitxpay.com/){target="_blank" rel="noopener noreferrer"}

When an investor chooses BitxPay Wallet, the wallet connection is used for both authentication and for signing on-chain actions such as approvals, deposit/redeem requests, and EIP-712 acceptances.
