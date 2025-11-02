// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title BanditBase - Daily onchain message with social identity
/// @author @alidepok1
contract BanditBase {
    string public message;
    address public owner;
    uint256 public lastUpdated;
    string public identity;

    event MessageUpdated(address indexed updater, string newMessage, uint256 timestamp);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    constructor(string memory initialMessage, string memory socialHandle) {
        owner = msg.sender;
        message = initialMessage;
        identity = socialHandle;
        lastUpdated = block.timestamp;
        emit MessageUpdated(msg.sender, initialMessage, block.timestamp);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner, bro");
        _;
    }

    function updateMessage(string calldata newMessage) external onlyOwner {
        message = newMessage;
        lastUpdated = block.timestamp;
        emit MessageUpdated(msg.sender, newMessage, block.timestamp);
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "Zero address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    function getMessage() external view returns (string memory, uint256, string memory) {
        return (message, lastUpdated, identity);
    }
}

