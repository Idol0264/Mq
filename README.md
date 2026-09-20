# MQ — Money Making Menu

**MQ** is the first software concept under **GT Softwares (GTS)**, a GTH product.

## Included
- Responsive MQ interface
- Device-controlled light/dark mode using `prefers-color-scheme`
- Soft animated/fading light points from the corners
- Fixed top MQ navigation
- Fixed bottom **GT Softwares — An GTH Product** tab
- Required email gate
- Five gallery categories:
  - BET
  - BROKERS
  - BANKS
  - JOBS
  - PORTFOLIOS
- Nine starter slots in each category
- Add-to-MQ behavior
- Added platform list
- iframe platform view
- Back button to return to MQ
- LocalStorage for the user's email and added platforms

## Before publishing

Open `app.js` and replace:

`https://tally.so/r/REPLACE_WITH_YOUR_FORM`

with your actual Tally form URL.

Also replace the `https://example.com` platform URLs with the real platform URLs.

### Important iframe note
A third-party platform can only appear in an iframe if its provider permits embedding. If the provider blocks framing through browser security headers, MQ cannot override that from frontend JavaScript. Use the provider's approved embedded checkout/widget/API or an external navigation flow where required.

## GitHub Pages

Upload the contents of this folder to your GitHub Pages repository. The entry file is:

`index.html`

This package is frontend-only and does not require a backend server.
