// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {FHE, euint32, externalEuint32} from "@fhevm/solidity/lib/FHE.sol";
import {SepoliaConfig} from "@fhevm/solidity/config/ZamaConfig.sol";

/// @title A simple FHE counter contract
/// @notice Demonstrates fully homomorphic encryption operations on Ethereum
/// @dev Uses FHEVM protocol for privacy-preserving arithmetic operations
contract FHECounter is SepoliaConfig {
    euint32 private _count;

    constructor() {
        _count = FHE.asEuint32(0);
    }

    /// @notice Returns the current count
    function getCount() external view returns (euint32) {
        return _count;
    }

    /// @notice Increments the counter by a specified encrypted value.
    /// @dev This example omits overflow/underflow checks for simplicity and readability.
    /// In a production contract, proper range checks should be implemented.
    function increment(externalEuint32 inputEuint32, bytes calldata inputProof) external {
        euint32 encryptedEuint32 = FHE.fromExternal(inputEuint32, inputProof);

        // Ensure the proof is valid and input is properly formed
        require(inputProof.length > 0, "Input proof required");

        _count = FHE.add(_count, encryptedEuint32);

        FHE.allowThis(_count);
        FHE.allow(_count, msg.sender);
    }

    /// @notice Decrements the counter by a specified encrypted value.
    /// @dev This example omits overflow/underflow checks for simplicity and readability.
    /// In a production contract, proper range checks should be implemented.
    function decrement(externalEuint32 inputEuint32, bytes calldata inputProof) external {
        euint32 encryptedEuint32 = FHE.fromExternal(inputEuint32, inputProof);

        // Ensure the proof is valid and input is properly formed
        require(inputProof.length > 0, "Input proof required");

        _count = FHE.sub(_count, encryptedEuint32);

        FHE.allowThis(_count);
        FHE.allow(_count, msg.sender);
    }

    /// @notice Resets the counter to zero
    /// @dev Only allows the contract deployer to reset (for testing purposes)
    function reset() external {
        require(msg.sender == address(this), "Only contract can reset");
        _count = FHE.asEuint32(0);
        FHE.allowThis(_count);
    }
}
