# InvoKit Pro — Dev Structure (from FIXED2)

This is a safe Phase-1 refactor of your single-file offline app:
- `app/index.html` loads `styles/app.css` and `scripts/app.js`
- Logic/UI should behave the same as FIXED2, with added fixes:
  - rd() render throttling (1/frame)
  - editor dirty-state leave/refresh warning
  - dirty cleared on saveInvoice/saveReceipt and on openNewInvoice/openNewReceipt

Run:
- Open `app/index.html` in a local server (recommended) or file:// (most features still work).
