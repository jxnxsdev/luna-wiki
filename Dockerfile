# Step 1: Build the VitePress site
FROM node:18 AS builder

WORKDIR /app

# Copy everything (because package.json is at root, VitePress is in wiki/)
COPY . .

# Enable corepack and install dependencies
RUN corepack enable && pnpm install

# Build plugin stores
RUN node wiki/.vitepress/fetch-plugins.mjs

# Build the site (navigate into wiki folder)
RUN pnpm --filter ./wiki... docs:build

# Step 2: Serve with Nginx
FROM nginx:stable-alpine

# Optional: custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built site to nginx public folder
COPY --from=builder /app/wiki/.vitepress/dist /usr/share/nginx/html

EXPOSE 3089
CMD ["nginx", "-g", "daemon off;"]
