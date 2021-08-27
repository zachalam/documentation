---
layout: nodes.liquid
section: smartContract
date: Last Modified
title: "Decentralized Data Model"
permalink: "docs/architecture-decentralized-model/"
whatsnext: {"Get the Latest Price":"/docs/get-the-latest-price/", "Off-Chain Reporting":"/docs/off-chain-reporting/"}
metadata: 
  title: "Chainlink Decentralised Data Model"
  description: "This page describes the decentralized architecture which enables Chainlink to aggregate data from multiple independent node operators."
  image: 
    0: "/files/OpenGraph_V3.png"
---
This page describes how data aggregation is applied to produce Chainlink Data Feeds.

# Price Aggregation

Each data feed is updated by multiple, independent Chainlink oracle operators. Aggregation is handled on-chain by <a href="https://github.com/smartcontractkit/chainlink/blob/master/contracts/src/v0.6/FluxAggregator.sol" target="_blank">`FluxAggregator`</a>.

![Chainlink Feeds List](/images/contract-devs/price-aggr.png)

## Shared Data Resource

Each data feed is built and funded by the community of users who rely on accurate, up-to-date price data in their smart contracts. As more users rely on and contribute to a data feed, the quality of the data feed improves. For this reason, each data feed has its own properties depending on the needs of its community of users.

## Decentralized Oracle Network

Each data feed is updated by a decentralized oracle network. Each oracle operator is rewarded for publishing price data. The number of oracles contributing to each feed varies. For example, in the ETH/USD Data Feed, there are 21 oracles.

In order for an update to take place, the data feed contract must receive responses from a minimum number of oracles. For example, 14 / 21 oracles. Otherwise, the latest answer will not be updated.

Each oracle in the set publishes answers to the latest price of an asset during an aggregation round. The answers are validated and aggregated by a smart contract, which forms the feed's latest and trusted answer. Developers wishing to use an asset's latest and trusted answer can do so easily by following the [Get the Latest Price](../get-the-latest-price/) page.

## Aggregation Parameters

Each aggregation round is triggered based on one or more aggregation parameters. Whichever condition is met first will trigger a price update

### Deviation Threshold

A new aggregation round starts when a node identifies that the off-chain price deviates, by more than the deviation threshold, of the on-chain price. Individual nodes monitor one or more data providers for each feed.

### Heartbeat Threshold

A new aggregation round starts after a specified amount of time from the last update.

# Contracts Overview

![Contracts Architecture Diagram](/files/399e90d-Simple_Architecture_Diagram_2_V1.png)

All source code is open source and available in our <a href="https://github.com/smartcontractkit/chainlink" target="_blank">Github repository</a>.

## Consumer

A Consumer contract is any contract that uses Chainlink Data Feeds to consume aggregated data. Consumer contracts simply reference the correct <a href="https://github.com/smartcontractkit/chainlink/blob/master/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol" target="_blank">`AggregatorV3Interface`</a> and call one of the exposed functions.

```javascript
...
AggregatorV3Interface feed = AggregatorV3Interface(address);
return feed.latestRoundData();
```

Learn how to create a consumer contract to [Get the Latest Price](../get-the-latest-price/) of an asset.

## Proxy

Proxy contracts are on-chain proxies that store the most up-to-date Aggregator for a particular data feed. Using proxies enables the underlying Aggregator to be upgraded without any interruption of service for consuming contracts.

See the <a href="https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.7/dev/AggregatorProxy.sol" target="_blank">`AggregatorProxy`</a> contract on Github.

## Aggregators

Aggregators are the contracts that receive periodic price updates from multiple Oracles. They aggregate and store the current price on-chain so that consumers can obtain the latest price and act upon it within the same transaction.

This data can be accessed by referencing the Data Feed address using the <a href="https://github.com/smartcontractkit/chainlink/blob/develop/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol" target="_blank">`AggregatorV3Interface`</a> contract.

To learn how to consume Data Feed data, see [Get the Latest Price](../get-the-latest-price/).
