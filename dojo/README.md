
# StarkChess

A quickstart guide to help you build and deploy your first Dojo provable game.

Read the full tutorial [here](https://dojoengine.org/tutorial/dojo-starter).

## Running Locally

#### Terminal one (Make sure this is running)

```bash
# Run Katana
katana --dev --dev.no-fee
```

#### Terminal two

```bash
# Build the example
sozo build

# Inspect the world
sozo inspect

# Migrate the example
sozo migrate

# Start Torii
# Replace <WORLD_ADDRESS> with the address of the deployed world from the previous step
torii --world <WORLD_ADDRESS> --http.cors_origins "*"
```
