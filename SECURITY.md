# Security Policy

## Supported Versions

We actively support the following versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly.

### How to Report

1. **Do not create public issues** for security vulnerabilities
2. Email security reports to: security@artifact-cipher.dev
3. Include detailed information about the vulnerability
4. Allow reasonable time for response and fix

### What to Include

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fixes (if any)

### Response Timeline

- **Initial Response**: Within 48 hours
- **Vulnerability Assessment**: Within 7 days
- **Fix Development**: Within 30 days (depending on severity)
- **Public Disclosure**: After fix is deployed and tested

## Security Considerations

### FHE Implementation

This project uses Fully Homomorphic Encryption (FHE) to ensure:

- **Vote Privacy**: Individual votes remain encrypted during tallying
- **Data Integrity**: Encrypted data cannot be tampered with
- **Zero-Knowledge**: Results are verified without revealing individual votes

### Smart Contract Security

- **Access Control**: Only authorized users can perform sensitive operations
- **Input Validation**: All inputs are validated before processing
- **Reentrancy Protection**: Contracts are protected against reentrancy attacks
- **Gas Optimization**: Efficient operations to minimize attack surface

### Frontend Security

- **Wallet Security**: Secure wallet integration with user consent
- **Data Sanitization**: All user inputs are sanitized
- **HTTPS Only**: All communications use secure protocols
- **Dependency Updates**: Regular security updates for dependencies

## Responsible Disclosure

We kindly ask security researchers to:

- Give us reasonable time to fix issues before public disclosure
- Avoid accessing or modifying user data
- Test only on your own systems
- Not perform DoS attacks or spam our systems

## Recognition

We appreciate security researchers who help keep our users safe. With your permission, we'll acknowledge your contribution in our security acknowledgments.

## Contact

For security-related questions or concerns:
- Email: security@artifact-cipher.dev
- Response Time: Within 24 hours

Thank you for helping keep Artifact Cipher Vault secure! 🛡️
