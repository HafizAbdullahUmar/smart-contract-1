// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract firstContract {
    int256 public i = 5;

    function set(int256 _i) public {
        i = _i;
    }
}
