// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./extensions/Purchasable/Gated.sol";

contract MerchSquadVoxelsGate is Gated {
    constructor(address productsModuleAddress_, uint256 slicerId_)
        SlicerPurchasable(productsModuleAddress_, slicerId_)
    {}
}
