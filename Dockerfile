# Dependências
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm install -g pnpm

RUN pnpm prisma generate

RUN pnpm build

# Produção
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production


COPY --from=builder /app/.next/standalone ./

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

COPY --from=builder /app/src/generated/prisma ./prisma

EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]