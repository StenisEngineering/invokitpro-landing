# InvoKit Pro v2.0

> Smart Business Tools. Works Offline. — Professional invoicing for small businesses.

## Project Structure

```
invokit-pro/
├── index.html          # Main HTML shell — links CSS & JS externally
├── css/
│   └── styles.css      # All styles (~670 lines)
├── js/
│   ├── pwa-bootstrap.js  # PWA manifest injection + service worker registration
│   └── app.js            # Full application logic (~2700 lines)
└── README.md
```

## Features

- 📄 Professional PDF invoices — 4 templates, custom branding
- 📴 Works fully offline — IndexedDB storage, no cloud required
- 🌍 150+ currencies supported
- 📱 Responsive — phone, tablet, desktop
- 🔒 Private & secure — data never leaves your device
- ⚡ PWA — installable as a standalone app

## Usage

Serve the project from any static web host or local server:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

> **Note:** A HTTPS connection (or `localhost`) is required for the PWA service worker, clipboard API, and crypto functions to work correctly.

## Licence

This software requires a valid InvoKit Pro licence key to unlock.  
Purchase via [WhatsApp](https://wa.me/447310211892).

---
Refactored from single-file build `InvoKit_Pro_v2_0_21.html` for GitHub deployment.
