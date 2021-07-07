---
layout: nodes.liquid
section: smartContract
title: "Smart Contract Developer FAQ"
date: Last Modified
permalink: "docs/faq-smart-contract-developer/"
metadata: 
  description: "Find answers to common questions about developing on Chainlink."
---
## How do I request data from Chainlink?

You can use our <a href="https://blog.chain.link/how-to-use-chainlink-with-truffle-2/" target="_blank">Truffle Box</a> to get started by unboxing a developer-focused template.

If you already have a project started and would like to integrate Chainlink, you can [add Chainlink to your existing project](../create-a-chainlinked-project/#add-chainlink-to-your-existing-project) by using our `chainlink` NPM package.

Resources:
*  [Create a Chainlinked Project](../create-a-chainlinked-project/) 
*  [Example Walkthrough](../intermediates-tutorial/) 
*  <a href="https://blog.chain.link/how-to-use-chainlink-with-truffle-2/" target="_blank">How to use Chainlink with Truffle</a>

## Can Chainlink be used to connect to <*some blockchain/API*>?

Yes, the Chainlink node can connect to most APIs out-of-the-box. Some APIs require authentication by providing request headers for the operator's API key, which the Chainlink node supports. Additionally, external adapters allow for connectivity to any resource as long as the adapter conforms to a minimal JSON specification for communicating to and from the Chainlink node.

Resources:
*  [External Adapters](../external-adapters/) 
<a href="https://blog.chain.link/chainlink-external-adapters-explained/">Chainlink External Adapters Explained</a>

## How do I select Chainlink nodes for my requests?

You can use the <a href="https://market.link/" target="_blank">Chainlink Market</a> to select nodes for your requests. Then with the node's oracle contract address and Job ID, you will use the [`sendChainlinkRequestTo`](../chainlink-framework/#sendchainlinkrequestto)  method to create requests to oracles.

Resources:
*  [Create a Chainlinked Project](../create-a-chainlinked-project/) 
*  [Example Walkthrough](../intermediates-tutorial/) 
*  <a href="https://market.link/" target="_blank">Chainlink Market</a>
*  [Chainlink Contract Reference](../chainlink-framework/#sendchainlinkrequestto)

## How do I request a value that is greater than 32 bytes?

Currently, the EthTX core adapter can only write a single value no larger than 32 bytes onto a blockchain. If the value is larger than 32 bytes, the data may need to be returned by making multiple requests.

## How can I get multiple values with a single request?

Currently, the EthTX core adapter can only write a single value that is no larger than 32 bytes onto a blockchain. If multiple values are needed, the data may need to be returned by making multiple requests.

# Token

## What is the LINK token used for?

The LINK token is an ERC677 token that inherits functionality from the ERC20 token standard and allows token transfers to contain a data payload. It is used to pay node operators for retrieving data for smart contracts and also for deposits placed by node operators as required by contract creators.

Resources:
*  <a href="https://github.com/ethereum/EIPs/issues/677" target="_blank">ERC677: transferAndCall Token Standard</a>

## What wallet do I use to store LINK?

Any wallet that handles ERC20 tokens should work fine. The ERC677 token standard that the LINK token implements still retains all functionality of ERC20 tokens.

# Price Feeds

## What is a phase?

A phase indicates the underlying aggregator implementation has been updated. Phases are only relevant for the EACAggregatorProxys. You can think of a roundId on the proxies as a large number containing data for two numbers (phaseId + roundId). The roundId is pulled from the aggregator's implementation and combined (by bit shifting) with the latest phaseId of the proxy.

## Why don’t the rounds update chronologically?

They do, in the best-case scenario. However, a round can time out if it doesn't reach consensus, so that would technically be a timed out round, which carries over the answer from the previous round. Though roundIds can seemingly jump significantly when the phaseId is updated, because of how that combination of phaseId+roundId is stored in the proxy.

## What is the difference between the price feed properties updatedAt and answeredInRound?

updatedAt is the timestamp of an answered round while answeredInRound is the round it was updated in. 

## How can I check if the answer to a round is being carried over from a previous round?

You can check answeredInRound against the current roundId. If answeredInRound is less than roundId, the answer is being carried over. If answeredInRound is equal to roundId, then the answer is fresh.

## Can the price feed read revert?  

A read can revert if the caller is requesting details of a round that was invalid (perhaps, not being answered yet), which basically is just relevant to a roundId which is greater than a uint32 or 0. It hasn't happened yet, however you can prevent this from happening if you add a check on the roundId.

## Why is latestAnswer reported at 8 decimals for some contracts, but for other contracts it is reported with 18 decimals?

For crypto quotes, 18 decimals is typically used because they usually require more precision. For FX quotes, 8 decimals are used because that is the precision data sources typically report them at.