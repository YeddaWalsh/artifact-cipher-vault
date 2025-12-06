# Artifact Cipher Vault

**🚀 Live Demo**: [https://artifact-cipher-vault-xvfp.vercel.app/](https://artifact-cipher-vault-xvfp.vercel.app/)  
**📹 Demo Video**: [https://github.com/YeddaWalsh/artifact-cipher-vault/blob/main/artifact.mp4](https://github.com/YeddaWalsh/artifact-cipher-vault/blob/main/artifact.mp4)

A secure encrypted voting system for artifact transfer approvals using Fully Homomorphic Encryption (FHE) via the FHEVM protocol by Zama. This system enables confidential voting on artifact transfer requests while protecting voter privacy and preventing responsibility exposure during approval disputes.

## Quick Start

For detailed instructions see:
[FHEVM Hardhat Quick Start Tutorial](https://docs.zama.ai/protocol/solidity-guides/getting-started/quick-start-tutorial)

### Prerequisites

- **Node.js**: Version 20 or higher
- **npm or yarn/pnpm**: Package manager

### Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up environment variables**

   ```bash
   npx hardhat vars set MNEMONIC

   # Set your Infura API key for network access
   npx hardhat vars set INFURA_API_KEY

   # Optional: Set Etherscan API key for contract verification
   npx hardhat vars set ETHERSCAN_API_KEY
   ```

3. **Compile and test**

   ```bash
   npm run compile
   npm run test
   ```

4. **Deploy to local network**

   ```bash
   # Start a local FHEVM-ready node
   npx hardhat node
   # Deploy to local network
   npx hardhat deploy --network localhost
   ```

5. **Deploy to Sepolia Testnet**

   ```bash
   # Deploy to Sepolia
   npx hardhat deploy --network sepolia
   # Verify contract on Etherscan
   npx hardhat verify --network sepolia <CONTRACT_ADDRESS>
   ```

6. **Test on Sepolia Testnet**

   ```bash
   # Once deployed, you can run a simple test on Sepolia.
   npx hardhat test --network sepolia
   ```

7. **Run the Frontend**

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

   The application features:
   - **Secure voting interface** with encrypted ballot submission
   - **Privacy-first design** with FHE encryption
   - **RainbowKit wallet integration** with localhost support
   - **Real-time vote tallying** with homomorphic operations

8. **Interact with Deployed Contracts**

   ```bash
   # FHECounter contract interaction
   npx hardhat --network localhost task:increment --value 5
   npx hardhat --network localhost task:decrement --value 2
   npx hardhat --network localhost task:decrypt-count
   npx hardhat --network localhost task:reset

   # Artifact voting system
   # Create a transfer request
   npx hardhat --network localhost task:create-request --artifact-name "Ancient Artifact" --description "Valuable historical piece"

   # Submit encrypted vote
   npx hardhat --network localhost task:submit-vote --request-id 1 --vote yes

   # Decrypt results
   npx hardhat --network localhost task:decrypt-results --request-id 1
   ```

## 📁 Project Structure

```
artifact-cipher-vault/
├── contracts/                      # Smart contract source files
│   └── EncryptedArtifactVoting.sol # Main voting contract with FHE
├── deploy/                         # Deployment scripts
├── tasks/                          # Hardhat custom tasks
├── frontend/                       # Next.js frontend application
│   ├── components/                 # React components
│   │   ├── AdminDecryptResults.tsx # Admin result decryption
│   │   ├── CreateTransferRequest.tsx # Request creation interface
│   │   ├── TransferRequestList.tsx # Request listing and voting
│   │   └── VoteOnRequest.tsx       # Voting interface
│   ├── hooks/                      # Custom React hooks
│   │   ├── useArtifactVoting.ts    # Contract interaction hooks
│   │   └── useVotingWithFHE.ts     # FHE encryption operations
│   ├── abi/                        # Generated contract ABIs
│   └── public/                     # Static assets
├── hardhat.config.ts               # Hardhat configuration
└── package.json                    # Dependencies and scripts
```

## 🎯 Features

- **Privacy-Preserving Voting**: Vote contents are encrypted using FHE before submission
- **Homomorphic Tallying**: Vote counts computed on encrypted data without decryption
- **Admin-Only Decryption**: Only authorized administrators can reveal final results
- **Access Control**: Only authorized voters can participate in specific requests
- **One-Vote-Per-Person**: Prevents double voting and ensures fairness
- **Real-time Updates**: Live vote status and request tracking
- **Multi-Network Support**: Works on localhost, Sepolia, and mainnet

## 🔐 FHE Operations

The system uses FHE for:
- **Encrypted Vote Storage**: Individual votes are stored encrypted on-chain
- **Homomorphic Vote Counting**: Tally computation without decrypting individual votes
- **Selective Result Decryption**: Only admins can decrypt final voting outcomes
- **Privacy Protection**: Voters' choices remain confidential during the voting process

## 🚀 Usage

### Frontend User Flow

1. **Connect Wallet**: Use RainbowKit wallet to connect to the application
2. **Create Transfer Request** (Admin only): Submit artifact details with authorized voters
3. **Vote on Requests**: Authorized voters can submit encrypted Yes/No votes
4. **View Results**: See real-time encrypted vote tallies
5. **Decrypt Results** (Admin only): Reveal final voting outcomes

### Contract Functions

- `createTransferRequest()`: Admin creates artifact transfer request with authorized voters
- `submitEncryptedVote()`: Authorized voters submit FHE-encrypted votes
- `finalizeResults()`: Admin decrypts and finalizes voting results
- `getEncryptedVoteCounts()`: Admin retrieves encrypted tallies
- `hasVoted()`: Check if address has voted on specific request
- `isAuthorizedVoter()`: Verify voter authorization for requests

## 📜 Available Scripts

### Backend (Hardhat) Scripts

| Script             | Description              |
| ------------------ | ------------------------ |
| `npm run compile`  | Compile all contracts    |
| `npm run test`     | Run all tests            |
| `npm run coverage` | Generate coverage report |
| `npm run lint`     | Run linting checks       |
| `npm run clean`    | Clean build artifacts    |

### Frontend Scripts

| Script             | Description              |
| ------------------ | ------------------------ |
| `npm run dev`      | Start development server |
| `npm run build`    | Build for production     |
| `npm run start`    | Start production server  |
| `npm run lint`     | Run linting checks       |

## 📚 Documentation

- [FHEVM Documentation](https://docs.zama.ai/fhevm)
- [FHEVM Hardhat Setup Guide](https://docs.zama.ai/protocol/solidity-guides/getting-started/setup)
- [FHEVM Testing Guide](https://docs.zama.ai/protocol/solidity-guides/development-guide/hardhat/write_test)
- [FHEVM Hardhat Plugin](https://docs.zama.ai/protocol/solidity-guides/development-guide/hardhat)
- [RainbowKit Documentation](https://www.rainbowkit.com/)

## 📄 License

This project is licensed under the BSD-3-Clause-Clear License. See the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/zama-ai/fhevm/issues)
- **Documentation**: [FHEVM Docs](https://docs.zama.ai)
- **Community**: [Zama Discord](https://discord.gg/zama)

---

**Built with ❤️ using Zama's FHEVM technology**
