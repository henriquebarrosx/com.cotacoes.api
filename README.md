### Setting up environment

1. Create `.env`

```bash
FOREX_WS_URL="wss://.../websocket"

RABBITMQ_URI="amqp://admin:guest@localhost"

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/twigodb"
DATABASE_USERNAME="postgres"
POSTGRES_PASSWORD="postgres"
POSTGRES_DB="twigodb"
```

2. Check if you already have a network called "jim-network"

```bash
docker network ls | grep jim-network
```

3. Create the network to be visible to othe microservices if it does not exist.

```bash
docker network create jim-network
```

4. Run the PostgreSQL database from Docker (optional)

> Checkout if you already have a container running at same port.

```bash
# On Linux
docker run -d \
  --name db \
  --restart always \
  --network jim-network \
  --memory=350m \
  -p 5432:5432 \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=twigodb \
  -v postgres_data:/var/lib/postgresql/data \
  postgres:16

# On PowerShell
docker run -d `
  --name db `
  --restart always `
  --network jim-network `
  --memory=350m `
  -p 5432:5432 `
  -e POSTGRES_USER=postgres `
  -e POSTGRES_PASSWORD=postgres `
  -e POSTGRES_DB=twigodb `
  -v postgres_data:/var/lib/postgresql/data `
  postgres:16
```

Wait until PostgreSQL is ready for connections. You will se something like "database system is ready to accept connections" on logs.

```bash
docker ps # Take the container id
docker <container_id> logs -f
```

5. Run the RabbitMQ from Docker (optional)

> Checkout if you already have a container running at same port.

```bash
# Or at Linux system
docker run -d \
  --name rabbitmq \
  --restart always \
  --network jim-network \
  --memory=350m \
  -p 5672:5672 \
  -p 15672:15672 \
  -e RABBITMQ_DEFAULT_USER=admin \
  -e RABBITMQ_DEFAULT_PASS=guest \
  -v rabbitmq_data:/var/lib/rabbitmq \
  -v $(pwd)/rabbitmq/rabbitmq.conf:/etc/rabbitmq/rabbitmq.conf \
  rabbitmq:3-management

# At Powershell
docker run -d `
  --name rabbitmq `
  --restart always `
  --network jim-network `
  --memory=350m `
  -p 5672:5672 `
  -p 15672:15672 `
  -e RABBITMQ_DEFAULT_USER=admin `
  -e RABBITMQ_DEFAULT_PASS=guest `
  -v rabbitmq_data:/var/lib/rabbitmq `
  -v "${PWD}\rabbitmq\rabbitmq.conf:/etc/rabbitmq/rabbitmq.conf" `
  rabbitmq:3-management
```

Wait until RabbitMQ is ready for connections. You will se something like "Ready to start client connection listeners" on logs.

```bash
docker ps # Take the container id
docker <container_id> logs -f
```

6. Download dependencies

```bash
bun install
```

7. Run migrations

```bash
bun drizzle-kit migrate
```

8. Run the app

```bash
bun run start # or "bun run dev" to run in watch mode
```

### Migrations

```bash
# Generating migrations automatically from schemas
bun drizzle-kit generate

# Running pending migrations
bun drizzle-kit migrate
```
