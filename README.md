# eth-tools

A collection of essential Ethereum development tools in your browser. Built with React and ethers.js, this web application provides commonly used utilities for Ethereum developers.

## Features

### ETH Unit Converter

Convert between different Ethereum units:

- Supports wei, kwei, mwei, gwei, szabo, finney, and ether

### String to Bytes32 Converter

Convert strings to bytes32 format:

- Automatically pads strings to 32 bytes

### Function Selector Generator

Generate function selectors for smart contract development:

- Input function signatures (e.g., "transfer(address,uint256)")
- Option to pad selector to 32 bytes with zeros

## Tech Stack

- React
- ethers.js - Ethereum library
- Chakra UI - Component library
- React Router - Navigation

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/alikonuk1/eth-tools.git
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production

## Dependencies

- @chakra-ui/react - UI components
- ethers - Ethereum library
- react-router-dom - Routing
- @vercel/analytics - Analytics
