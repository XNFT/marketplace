// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

import './XNftMultipleToken.sol';

import "@openzeppelin/contracts/access/Ownable.sol";

contract XNftMultipleTokenFactory is Ownable {

    event XNftMultipleTokenCreated(address owner, string name, string symbol, string contractURI, string tokenURIPrefix);
    mapping(address => address[]) private newTokens;

    address[] private allTokens;

    constructor() public {
      transferOwnership(msg.sender);
    }

    function getAllTokens() external view returns (address[] memory) {
        return allTokens;
    }

    function getTokensFromAddress(address owner) external view returns(address[] memory) {
        return newTokens[owner];
    }

    function isExist(address token) internal view returns(bool) {
      bool exists = false;
      for (uint i = 0; i < allTokens.length; i++) {
        if (allTokens[i] == token) {
          exists = true;
          break;
        }
      }
      return exists;
    }

    function addTokenManually(address owner, address token) external onlyOwner{
      require(!isExist(token), "Token already exists");
      newTokens[owner].push(token);
      allTokens.push(token);
    }

    function createXNftMultipleToken(
      string memory name,
      string memory symbol,
      string memory contractURI,
      string memory tokenURIPrefix
    ) external returns (address _token) {
        XNftMultipleToken token = new XNftMultipleToken(name, symbol, msg.sender, contractURI, tokenURIPrefix);

        _token = address(token);

        newTokens[msg.sender].push(_token);
        allTokens.push(_token);

        emit XNftMultipleTokenCreated(msg.sender, name, symbol, contractURI, tokenURIPrefix);
    }
}

