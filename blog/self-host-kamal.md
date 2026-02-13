---
title: 'Self Hosting with Kamal Guide'
authors:
  - 'DorianPortillo'
date: '2026-02-15'
category: 'News'
heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
imageAuthor: 'Taylor Vick'
imageAuthorLink: 'https://unsplash.com/@tvick'
subtitle: 'Deploy Any Containerized Service with Zero Downtime.'
tags:
  - BOSC
  - ISMB
  - CoFest
  - Open Science
  - FAIR Principles
  - Community Collaboration
  - Large Language Models (LLMs)
---

For a long time, self-hosting and deployments were a mystery but lately, I've realized that it is one of the most invaluable skills a developer can learn. Having ownership over your infrastructure and data is important in this era of cloud services where vendor lock-in and data privacy concerns are being raised more and more.

Self hosting can be intimidating but also incredibly powerful. In this guide, I'll walk you through setting up **Kamal** on a freshly installed Ubuntu server. We'll be deploying an application stack using a Nuxt 3 web app with Prisma v6, a PostgreSQL 16 database and automated S3/R2-compatible backups. By the end, you'll have a repeatable workflow for deploying _any_ docker container.

If you want the full working stack to follow along or reuse, check out the [fairdataihub/kamal-deploy](https://github.com/fairdataihub/kamal-deploy) repository.

## What Is Kamal?

[Kamal](https://kamal-deploy.org/) is an open-source deployment tool built by the team at [37signals](https://37signals.com/) (the company behind Basecamp and HEY). It was originally created to help them migrate their applications off of AWS EKS (managed Kubernetes) and onto their own hardware.

At its core, Kamal wraps SSH and Docker in a developer-friendly CLI tool. You define your infrastructure in a single YAML file, and Kamal handles the rest! From building your Docker image, pushing it to a registry, pulling it on your servers, running health checks, and switching traffic over with zero downtime. It does all of this through its companion reverse proxy, `kamal-proxy`, which manages TLS certificates via Let's Encrypt and routes incoming requests to the correct containers.

Kamal uses a **push model**: you run `kamal deploy` from your local machine (or CI), and it SSHes into your servers to orchestrate everything. There's no agent to install, no control plane to maintain, and no master node to babysit. It's the opposite of Kubernetes in philosophy: intentionally simple, yet powerful enough for production workloads.

Key capabilities include zero-downtime deployments, rolling restarts, automatic SSL/TLS via Let's Encrypt, accessory service management (databases, caches, backup containers), and built-in support for rollbacks.

## Why Self Host?

For the last decade, the cloud has become the default answer for most deployment scenarios and I can see why. It's convenient, scales quickly and it removes a lot of friction but the catch is that the convenience comes with tradeoffs, and not just a financial one.

When you self host, **your data lives on the machines you control**. **You** get to decide **what happens with the data** and **who has access to it**. From experience this initial journey feels daunting at times but you come out the other side with a **deeper understanding of your stack** and it can be very empowering to reveal the unknown through struggle.

Cost is another reason. Many teams default to **hyperscalers** like Azure or AWS and end up paying a ton for infrastructure they only partially use. A fairly standard Azure VM (A4 v2) can land around **~$140 per month** once you include the instance, a managed Premium SSD, and a small amount of bandwidth. A Virtual Private Server (VPS) provider can often run the same workload for **a fraction of that**.

|      Feature as of February 2026 | [Azure VM (A4 v2)](https://azure.microsoft.com/en-us/pricing/calculator/) | [Hetzner (CX32)](https://www.hetzner.com/cloud) | [DigitalOcean (Basic)](https://www.digitalocean.com/pricing/) |
| -------------------------------: | ------------------------------------------------------------------------: | ----------------------------------------------: | ------------------------------------------------------------: |
| **Compute (4 vCPU / 8 GiB RAM)** |                                           **~$115/mo** (varies by region) |                                    **€6.80/mo** |                                                    **$48/mo** |
|                      **Storage** |                                        **Managed disk priced separately** |                              **80 GB included** |                                      **160 GiB SSD included** |
|         **Bandwidth / transfer** |                              **First 100 GB/mo free, then egress billed** |                              **20 TB included** |                                             **5 TB included** |

The biggest **“hidden” cost** in the cloud is **[bandwidth egress](https://azure.microsoft.com/en-us/pricing/details/bandwidth/)**. Azure charges for data leaving their network after the first 100GB. If you are serving **high-traffic applications**, 500GB of downloads can add **$35 per month** to your Azure bill. On a VPS like Hetzner or DigitalOcean, that same traffic is often **included** but I will also say that these comparisons are **never perfectly apples-to-apples**. Clouds give you a lot of **managed services and guardrails**. Nonetheless, for straightforward web apps and databases, the math is hard to ignore.

Finally, Kamal deploys Docker containers, it also keeps things **flexible**. **Anything that runs in a container can be deployed with it.** A Nuxt frontend, a Python API service wrapping an AI model, or a PostgreSQL database all fit the same model. In theory, if you can write a Dockerfile for it, Kamal can handle it!

---

## Prerequisites

Before we get started, you'll need a server running Linux (we'll be using Ubuntu throughout this guide) and SSH access to it. You'll also need a local machine running Linux, macOs, or Ubuntu WSL on Windows with Docker Desktop, a container registry ([Docker Hub](https://hub.docker.com/), [GitHub Container Registry](https://ghcr.io/), or [DigitalOcean's registry](https://www.digitalocean.com/products/container-registry)) and finally, you'll need a domain name pointed at your server's IP if you want automatic SSL (recommended for security).

### Setting Up Your Local Machine

> The first step is to configure and test Kamal locally first. Once you have your `deploy.yml` and secrets configured, you can then commit those to your repository and let GitHub Actions handle future deploys. See the "Automating Deploys with GitHub Actions" section at the end for details.

You will need to install Docker and `build-essential` on both your local machine and your server.
The `build-essential` package is Debian based but every Linux distro offers an equivalent group of development tools. Docker will need to be installed; use the instructions for your system at [docs.docker.com/get-docker](https://docs.docker.com/get-docker/) if you aren't using Ubuntu.

Ruby is only required on the local machine because Kamal runs there or on GitHub Actions workflows.

<div style="margin: 20px 0; padding: 16px; border-left: 6px solid #F6339A; background-color: #FFF5F9; border-radius: 4px; color: #333;">
  <div style="display: flex; align-items: center; margin-bottom: 8px;">
    <span style="font-size: 1.2rem; margin-right: 10px;">⚠️</span>
    <strong style="color: #F6339A; text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.9rem;">Note for Windows/WSL Users</strong>
  </div>
  <p style="margin: 0; line-height: 1.6; font-size: 0.95rem;">
    If you are running Kamal inside WSL, you must enable the integration in Docker Desktop to allow the <code>buildx</code> plugin to function correctly. Without this, Kamal won't be able to build your images on your local Windows machine.
  </p>
  <ol style="margin-top: 12px; margin-bottom: 0; padding-left: 20px; font-size: 0.9rem;">
    <li>Open <strong>Docker Desktop Settings</strong>.</li>
    <li>Navigate to <strong>Resources > WSL Integration</strong>.</li>
    <li>Toggle the switch for your specific Ubuntu/WSL distribution to <strong>On</strong>.</li>
    <li>Restart your WSL terminal.</li>
  </ol>
</div>

For **macOS**, you can install Ruby via [Homebrew](https://brew.sh/) (`brew install ruby`) and Docker Desktop from docker.com.

On a fresh **Ubuntu** or **Windows WSL**, you can install Ruby and Docker with the following commands:

```bash
# Update and install base dependencies
sudo apt update && sudo apt upgrade -y
# Ensure build tools are installed
sudo apt install -y build-essential

# Install Ruby
sudo apt install -y ruby-full

# Verify Ruby is available
ruby --version

# Install Docker
sudo apt install -y docker.io
sudo usermod -aG docker $USER
newgrp docker # Apply the new group membership without logging out
```

<div style="margin: 20px 0; padding: 16px; border-left: 6px solid #2196F3; background-color: #E3F2FD; border-radius: 4px; color: #333;">
  <div style="display: flex; align-items: center; margin-bottom: 8px;">
    <span style="font-size: 1.2rem; margin-right: 10px;">ℹ️</span>
    <strong style="color: #2196F3; text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.9rem;">Note</strong>
  </div>
  <p style="margin: 0; line-height: 1.6; font-size: 0.95rem;">
    <code>$USER</code> expands to whatever user you're currently logged in as. If you're running these commands as a dedicated deploy user (see the next section), that's the user who gets added to the Docker group.
  </p>
</div>

### Installing Kamal for Local Development

With Ruby installed, getting Kamal is one command:

```bash
gem install kamal --user-install

# Add the gem's bin directory to your PATH if it's not already
echo 'export PATH="$HOME/.local/share/gem/ruby/3.2.0/bin:$PATH"' >> ~/.bashrc

# Reload your shell config
source ~/.bashrc
```

Verify it's working:

```bash
kamal version
```

---

## Preparing Your Host Server

You can let Kamal install Docker during the bootstrap step, but in this guide we will install it manually so we can create a dedicated `dev` user and set SSH permissions explicitly.

On an **Ubuntu** server as `root`, run:

```bash
# Update and install base dependencies
sudo apt update && sudo apt upgrade -y
# Install build tools for native gem extensions
sudo apt install -y build-essential

# Install Docker
sudo apt install -y docker.io
```

### Creating a dev user (recommended)

SSH into your server as root and create a new user:

```bash
# Create the user
adduser dev

# Add them to the docker group so they can manage containers
usermod -aG docker dev
```

Next, set up SSH access for the `dev` user. Still as `root`:

```bash
# Create the .ssh directory for the dev user
mkdir -p /home/dev/.ssh

# Set correct ownership and permissions
chown -R dev:dev /home/dev/.ssh
chmod 700 /home/dev/.ssh

# Add your public key (paste your key between the quotes)
echo "your-public-key-here" >> /home/dev/.ssh/authorized_keys
chown dev:dev /home/dev/.ssh/authorized_keys
chmod 600 /home/dev/.ssh/authorized_keys
```

<div style="margin: 20px 0; padding: 16px; border-left: 6px solid #4CAF50; background-color: #F1F8F6; border-radius: 4px; color: #333;">
  <div style="display: flex; align-items: center; margin-bottom: 8px;">
    <span style="font-size: 1.2rem; margin-right: 10px;">💡</span>
    <strong style="color: #4CAF50; text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.9rem;">Tip</strong>
  </div>
  <p style="margin: 0; line-height: 1.6; font-size: 0.95rem;">
    If you don't have an SSH key yet, run <code>ssh-keygen</code> on your local machine first. Then copy the contents of <code>~/.ssh/id_rsa.pub</code> (or <code>~/.ssh/id_ed25519.pub</code>) and paste it into the command above.
  </p>
</div>

Test the connection from your local machine:

```bash
ssh dev@your-server-ip
```

If you'd rather keep things simple and just use `root` (for a personal project or testing), that works too. Just make sure your SSH key is in `root`'s `authorized_keys` on the server.

<div style="margin: 20px 0; padding: 16px; border-left: 6px solid #9C27B0; background-color: #F3E5F5; border-radius: 4px; color: #333;">
  <div style="display: flex; align-items: center; margin-bottom: 8px;">
    <span style="font-size: 1.2rem; margin-right: 10px;">⚡</span>
    <strong style="color: #9C27B0; text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.9rem;">Recommended: Automate Server Provisioning</strong>
  </div>
  <p style="margin: 0; line-height: 1.6; font-size: 0.95rem; margin-bottom: 8px;">
    Instead of manually configuring your server, I highly recommend using the <a href="https://github.com/guillaumebriday/kamal-ansible-manager">Kamal Ansible Manager</a> playbook. It automatically handles Docker installation, creates a secure firewall with UFW, sets up Fail2ban for intrusion prevention, configures NTP for time sync, optimizes swap settings, and hardens SSH by disabling password authentication.
  </p>
  <p style="margin: 0; line-height: 1.6; font-size: 0.95rem;">
    This Ansible playbook takes care of all the foundational security and optimization steps in one command, saving you time and ensuring best practices are followed. See the repository for video and setup instructions.
  </p>
</div>

---

## Project Setup: Initializing Kamal

Navigate to your project directory and run:

```bash
kamal init
```

This generates three things: a `config/deploy.yml` configuration file, a `.kamal/secrets` file for sensitive values, and sample hook scripts in `.kamal/hooks`. The `deploy.yml` is where all the important configuration lives.

### Config and Secrets: Our Environment Variable Workflow

> Let's look at our environment variable workflows. This setup ensures that your server IP and app name are public, but your database passwords never leave your machine.

| Layer              | File                                                                                                                                     | Purpose                                                  | Git Status    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------- |
| **The Blueprint**  | `config/deploy.yml`                                                                                                                      | References variables (e.g., `<%= ENV["DB_PASSWORD"] %>`) | **Committed** |
| **The Gatekeeper** | `.kamal/secrets`                                                                                                                         | Maps local ENV vars to Kamal’s internal secret store     | **Committed** |
| **The Vault**      | local `.env` file (or [GitHub Secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets)) | Holds the actual raw passwords and keys                  | **Excluded**  |

Our `.kamal/secrets` file is committed to git and contains no raw credentials. Every entry maps to an environment variable that must exist when you deploy.

```bash
# .kamal/secrets
# Your local .env or GitHub Secrets variables are referenced here and pulled into Kamal's secret store on deploy. This file is committed to git but contains no raw credentials.

# Registry secrets
KAMAL_REGISTRY_PASSWORD=$KAMAL_REGISTRY_PASSWORD
KAMAL_REGISTRY_USERNAME=$KAMAL_REGISTRY_USERNAME
KAMAL_REGISTRY_LOGIN_SERVER=$KAMAL_REGISTRY_LOGIN_SERVER # only if you're not using docker hub

# Host secrets
KAMAL_APP_NAME=$KAMAL_APP_NAME
KAMAL_IMAGE_NAME=$KAMAL_IMAGE_NAME
KAMAL_APP_DOMAIN=$KAMAL_APP_DOMAIN
KAMAL_SERVER_IP=$KAMAL_SERVER_IP

# Database port mapping
KAMAL_DB_PORT_MAPPING=$KAMAL_DB_PORT_MAPPING # only if you need to expose Postgres outside the Docker network

# Database secrets
DATABASE_URL=$DATABASE_URL
DB_HOST=$DB_HOST
POSTGRES_USER=$POSTGRES_USER
POSTGRES_DB=$POSTGRES_DB
POSTGRES_PASSWORD=$POSTGRES_PASSWORD

# cloudflare r2 secrets
S3_ACCESS_KEY_ID=$S3_ACCESS_KEY_ID
S3_SECRET_ACCESS_KEY=$S3_SECRET_ACCESS_KEY
S3_BUCKET=$S3_BUCKET
S3_ENDPOINT=$S3_ENDPOINT
S3_PREFIX=$S3_PREFIX
S3_DEFAULT_REGION=$S3_DEFAULT_REGION
PASSPHRASE=$PASSPHRASE
```

The actual values for these variables live in your local `.env` file (which is gitignored) and in GitHub Secrets for CI/CD. This way, you can safely commit your `deploy.yml` and `.kamal/secrets` to your repository without risking sensitive information. When you run `kamal deploy`, it reads the secrets from `.kamal/secrets`, pulls the corresponding values from your environment, and injects them into the containers on the server at runtime.

Below is an example `.env` file that corresponds to the secrets above. This file should never be committed to git.

```bash
# .env

# Registry credentials (only needed for private registries like ghcr.io or DigitalOcean's registry)
KAMAL_REGISTRY_USERNAME=
KAMAL_REGISTRY_PASSWORD=
KAMAL_REGISTRY_LOGIN_SERVER=

# Host and app configuration
KAMAL_APP_NAME=nuxt-app
KAMAL_APP_DOMAIN=myapp.example.com
KAMAL_SERVER_IP=

KAMAL_DB_PORT_MAPPING=5432:5432 # maps host port 5432 to container port 5432

DATABASE_URL=postgresql://admin:root@nuxt-app-db:5432/kamal-deploy
POSTGRES_USER=admin
POSTGRES_PASSWORD=root
DB_HOST=nuxt-app-db
POSTGRES_DB=nuxt_app

PASSPHRASE=test1234

S3_ACCESS_KEY_ID=
S3_SECRET_ACCESS_KEY=

S3_DEFAULT_REGION=auto
S3_BUCKET=project-bucket
S3_ENDPOINT=s3-api-url
S3_PREFIX=subfolder
```

---

## Configuring Your Deployment

The `config/deploy.yml` file is the heart of your Kamal setup. Our template keeps it reusable by pulling configuration values from environment variables, which is especially helpful when you run locally and later move the same config into CI/CD or another repository.

<div style="margin: 20px 0; padding: 16px; border-left: 6px solid #2196F3; background-color: #E3F2FD; border-radius: 4px; color: #333;">
  <div style="display: flex; align-items: center; margin-bottom: 8px;">
    <span style="font-size: 1.2rem; margin-right: 10px;">ℹ️</span>
    <strong style="color: #2196F3; text-transform: uppercase; letter-spacing: 0.05em; font-size: 0.9rem;">Note for Local Development</strong>
  </div>
  <p style="margin: 0; line-height: 1.6; font-size: 0.95rem; margin-bottom: 8px;">
    For local development only, add the following lines to the top of your <code>config/deploy.yml</code> to load environment variables from a <code>.env</code> file:
  </p>
  <pre style="background-color: #1E293B; padding: 12px; border-radius: 4px; overflow-x: auto; margin: 0;"><code>&lt;% require "dotenv" %&gt;
&lt;% Dotenv.load(".env") %&gt;</code></pre>
</div>

### The Service and Image

```yaml
service: <%= ENV["KAMAL_APP_NAME"] %>
image: <%= ENV["KAMAL_IMAGE_NAME"] %>
```

The `service` name is used as a prefix for all containers Kamal creates. The `image` is the full path to your container image in whatever registry you're using.

### Servers

```yaml
servers:
  web:
    hosts:
      - <%= ENV["KAMAL_SERVER_IP"] %>
```

This tells Kamal which servers to deploy to. Kamal automatically places all containers on its own Docker network (`kamal`), so your app and accessories (like databases) can communicate with each other out of the box.

### Registry Credentials

```yaml
registry:
registry:
  # Specify the registry server, if you're not using Docker Hub
  # server: <%= ENV["KAMAL_REGISTRY_LOGIN_SERVER"] %>
  username: <%= ENV["KAMAL_REGISTRY_USERNAME"] %>

  password:
    - KAMAL_REGISTRY_PASSWORD
```

The password is pulled from your `.kamal/secrets` file (never hardcode credentials in `deploy.yml`). If you're using Docker Hub, you can omit the `server` field entirely since it's the default. For GitHub Container Registry, set `server: ghcr.io`.

### The Proxy (SSL and Domain)

```yaml
proxy:
  ssl: true
  host: <%= ENV["KAMAL_APP_DOMAIN"] %>
  app_port: 3000 # Port your app runs on inside the container
  forward_headers: true # Forward client headers to your application
  healthcheck:
    path: /up # Default is /up, change if your app uses a different health check endpoint
    interval: 10 # Interval between health checks in seconds
    timeout: 10 # Health check timeout in seconds
```

This tells `kamal-proxy` to issue a Let's Encrypt certificate for your domain, forward HTTPS traffic to your app's container on port 3000, and handle zero-downtime switchover during deploys. You will need to make sure port 443 is open on your server and create a DNS A record that points to the server IP.

### Environment Variables

```yaml
env:
  clear:
    NODE_ENV: test # Set to 'production' for production deployments
  secret:
    - DATABASE_URL # Database connection string
    - DB_HOST # Database host address
```

Secret variables are pulled from `.kamal/secrets` and never logged.

### Builder Configuration

This ensures your images are built for the correct architecture. If your local machine is an Apple Silicon Mac (arm64) but your server is x86, this setting is essential.

```yaml
# Build for multiple architectures
builder:
  arch:
    - amd64
    # - arm64
```

### SSH User

If you created a deploy user earlier, add:

```yaml
ssh:
  user: dev
```

### Adding a PostgreSQL Database as an Accessory

**Accessories** are long-running services like databases, caches, or queues that live alongside your application but have their own independent lifecycle. Accessories aren't rebuilt on every deploy but rather persist across releases.

Here's how to add PostgreSQL:

```yaml
accessories:
  # PostgreSQL database service
  db:
    image: postgres:16 # PostgreSQL version 16
    host: <%= ENV["KAMAL_SERVER_IP"] %> # Host where database runs
    port: <%= ENV["KAMAL_DB_PORT_MAPPING"] %>

    directories:
      - data:/var/lib/postgresql/data # Persistent storage for Postgres data across container restarts (auto creates host directory if it doesn't exist)
    env:
      secret:
        - POSTGRES_DB # Database name
        - POSTGRES_USER # Database user
        - POSTGRES_PASSWORD # Database password
```

Let's break down what's happening here. The `image` is the official PostgreSQL 16 Docker image. The `host` tells Kamal which server to run it on. The `port` mapping exposes PostgreSQL's default port. The `directories` section maps a local `data` directory to the container's data path, so your database survives container restarts. Kamal puts it on the same Docker network as your app by default, so container-to-container communication just works.

### Adding Automated Database Backups as Another Accessory

Running a database without backups is asking for trouble. Kamal makes it straightforward to add a backup service as another accessory. The [`eeshugerman/postgres-backup-s3`](https://github.com/eeshugerman/postgres-backup-s3) image is purpose-built for this: it runs `pg_dump` on a schedule and uploads encrypted, compressed backups to any S3-compatible storage (AWS S3, Cloudflare R2, MinIO, Backblaze B2, etc.).

```yaml
db-backup:
  image: eeshugerman/postgres-backup-s3:16 # Backup tool for PostgreSQL 16
  roles:
    - web # Deploys to all servers in the web role

  files:
    - scripts/backup.sh:/backup.sh # Import the backup script from the host to the container (auto creates host directory if it doesn't exist)

  directories:
    - /etc/ssl/certs:/etc/ssl/certs:ro # import ssl certificates from the host to the container

  env:
    clear:
      SCHEDULE: '@hourly'
      BACKUP_KEEP_DAYS: 14

      # S3 / R2 configuration
      S3_REGION: <%= ENV["S3_DEFAULT_REGION"] %> # replace auto with DEFAULT_REGION env variable if needed (set to auto for R2)
      S3_BUCKET: <%= ENV["S3_BUCKET"] %>
      S3_ENDPOINT: <%= ENV["S3_ENDPOINT"] %>
      S3_PREFIX: <%= ENV["S3_PREFIX"] %>
      S3_ACCESS_KEY_ID: <%= ENV["S3_ACCESS_KEY_ID"] %>
      S3_SECRET_ACCESS_KEY: <%= ENV["S3_SECRET_ACCESS_KEY"] %>

      # Point at your Kamal Postgres accessory
      # Database credentials
      POSTGRES_PASSWORD: <%= ENV["POSTGRES_PASSWORD"] %>
      POSTGRES_USER: <%= ENV["POSTGRES_USER"] %>
      POSTGRES_DATABASE: <%= ENV["POSTGRES_DB"] %>
      POSTGRES_HOST: <%= ENV["DB_HOST"] %>

      # Passphrase for GPG encryption
      PASSPHRASE: <%= ENV["PASSPHRASE"] %>
```

This configuration runs an hourly backup, retains 14 days of history, and encrypts the dumps with GPG using the `PASSPHRASE` secret. If you're using Cloudflare R2, set `S3_DEFAULT_REGION` to `auto` and point `S3_ENDPOINT` to your R2 endpoint.

The full deploy can be seen here: [deploy.yml](https://github.com/fairdataihub/kamal-deploy/blob/main/config/deploy.yml).

---

## Startup Script: Wait for Postgres, Run Migrations and Start the Server

Since we're using Prisma we need to include in our Dockerfile to run migrations safely on container startup. We've created a custom script specifically for this purpose (`scripts/start.sh`) that waits for the database to be ready, runs `npx prisma@6.0.0 migrate deploy`, and then starts the server. This pattern is common for containerized applications that depend on a database.

When deploying a stack, your app container can sometimes boot faster than your database. To avoid crash loops, we use a startup script. This script does three things:

1. Waits for `${DB_HOST}:5432` to accept connections (DB_HOST is injected from our secrets and points to the PostgreSQL accessory)
2. Runs `npx prisma@6.0.0 migrate deploy` (safe for production; applies only pending migrations)
3. Starts the server process with `exec` so signals are handled correctly

The `scripts/start.sh`will look like this:

```bash
#!/bin/sh

# Exit immediately if any command fails
set -e

echo "Waiting for database at ${DB_HOST}:5432..."

# nc (netcat) is used to test if the port is open and accepting connections
MAX_RETRIES=30
RETRY_COUNT=0

until nc -z "${DB_HOST}" 5432; do
  RETRY_COUNT=$((RETRY_COUNT+1))
  if [ "$RETRY_COUNT" -ge "$MAX_RETRIES" ]; then
    echo "Error: Database at ${DB_HOST}:5432 did not become available after $((MAX_RETRIES * 2)) seconds."
    exit 1
  fi
  echo "  waiting… sleeping 2s (attempt ${RETRY_COUNT}/${MAX_RETRIES})"
  sleep 2
done

echo "Running migration..."

# Deploy any pending Prisma migrations to the database
# We are using version associated with our app's dependencies to ensure compatibility
npx prisma@6.0.0 migrate deploy

echo "Migrations complete. Starting..."

# Start the Node.js application server
exec node /app/server/index.mjs

```

### Writing Your Dockerfile

Now we will include the startup script in our Dockerfile and make sure it's executable:

```
# Build stage
FROM node:20-alpine AS builder

# Use alpine-based image and install only necessary dependencies
RUN apk add --no-cache openssl

WORKDIR /app

# Only needed for prisma build (some setups/tools expect it)
ARG DATABASE_URL

# Copy only necessary files for dependency installation
COPY package.json yarn.lock ./
COPY prisma ./prisma/

RUN yarn install --frozen-lockfile \
  && yarn prisma:generate \
  && yarn cache clean

# Copy source files and build
COPY . .
RUN yarn run build

# Production stage
FROM node:20-alpine

LABEL maintainer="FAIR Data Innovations Hub <contact@fairdataihub.org>" \
  description="Testing Kamal workflow..."

# Busybox extras provides `nc` (netcat), used to wait for Postgres to be ready
RUN apk add --no-cache openssl busybox-extras

WORKDIR /app

# Copy Nuxt build output
COPY --from=builder /app/.output ./

# Copy Prisma runtime bits
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# Copy the Prisma schema & migrations so `prisma migrate deploy` can run at startup
COPY --from=builder /app/prisma ./prisma

# Copy our startup script and make it executable
COPY scripts/start.sh /app/scripts/start.sh
RUN chmod +x /app/scripts/start.sh

EXPOSE 3000

# Recommended: Kamal health check endpoint (expects /up)
HEALTHCHECK --interval=10s --timeout=5s --start-period=30s \
  CMD wget -qO- http://localhost:3000/up || exit 1

# Run startup script that runs migrations before starting the app
CMD ["/app/scripts/start.sh"]

```

The key thing Kamal needs is a health check endpoint. By default, it hits `GET /up` on your container. If it gets a `200 OK`, it switches traffic to the new container. Make sure your application has this route.

---

## Deploying for the First Time

With your `deploy.yml`, `.kamal/secrets`, and `Dockerfile` in place, the first deploy uses `kamal setup` and `kamal deploy`. You will need to ensure all your changes have at least been commited locally since `kamal setup` reads the `deploy.yml` from the current git HEAD to know how to configure the server.

```bash
# After commiting your latest changes to git, run the initial setup
kamal setup
```

This single command does a lot. It SSHes into your server, installs Docker if it's not already present, creates the `kamal` Docker network, starts the `kamal-proxy` reverse proxy on ports 80 and 443, boots all your accessories (PostgreSQL, backups), builds your application's Docker image, pushes it to your registry, pulls it on the server, runs health checks, and switches traffic to the new container.

Watch the output carefully on first run. It will tell you if anything fails, like a missing environment variable or a health check that isn't responding.

## Subsequent Deploys

After the initial setup, every future deploy is just:

```bash
kamal deploy
```

Under the hood, this builds a new image tagged by your Git SHA, pushes it, pulls it on the server, spins up a new container, health checks it, and only then switches traffic over and stops the old container. True zero-downtime.

If something goes wrong, roll back instantly:

```bash
kamal deploy --version=PREVIOUS_GIT_SHA
```

## Useful Kamal Commands

Here are the commands you'll reach for most often:

```bash
# View application logs
kamal app logs

# View accessory logs
kamal accessory logs db

# Get details about running containers
kamal details

# Open a shell in a running app container
kamal app exec -i --reuse "sh"

# Reboot an accessory after config changes
kamal accessory reboot db

# Clean up old containers and images
kamal prune all

# Trigger a manual backup at any time after deployment
kamal accessory exec -i --reuse db-backup "sh backup.sh"

# Restore from a specific timestamp
kamal accessory exec -i --reuse db-backup "sh restore.sh TIMESTAMP"

```

or create kamal aliases directly in the `deploy.yml`:

```yaml
# These are convenient shortcuts for common operations
# (place at the root level of deploy.yml before accessories)
aliases:
  web-shell: app exec --interactive --reuse "sh" # Access shell in web container
  db-shell: accessory exec db --interactive --reuse "bash" # Access PostgreSQL shell
  db-backup-shell: accessory exec db-backup --interactive --reuse "sh" # Access backup container shell
  backup-db: accessory exec db-backup --interactive "sh ./backup.sh" # Run database backup
```

---

## Automating Deploys with GitHub Actions

Now you could manually run `kamal deploy` from your local machine everytime you want a new release but the real power comes from wiring it into CI/CD. With GitHub Actions, every push to `main` (or any other branch you configure) can automatically build, push, and deploy your application with zero manual intervention.

### Setting Up GitHub Environment Secrets

Since we've configured our `deploy.yml` to pull all secrets from environment variables, we just need to make sure those secrets are available in the GitHub Actions runner. We do that by adding them as secrets in a GitHub Environment.

In your repository, go to **Settings > Environments > New environment** and create a `prd` environment (and a `stg` one if you want staging). Then add all the same variables you have in your `.env` file as secrets in that environment.

The `SSH_PRIVATE_KEY` is particularly important: this is the private key that GitHub Actions will use to SSH into your server. Generate a dedicated key pair for CI, add the public key to your deploy user's `~/.ssh/authorized_keys` on the server, and paste the private key into the GitHub secret.

### The Deploy Workflow

Here's a production deploy workflow that triggers on every push to `main` and can also be triggered manually from the GitHub UI:

```yaml
# .github/workflows/deploy-prd.yml
name: Deploy to production environment

concurrency:
  group: production-app-deploy
  cancel-in-progress: true

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  deploy-ui:
    runs-on: ubuntu-latest
    environment: prd

    env:
      DOCKER_BUILDKIT: 1
      KAMAL_REGISTRY_LOGIN_SERVER: ${{ secrets.KAMAL_REGISTRY_LOGIN_SERVER }}
      KAMAL_REGISTRY_USERNAME: ${{ secrets.KAMAL_REGISTRY_USERNAME }}
      KAMAL_REGISTRY_PASSWORD: ${{ secrets.KAMAL_REGISTRY_PASSWORD }}
      KAMAL_SERVER_IP: ${{ secrets.KAMAL_SERVER_IP }}
      KAMAL_DB_PORT_MAPPING: ${{ secrets.KAMAL_DB_PORT_MAPPING }}
      KAMAL_APP_DOMAIN: ${{ secrets.KAMAL_APP_DOMAIN }}
      KAMAL_APP_NAME: ${{ secrets.KAMAL_APP_NAME }}
      DATABASE_URL: ${{ secrets.DATABASE_URL }}
      DB_HOST: ${{ secrets.DB_HOST }}
      POSTGRES_DB: ${{ secrets.POSTGRES_DB }}
      POSTGRES_USER: ${{ secrets.POSTGRES_USER }}
      POSTGRES_PASSWORD: ${{ secrets.POSTGRES_PASSWORD }}
      S3_ACCESS_KEY_ID: ${{ secrets.S3_ACCESS_KEY_ID }}
      S3_SECRET_ACCESS_KEY: ${{ secrets.S3_SECRET_ACCESS_KEY }}
      S3_BUCKET: ${{ secrets.S3_BUCKET }}
      S3_ENDPOINT: ${{ secrets.S3_ENDPOINT }}
      S3_PREFIX: ${{ secrets.S3_PREFIX }}
      S3_DEFAULT_REGION: ${{ secrets.S3_DEFAULT_REGION }}
      PASSPHRASE: ${{ secrets.PASSPHRASE }}

    steps:
      - uses: actions/checkout@v4

      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: 3.3.1
          bundler-cache: true

      - run: gem install kamal

      - uses: webfactory/ssh-agent@v0.9.0
        with:
          ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}

      - name: Set up Docker Buildx for cache
        uses: docker/setup-buildx-action@v3

      - run: kamal version

      # Release any stale locks from a previously cancelled run
      - run: kamal lock release

      - run: kamal deploy
```

Let's break down the workflow. The `concurrency` block ensures only one deploy runs at a time. If you push twice in quick succession, the first deploy gets cancelled in favor of the second. The `environment: prd` setting ties the job to a GitHub environment, which is where all your secrets live. Then finally the `kamal lock release` step clears any stale deployment locks from a previously interrupted run before kicking off the deploy.

Note that we use `kamal deploy` here, not `kamal setup`. The `setup` command is meant for initial bootstrapping (installing Docker, booting accessories for the first time). For ongoing CI deployments, `kamal deploy` is considered the right command since it skips the bootstrap checks and just builds, pushes, and deploys your app.

All secrets (registry credentials, server IP, database passwords, S3 keys) are stored in GitHub's environment secrets, never in the workflow file itself. Kamal reads them as environment variables at runtime.

### Additional Utility Workflows

Beyond the main deploy, you can create separate workflows for database operations that are triggered manually via `workflow_dispatch`. Here are the workflows we use:

| Workflow                                                                                                        | Trigger | Purpose                                                      |
| --------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------ |
| [deploy-prd.yml](https://github.com/fairdataihub/kamal-deploy/blob/main/.github/workflows/deploy-prd.yml)       | Push    | Triggers an on-push deployment to the production environment |
| [backup-db-prd.yml](https://github.com/fairdataihub/kamal-deploy/blob/main/.github/workflows/backup-db-prd.yml) | Manual  | Triggers an on-demand database backup to S3/R2 when needed   |
| [reboot-db-prd.yml](https://github.com/fairdataihub/kamal-deploy/blob/main/.github/workflows/reboot-db.yml)     | Manual  | Reboots the PostgreSQL accessory after configuration changes |

With this setup, your day-to-day workflow becomes: push to `main` and the deploy happens automatically. If you need to trigger a database backup or reboot an accessory, click the "Run workflow" button in the GitHub Actions tab. No SSH-ing into servers, no remembering commands.

---

## What Else Can You Deploy?

Because Kamal works with any Docker container, the possibilities are wide open. Here are a few ideas to get you thinking:

**Self-hosted AI & GPU Workloads.** Kamal isn't just for web apps since it just manages standard Docker containers. You could deploy AI inference engines like **Ollama** by passing the `--gpus all` flag (or using a custom Docker runtime in your `deploy.yml`) and host your own Llama 3 or Mistral models.

**Private analytics.** Deploy [Plausible](https://plausible.io/), [Umami](https://umami.is/), or [PostHog](https://posthog.com/) as accessories alongside your main app. Full analytics without sending user data to a third party.

**Multiple apps on one server.** Kamal's proxy routes based on hostname, so you can run several applications on the same server, each with their own domain and SSL certificate.

## Common Gotchas

A few things that might trip you up on your first deploy:

**WSL path issues.** If you're using Windows Subsystem for Linux, make sure your project lives under the Linux filesystem (`/home/your-user/...`), not on a Windows-mounted drive (`/mnt/c/...`). Docker volume mounts behave differently across the filesystem boundary.

**Firewall and Docker.** Exposing a port on a Docker container also exposes it in iptables, which can bypass UFW rules. Be mindful of which accessory ports you expose, especially databases. Binding to localhost (`127.0.0.1:5432:5432`) is safer than exposing to all interfaces. The [Kamal Ansible Manager](https://github.com/guillaumebriday/kamal-ansible-manager) playbook mentioned earlier handles UFW configuration automatically.

**Let's Encrypt rate limits.** If you're testing SSL repeatedly with the same domain, you might hit Let's Encrypt's rate limits. Use a staging domain or disable SSL (`ssl: false`) during initial testing.

**Health check failures.** If your app takes a while to start, Kamal might fail the health check before it's ready. You can configure the check interval and timeout in `deploy.yml` under `proxy`.

## Wrapping Up

As daunting as it may seem at first, self hosting can be a rewarding experience. In this field, we are all lifelong students. Technology changes quickly, and learning Kamal was a great way to demystify the deployment process. I hope this guide gives you the curiosity to explore self hosting and confidence to deploy your own applications.

Technology will always continue to change and the way we work. Being willing to struggle through the initial stages is just part of the journey. I hope this guide gives you the curiosity and confidence to host your own applications!

---

## Sources

- [fairdataihub/kamal-deploy](https://github.com/fairdataihub/kamal-deploy)
- [Kamal: Deploy web apps anywhere](https://kamal-deploy.org/) (Official documentation)
- [Kamal Handbook, 2nd Edition](https://kamalmanual.com/handbook/) by Josef Strzibny (Version 2.0.1, covering Kamal 2.2.1)
- [We stand to save $7m over five years from our cloud exit](https://world.hey.com/dhh/we-stand-to-save-7m-over-five-years-from-our-cloud-exit-53996caa) by David Heinemeier Hansson, 37signals
- [fairdataihub/kamal-deploy](https://github.com/fairdataihub/kamal-deploy) (Example Nuxt 3 + PostgreSQL + S3 backups repository)
- [eeshugerman/postgres-backup-s3](https://github.com/eeshugerman/postgres-backup-s3) (Automated PostgreSQL backup container)
- [GitHub Secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets)
- [Kamal Ansible Manager](https://github.com/guillaumebriday/kamal-ansible-manager)

### Sources for 2026 Pricing On Self Hosting vs Cloud

- **Azure:** [Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/) (Ref: A4 v2 instance).
- **Bandwidth Costs:** [Azure Bandwidth Pricing](https://azure.microsoft.com/en-us/pricing/details/bandwidth/).
- **Hetzner:** [Cloud Pricing](https://www.hetzner.com/cloud) (Ref: CX43 / CPX series).
- **DigitalOcean:** [Droplet Pricing](https://www.digitalocean.com/pricing/droplets). (Ref: Basic Droplet with 4 vCPUs and 8GB RAM).
- **Azure Bandwidth:** [Egress Pricing Details](https://azure.microsoft.com/en-us/pricing/details/bandwidth/).
