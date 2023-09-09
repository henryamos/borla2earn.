// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
contract DumpBin {
address public owner;
uint public currentDayIndex;
uint public totalWeight;
mapping(address => uint) public weight;
DumpBin() {
owner = msg.sender;
currentDayIndex = 1;
totalWeight = 0;
}
function update(uint _weight) external {
weight[msg.sender] += _weight;
totalWeight += _weight;
}
function getTotalWeight() external view returns (uint) {
return totalWeight;
}
function getWeight(address account) external view returns (uint) {
return weight[account];
}
}
