# Qolay Store website

This archive contains only the website frontend, images, fonts, three languages,
public product catalog snapshot, and portable Vercel configuration. It contains
no Telegram bot source, API keys, customer records, database backups, hosting
account credentials, or Vercel project/account links.

## Open locally

Install Node.js, extract the ZIP, open a terminal in this folder, then run:

```sh
npm run check
npm run dev
```

Open http://127.0.0.1:5173/. No npm dependencies are required.

## Deploy to your own Vercel account

Upload/import this directory into a NEW project in your account, or run:

```sh
npx vercel login
npx vercel --prod
```

Framework: Other. Root: this folder. Output directory: `public`.
Build/install commands: leave empty. No environment variables are needed for
the default preview. Do not copy a `.vercel` directory from another machine.

## Optional: reconnect to the owner's bot backend

The default export opens independently in preview mode. Purchases, deposits,
customer accounts and balances are disabled. Prices are a public snapshot from
the export date; they do not update automatically in this mode.

`src/` preserves the full connected frontend. With the owner's authorized HTTPS
backend available, run:

```sh
npm run connect -- https://your-backend.example
npx vercel --prod
```

This restores the connected UI and configures `/api/store/*` and `/health`
proxies. The backend itself is intentionally NOT included. Its operator must
allow the new frontend origin, keep Telegram authentication checks enabled,
and update the bot's web-app URL when authorized. Do not add a bot token or
supplier API key to frontend JavaScript, static JSON, or public Vercel variables.
The public Telegram link currently uses `Kulay_store24bot`; edit it in
`src/live-app.js` if the owner requests a different bot.

## Files

- `public/`: ready-to-host preview, artwork, translations and fonts
- `src/`: original connected UI source for an authorized backend connection
- `tools/`: local server, source checks and backend URL configuration
- `vercel.json`: portable hosting settings, without the previous account's IDs

The website name and design remain قولاي تور سودىسى.
