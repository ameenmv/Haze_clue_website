FROM node:18-alpine AS builder

WORKDIR /app

# Copy package info and install dependencies
COPY package.json bun.lock* ./
# Since bun.lock is present, we could install bun, but npm is safer in standard node image.
# Alternatively install using npm
RUN npm install

# Copy all files
COPY . .

# Build the Nuxt app
RUN npm run build

# Production image
FROM node:18-alpine

WORKDIR /app

# Copy the built output from the builder stage
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
