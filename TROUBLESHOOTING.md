# Troubleshooting Guide

## Common Issues and Solutions

### 1. Hardhat Node Fails to Start

**Error**: `FHEVM node failed to start`

**Solutions**:
- Ensure Docker is running
- Check if port 8545 is available
- Try: `npx hardhat node --reset`

### 2. Contract Deployment Fails

**Error**: `Contract deployment failed`

**Solutions**:
- Verify network configuration in `hardhat.config.ts`
- Check environment variables are set
- Ensure sufficient testnet funds for deployment
- Try deploying to localhost first

### 3. Frontend Connection Issues

**Error**: `Failed to connect to contract`

**Solutions**:
- Verify contract address in frontend config
- Check network selection in wallet
- Ensure ABI files are up to date
- Try refreshing the page

### 4. FHE Operations Fail

**Error**: `FHE operation failed`

**Solutions**:
- Verify FHEVM node is running
- Check contract has sufficient permissions
- Ensure input data is properly encrypted
- Try restarting the local node

### 5. Build Errors

**Error**: `Build failed`

**Solutions**:
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check TypeScript compilation errors
- Verify all dependencies are installed
- Try cleaning build artifacts: `npm run clean`

### 6. Test Failures

**Error**: `Tests are failing`

**Solutions**:
- Ensure local FHEVM node is running
- Check contract deployment before tests
- Verify test network configuration
- Run tests individually to isolate issues

## Getting Help

If you continue to experience issues:

1. Check the [FHEVM Documentation](https://docs.zama.ai/fhevm)
2. Review [Hardhat Documentation](https://hardhat.org)
3. Open an issue on [GitHub](https://github.com/YeddaWalsh/artifact-cipher-vault/issues)
4. Join the [Zama Discord](https://discord.gg/zama)

## Environment Information

When reporting issues, please include:

- Node.js version: `node -v`
- npm version: `npm -v`
- Hardhat version: `npx hardhat --version`
- Operating system and version
- Full error message and stack trace
