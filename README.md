# Wordy

Chrome extension for tracking word count and staying on top of writing goals.

## Setup

- Add a top-level `.env` file with the following:

```
SUPABASE_URL=<PROJECT_URL>
SUPABASE_SECRET_KEY=<SECRET_API_KEY>
```

The URL and API key can be found on Supabase at Settings -> API Settings.

## Build

- `npm run dev` to run locally
- `npm run build-extension` to package for Chrome extension
