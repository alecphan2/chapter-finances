# Chapter Finance Board

A web-based financial management dashboard for fraternity chapter finances.

## V1 scope

- Dashboard
- Balance sheet
- Transaction ledger
- Budget vs. actual
- Member dues tracking

The current UI uses demo data while the database layer is being built.

## Tech stack

- Next.js
- React
- TypeScript
- Supabase planned for PostgreSQL, authentication, and file storage
- Vercel planned for deployment

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Roadmap

Next: connect Supabase and replace demo values with persistent chapter data. Later releases can add CSV imports, receipt storage, reimbursements, bank syncing, and transaction categorization.
