# Obsidian

A Reddit/X-style dApp for decentralized discussions using .dot domains, built with Next.js + Tailwind + shadcn/ui.

## Features

- Feed of recent threads across all domains
- Domain-specific thread lists
- Thread view with nested comments
- DAO proposal management system
- Dark/light mode
- Integration with Substrate (Ink! contracts)
- ZK login capabilities (Sismo/Semaphore)
- SBT checks for access control
- IPFS integration for content storage

## Project Structure

- `src/app/page.tsx`: Feed of recent threads across all domains
- `src/app/[domain]/page.tsx`: Thread list for a specific .dot domain
- `src/app/[domain]/post/[id]/page.tsx`: Single thread with comments
- `src/app/[domain]/dao/page.tsx`: DAO governance interface
- `src/components/`: Reusable UI components
- `src/lib/substrate.ts`: Substrate API integration
- `src/lib/zk.ts`: ZK proof verification helpers
- `src/lib/ipfs.ts`: IPFS utilities
- `src/lib/sbt.ts`: SBT permission checks
- `src/lib/data.ts`: Sample data for demo purposes

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Polkadot{.js} browser extension (for wallet connection)

### Installation

```bash
# Clone the repository
git clone https://github.com/YourUsername/Obsidian.git
cd Obsidian

# Install dependencies
npm install --legacy-peer-deps

# Start the development server
npm run dev
```

The application will be available at http://localhost:3000.

## Tech Stack

- **Next.js**: React framework with App Router
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Re-usable UI components
- **Polkadot.js**: API for Substrate blockchain interaction
- **IPFS** (mock): Decentralized storage
- **ZK** (mock): Zero knowledge proof verification
- **SBT** (mock): Soul Bound Token verification

## Future Enhancements

- Real blockchain integration with Substrate
- Actual ZK proof generation and verification
- Full IPFS integration for content storage
- Enhanced DAO features (governance, voting)
- Mobile optimization
- User profiles and reputation system

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
