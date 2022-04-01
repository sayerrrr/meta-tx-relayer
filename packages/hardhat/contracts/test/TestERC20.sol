// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockERC20 is ERC20 {
    constructor(uint256 initialSupply) ERC20("Mock", "MOCK") {
        _mint(msg.sender, initialSupply);
    }

    event SetBalance(address _address, uint256 _balance);

    function setBalance(address _address, uint256 _target) external {
        uint256 prevBalance = balanceOf(_address);
        emit SetBalance(_address, _target);
        if (_target > prevBalance) {
            // Mint tokens
            _mint(_address, _target - prevBalance);
        } else if (_target < prevBalance) {
            // Destroy tokens
            _burn(_address, prevBalance - _target);
        }
    }
}
