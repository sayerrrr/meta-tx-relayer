// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Bytes library to concat and transform
// bytes arrays
library Bytes {
    // Concadenates two bytes array
    // Author: Gonçalo Sá <goncalo.sa@consensys.net>
    function concat(bytes memory _preBytes, bytes memory _postBytes) internal pure returns (bytes memory) {
        return abi.encodePacked(_preBytes, _postBytes);
    }

    // Concatenates a bytes array and a bytes1
    function concat(bytes memory _a, bytes1 _b) internal pure returns (bytes memory _out) {
        return concat(_a, abi.encodePacked(_b));
    }

    // Concatenates 6 bytes arrays
    function concat(
        bytes memory _a,
        bytes memory _b,
        bytes memory _c,
        bytes memory _d,
        bytes memory _e,
        bytes memory _f
    ) internal pure returns (bytes memory) {
        return abi.encodePacked(_a, _b, _c, _d, _e, _f);
    }

    // Transforms a bytes1 into bytes
    function toBytes(bytes1 _a) internal pure returns (bytes memory) {
        return abi.encodePacked(_a);
    }

    // Transform a uint256 into bytes (last 8 bits)
    function toBytes1(uint256 _a) internal pure returns (bytes1 c) {
        assembly {
            c := shl(248, _a)
        }
    }

    // Adds a bytes1 and the last 8 bits of a uint256
    function plus(bytes1 _a, uint256 _b) internal pure returns (bytes1 c) {
        c = toBytes1(_b);
        assembly {
            c := add(_a, c)
        }
    }

    // Transforms a bytes into an array
    // it fails if _a has more than 20 bytes
    function toAddress(bytes memory _a) internal pure returns (address payable b) {
        require(_a.length <= 20);
        assembly {
            b := shr(mul(sub(32, mload(_a)), 8), mload(add(_a, 32)))
        }
    }

    // Returns the most significant bit of a given uint256
    function mostSignificantBit(uint256 x) internal pure returns (uint256) {
        uint8 o = 0;
        uint8 h = 255;

        while (h > o) {
            uint8 m = uint8((uint16(o) + uint16(h)) >> 1);
            uint256 t = x >> m;
            if (t == 0) h = m - 1;
            else if (t > 1) o = m + 1;
            else return m;
        }

        return h;
    }

    // Shrinks a given address to the minimal representation in a bytes array
    function shrink(address _a) internal pure returns (bytes memory b) {
        uint256 abits = mostSignificantBit(uint256(uint160(_a))) + 1;
        uint256 abytes = abits / 8 + (abits % 8 == 0 ? 0 : 1);

        assembly {
            b := 0x0
            mstore(0x0, abytes)
            mstore(0x20, shl(mul(sub(32, abytes), 8), _a))
        }
    }
}
