FROM node:22-alpine AS base
WORKDIR /app
COPY package.json ./
COPY apps/frontend/package.json ./apps/frontend/package.json
RUN npm install
COPY . .
RUN npm run -w apps/frontend build
EXPOSE 3000
CMD ["npm", "run", "-w", "apps/frontend", "start"]
