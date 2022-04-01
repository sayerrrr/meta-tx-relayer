// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TestSelfDestruct {
    receive() external payable {
        selfdestruct(payable(msg.sender));
    }
}
