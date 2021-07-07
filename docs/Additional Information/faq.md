---
layout: nodes.liquid
date: Last Modified
title: "Node Operator FAQ"
permalink: "docs/faq/"
metadata: 
  description: "Find answers to common questions about operating a Chainlink node."
---
# General

## What is the latest progress of the project?

We usually have many development efforts going on at once with the node, the GUI, and the contracts. Check out the project tracker (linked below) to see the current development status.

Resources:
*  <a href="https://www.pivotaltracker.com/n/projects/2129823" target="_blank">Project Tracker</a>
*  <a href="https://github.com/smartcontractkit/chainlink" target="_blank">GitHub</a>

## When is <*something*> expected?

We do not usually give time frames unless something is visibly near completion on the project tracker. This includes features, contracts, and integration with other projects. If something is immediately pending to be merged within the code base, it will be visible as an open PR (pull request) in the repository.

Resources:
*  <a href="https://github.com/smartcontractkit/chainlink/pulls" target="_blank">Pull Requests</a>

## It was announced you are integrating with a specific blockchain but I do not see the documentation for it. What's going on?

The announcement was probably a working announcement. There are two types of integration announcements:

1\.  <a href="https://fantom.foundation/blog/fantom-collaborates-with-chainlink-to-integrate-chainlink-vrf/" target="_blank">Working Announcements</a>

These announce that work has begun on an integration, but the integration is not yet ready to be used. You will not find documentation on the integration after these announcements.

2\. <a href="https://www.binance.org/en/blog/chainlink-vrf-is-live-on-binance-smart-chain-bringing-verifiable-randomness-to-bsc-developers/" target="_blank">Integration Live Announcements</a>

These announce that an integration is live and ready to be used. You can find the contract addresses in our docs for <a href="https://docs.chain.link/docs/reference-contracts/" target="_blank">Price Feeds</a> and <a href="https://docs.chain.link/docs/vrf-contracts/" target="_blank">Chainlink VRF</a> respectively.

Often these announcements will posted by our integration partners.

## How many members does the team have?

The team is visible <a href="https://chain.link/team/" target="_blank">on our website</a>. We also encourage community contributions to our <a href="https://github.com/smartcontractkit/chainlink" target="_blank">Github repository</a>.

## Are you hiring?

We are always looking for talented and experienced individuals. Please visit <a href="https://careers.chain.link" target="_blank">our careers page</a>.

Resources:
*  <a href="https://careers.chain.link" target="_blank">Chainlink Careers</a>

# Running a node

## How do I set up a Chainlink node?

You can set up a node to run on a test network or the Ethereum mainnet right now. The node will not be able to participate in fulfilling service agreement requests yet, but will in the near future. However, it can be used to fulfill requests sent to your oracle contract address and you can add external adapters to it for extending its functionality.

Resources:
*  [Running a Chainlink Node](../running-a-chainlink-node/) 

## How much LINK to run a node?

You will be able to run a Chainlink node with 0 LINK, however, you will not be able to participate in requests that require a deposit until you’ve earned some LINK first.

Requesters may specify an amount of LINK that all nodes must deposit as a penalty fee in case the node doesn’t fulfill the request. However, since penalty fees are optional, not all requests will require it.

## Can I use a local Chainlink node with Ganache?

No. Ganache is a mock testnet and it doesn't work with Chainlink because of that. To use the features of the network, you need to deploy your contract on a real environment: one of the testnets or mainnets. The full list of supported environments can be found [here](../link-token-contracts/). 

## What are the hardware requirements for a Chainlink node?

The hardware requirements of the Chainlink node are very minimal to operate. It should run with 1 core and 1 GB of RAM, though you may want to up the RAM to 2 GB for better reliability. However, connectivity to an Ethereum client is required for communication with the blockchain. If you decide to run your own Ethereum client, you will want to run that on a separate machine. Hardware requirements of Ethereum clients may change over time.

Resources:
*  [Running a Chainlink Node](../running-a-chainlink-node/) 
*  <a href="https://github.com/smartcontractkit/chainlink/wiki/Development-Setup-Guide" target="_blank">Development Setup Guide</a>
*  <a href="https://ethereum.stackexchange.com/a/27369" target="_blank">StackExchange Answer</a>
*  <a href="https://ethereum.stackexchange.com/questions/tagged/hardware" target="_blank">All Ethereum Hardware Questions</a>

## Do I need to have access to APIs in order to provide data?

The Chainlink node can fulfill requests from open (unauthenticated) APIs out-of-the-box, without the need for [External Adapters](../external-adapters/) as long as you've added the [jobs in the Fulfilling Requests guide](../fulfilling-requests/#add-jobs-to-the-node). For these requests, requesters would supply the URL to the open API they wish each node to retrieve, and the Chainlink node will use its core adapters to fulfill the request.

If you would like to provide access to an API which requires authentication, you will need to create a job specific for that API, either with an external adapter or by using the parameters of the [HttpGet adapter](../adapters/#httpget).

Resources:
*  [Adapters](../adapters/#httpget)

##  Is there a list of external adapters available?

Currently, the community maintains lists of available external adapters.

Resources:
*  <a href="https://market.link/" target="_blank">Chainlink Market</a>
*  <a href="https://chainlinkadapters.com/" target="_blank">Chainlink Adapters</a>

## How many nodes are currently running?

The <a href="https://market.link/search/nodes" target="_blank">Chainlink Market</a> keeps a list of node operators registered with them across multiple networks.

Resources:
*  <a href="https://market.link/" target="_blank">Chainlink Market</a>
