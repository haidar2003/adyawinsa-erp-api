# Adyawinsa HR API

A REST API built with Express.js and Prisma that serves as a backend for the Adyawinsa HR website.

Uses Node version v16.20.0
Deployment is set up using Google Cloud Run + Cloud Build, which detects Dockerfile automatically.

## Setup

### Clone the repository
```sh
git clone https://github.com/ogiorgil/adyawinsa-hr-api.git
cd adyawinsa-hr-api
```

### Install dependencies
```sh
npm install
```

### Setup env
Create a `.env` file in the root directory of the project and add the required environment variables (see .env.example)

### PRISMA (ORM LIBRARY AND UTILITY)
### Run database migrations 
In dev environment, use `migrate dev`.
```sh
npx prisma migrate dev
```

In production environment, use `migrate deploy`.
```sh
npx prisma migrate deploy
```
For more info, see https://www.prisma.io/docs/concepts/components/prisma-migrate/migrate-development-production

### See database
Use Prisma Studio to view database directly.
```sh
npx run database
```

### BACKEND SERVER
### Start the development server
```sh
npm run dev
```
If port is not specified, the server will be running at `http://localhost:3000`

### External Dependencies
- Postgres Database and its connection URL is needed. Supabase is recommended as it is also currently used for the storage option.
- Supabase storage buckets are used for this project.
    - Create TWO buckets with name `documents` and `photos`.
- In development, brevo was used for mail sending (SMTP_* env variables).
