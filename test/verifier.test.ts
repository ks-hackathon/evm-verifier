import { BigNumberish } from "ethers";
import { keccak256 } from "js-sha3";
import { ethers } from "hardhat";

const { expect } = require("chai");



describe("evm-verifier", function () {
  it("Verify a ring signature", async function () {
    // link libraries
    const contractFactory = await ethers.getContractFactory("RingSigVerifier");

    // deploy SigVerifier contract
    const SigVerifier = await contractFactory.deploy();

    const message = keccak256("0x1234");

    const ring_: BigNumberish[] = [
      65635616549041115910492749811099163290387315428114550455346908809100510426782n,
      30888767950022954707871982847285169392037268134002841607619046758134896439539n,

      17802478730519249780788538270152217577336790629015484092974373333040735361262n, // signer x
      110805466507645309622537072686607773711775246693195290783795807276441077425123n, // signer y

      26978617571988867303429540461406656496036492562554075931365823092839011889373n,
      50038004826647663184375237364755049221543971914508636411038605315417494040790n,
    ];

    const responses: BigNumberish[] = [
      22690077812556347587009693811446478036136217075464236252180585051364875707030n,
      5621305532745402930229479851982823671512795210016357123771483703254416427688n,
      98600379402372017199488974483677600087088609136422724676758745818385189159269n
    ];

    const c: BigNumberish = 49760724744384810088281631585793195098465680695627794784376962871766106822510n;

    // console.log("message: ", message);
    // console.log("c: ", c);
    // console.log("ring: ", ring_);
    // console.log("responses: ", responses);

    expect(await SigVerifier.verifyRingSignature(message, ring_, responses, c)).to.equal(true);
  });
});