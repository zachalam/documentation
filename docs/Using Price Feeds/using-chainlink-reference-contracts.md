---
layout: nodes.liquid
section: smartContract
date: Last Modified
title: "Introduction to Data Feeds"
permalink: "docs/using-chainlink-reference-contracts/"
whatsnext: {"Get the Latest Price":"/docs/get-the-latest-price/", "API Reference":"/docs/price-feeds-api-reference/", "Contract Addresses":"/docs/reference-contracts/"}
metadata: 
  title: "How to Use Chainlink Decentralized Data Feeds in Smart Contracts"
  description: "Add cryptocurrency price data to your smart contract. Chainlink data feeds include BTC/USD, BTC/ETH, ETH/USD and more!"
  image: 
    0: "/files/OpenGraph_V3.png"
---
![Chainlink Abstract Banner](/files/2306b8b-Decentralized_Oracles_V3.png)

# Connect Your Smart Contracts to the Outside World

Chainlink Data Feeds are the quickest way to connect your smart contracts to the real-world market prices of assets. They enable smart contracts to retrieve the latest price of an asset in a single call.

# Retrieve the Latest Asset Prices

Often, smart contracts need to act upon prices of assets in real-time. This is especially true in <a href="https://defi.chain.link/" target="_blank">DeFi</a>.

For example, <a href="https://www.synthetix.io/" target="_blank">Synthetix</a> use Data Feeds to determine prices on their derivatives platform. Lending and Borrowing platforms like <a href="https://aave.com/" target="_blank">AAVE</a> use Data Feeds to ensure the total value of the collateral.

The [Decentralized Data Model](../architecture-decentralized-model/) describes how Data Feeds are aggregated from many data sources and published on-chain.