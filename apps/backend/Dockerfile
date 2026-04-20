FROM node:22-alpine AS base
WORKDIR /app
COPY package.json ./
COPY apps/backend/package.json ./apps/backend/package.json
COPY packages/shared/package.json ./packages/shared/package.json
RUN npm install
COPY . .
RUN npm run -w packages/shared build && npm run -w apps/backend build
EXPOSE 4000
CMD ["npm", "run", "-w", "apps/backend", "start"]
