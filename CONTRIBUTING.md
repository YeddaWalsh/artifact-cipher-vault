# Contributing to Artifact Cipher Vault

Thank you for your interest in contributing to the Artifact Cipher Vault project! This document provides guidelines and information for contributors.

## Code of Conduct

This project follows a code of conduct to ensure a welcoming environment for all contributors.

## How to Contribute

### 1. Development Setup

Follow the [development setup guide](README.md#quick-start) to get your environment ready.

### 2. Finding Issues

- Check existing [GitHub issues](https://github.com/YeddaWalsh/artifact-cipher-vault/issues) for bugs or feature requests
- Create a new issue if your problem isn't already reported
- Use issue templates when available

### 3. Making Changes

1. **Fork the repository** on GitHub
2. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following the coding standards
4. **Test your changes** thoroughly
5. **Commit your changes** using conventional commits:
   ```bash
   git commit -m "feat: add new feature"
   ```
6. **Push to your fork** and **create a pull request**

### 4. Pull Request Process

- Ensure your PR description clearly describes the changes
- Reference any related issues
- Include screenshots for UI changes
- Ensure all tests pass
- Request review from maintainers

## Coding Standards

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful variable and function names

### Solidity

- Follow Solidity style guide
- Use Solhint for linting
- Include NatSpec documentation
- Write comprehensive tests

### Git Commits

This project uses [Conventional Commits](https://conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

Types:
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Testing
- `chore`: Maintenance

### Testing

- Write tests for all new features
- Ensure existing tests still pass
- Include both unit and integration tests
- Test on multiple networks when applicable

## Project Structure

```
artifact-cipher-vault/
├── contracts/          # Smart contract source files
├── frontend/           # Next.js frontend application
├── tasks/              # Hardhat custom tasks
├── test/              # Test files
├── deploy/            # Deployment scripts
├── docs/              # Documentation
└── .github/           # GitHub Actions workflows
```

## Security

- Report security vulnerabilities privately
- Do not commit sensitive information
- Follow secure coding practices
- Test security-critical functionality thoroughly

## License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project.

## Getting Help

- Check the [README](README.md) for setup instructions
- Review the [troubleshooting guide](TROUBLESHOOTING.md)
- Join our community discussions
- Contact maintainers for questions

Thank you for contributing to Artifact Cipher Vault! 🚀
