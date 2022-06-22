# SubQuery Starter Project for Juno

This project indexes all votes made on the Terra Developer Fund
You can try out this project in the Explorer here
[https://explorer.subquery.network/subquery/subquery/juno-terra-developer-fund-votes](https://explorer.subquery.network/subquery/subquery/juno-terra-developer-fund-votes)

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
    # filter: {proposalID: {equalTo: "4"}}
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
