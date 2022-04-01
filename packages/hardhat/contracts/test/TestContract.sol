// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TestOutOfGas {
    fallback() external payable {
        uint256 a = 1;
        while (true) {
            a++;
        }
    }
}
