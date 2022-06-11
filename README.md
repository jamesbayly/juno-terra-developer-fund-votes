# SubQuery Starter Project for Juno

This is a starter project for Indexing Juno. It includes a simple blockhandler and an event handler. This project indexes all transfer events in juno-1.

# Geting Started

### 1. Install dependencies

```shell
yarn
```

### 2. Generate types

```shell
yarn codegen
```

### 3. Build

```shell
yarn build
```

### 4. Run locally

```shell
yarn start:docker
```

### 5. Make a test query

Open up the query service in your local browser here http://localhost:3000/

```graphql
query {
	votes(
    first: 5
    orderBy: BLOCK_HEIGHT_DESC
    filter: {proposalID: {equalTo: "4"}}
  ) {
    nodes {
      id
      blockHeight
      voter
      vote
    }
  }
}
```
