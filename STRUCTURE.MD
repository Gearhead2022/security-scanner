security-scanner/
│
├── apps/
│   ├── api/
│   │   ├── src/
│   │   │   ├── config/
│   │   │   ├── middleware/
│   │   │   ├── modules/
│   │   │   ├── routes/
│   │   │   ├── app.ts
│   │   │   └── server.ts
│   │   ├── prisma/
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── worker/
│   │   ├── src/
│   │   │   ├── config/
│   │   │   ├── processors/
│   │   │   ├── queues/
│   │   │   └── worker.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── web/
│       └── Next.js application
│
├── packages/
│   └── shared/
│       ├── src/
│       └── package.json
│
├── docker-compose.yml
├── pnpm-workspace.yaml
├── package.json
├── turbo.json
├── .env
└── .gitignore