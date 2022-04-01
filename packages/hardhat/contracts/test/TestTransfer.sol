// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TestTransfer {
    function transfer(address payable _to) external payable {
        _to.transfer(msg.value);
    }
}
