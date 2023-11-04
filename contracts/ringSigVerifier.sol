// Taken from Fresh crypto lib: https://github.com/rdubois-crypto/FreshCryptoLib/blob/master/solidity/external/ECCMath.sol

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/Strings.sol";
import "./ec-solidity.sol";
import "./ECCMath.sol";

contract RingSigVerifier {
    // Curve parameters
    uint256 constant aa = 0;
    uint256 constant bb = 7;

    // Field size
    uint256 constant pp =
        0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F;

    // Base point (generator) G
    uint256 constant Gx =
        0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798;
    uint256 constant Gy =
        0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8;

    // Order of G
    uint256 constant nn =
        0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141;

    constructor() {}

    function verifyRingSignature(
        string memory message, // should be keccack256 hash of message
        uint256[] memory ring, // ring of public keys [pkX1, pkY1, pkX2, pkY2, ..., pkXn, pkYn]
        uint256[] memory responses,
        uint256 c
    ) public pure returns (bool) {
        // check if ring.length is even
        require(
            ring.length > 1 && ring.length % 2 == 0,
            "Ring length must be even and greater than 1"
        );

        // check if responses.length = ring.length / 2
        require(
            responses.length == ring.length / 2,
            "Responses length must be equal to ring length / 2"
        );

        // TODO: call api

        // compute strRing
        string memory strRing = formatRing(ring);

        // compute c1'
        uint256 lastComputedCp = computeC(
            strRing,
            message,
            responses[0],
            c,
            [ring[0], ring[1]]
        );

        // compute c2' to c(n-1)' (n = ring.lenth / 2)
        for (uint256 i = 2; i < ring.length - 2; i += 2) {
            lastComputedCp = computeC(
                strRing,
                message,
                responses[i / 2],
                lastComputedCp,
                [ring[i], ring[i + 1]]
            );
        }

        return // same as for i =  -> ring.length and then, return c == lastComputedCp
            c ==
            computeC(
                strRing,
                message,
                responses[responses.length - 1],
                lastComputedCp,
                [ring[ring.length - 2], ring[ring.length - 1]]
            );
    }

    function computeC(
        string memory strRing,
        string memory message,
        uint256 r,
        uint256 previousC,
        uint256[2] memory previousPubKey
    ) internal pure returns (uint256) {
        require(
            EllipticCurve.isOnCurve(
                previousPubKey[0],
                previousPubKey[1],
                aa,
                bb,
                pp
            ),
            "previousPubKey is not on curve"
        );
        // compute rG + previousPubKey * c
        // r * G
        (uint256 rGx, uint256 rGy) = EllipticCurve.ecMul(r, Gx, Gy, aa, pp);

        // previousC * previousPubKey
        (uint256 previousCpubKeyX, uint256 previousCpubKeyY) = EllipticCurve
            .ecMul(previousC, previousPubKey[0], previousPubKey[1], aa, pp);

        // r * G + previousC * previousPubKey
        (uint256 x, uint256 y) = EllipticCurve.ecAdd(
            rGx,
            rGy,
            previousCpubKeyX,
            previousCpubKeyY,
            aa,
            pp
        );

        // convert point to affine

        // ring + message + (rG + previousPubKey * c)
        bytes memory data = abi.encodePacked(
            string.concat(
                strRing,
                message,
                Strings.toString(x), // uint256(9955515929758664635576836987053099024683838556575823563212017955371396157685)),
                Strings.toString(y) // uint256(83823511917583193450688191130823431783071730688584821994994785850390237919571))
            )
        );

        return modulo(uint256(keccak256(data)), nn); // ok
        // return x;
    }

    function modulo(
        uint256 value,
        uint256 mod
    ) internal pure returns (uint256) {
        uint256 result = value % mod;
        if (result < 0) {
            result += mod;
        }
        return result;
    }

    function formatRing(
        uint256[] memory ring
    ) internal pure returns (string memory) {
        string memory strRing = "";
        for (uint256 i = 0; i < ring.length; i++) {
            strRing = string.concat(
                strRing,
                Strings.toString(ring[i])
            );
        }        
        return strRing;
    }
}
