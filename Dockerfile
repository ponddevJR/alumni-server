# Use official Bun image
FROM oven/bun:1 AS base
WORKDIR /app

# Install OpenSSL for Prisma
RUN apt-get update -y && apt-get install -y openssl

# Install dependencies
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# Install production dependencies only
RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# Copy node_modules from temp directory and then copy all source code
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# Generate Prisma Client for Linux
RUN bunx prisma generate

# Optional: Run tests or build steps here
# ENV NODE_ENV=production
# RUN bun test
# RUN bun run build

# Final production image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /app .

# Expose port (adjust if your Elysia app uses a different port)
EXPOSE 8800

# Run the app
USER bun
ENTRYPOINT [ "bun", "run", "src/index.js" ]