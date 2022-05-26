import { expect } from "chai"
import { ethers } from "hardhat"
import { MerkleTree } from "merkletreejs"
import keccak256 from "keccak256"
import { MerchSquadVoxelsGate } from "../../typechain-types/MerchSquadVoxelsGate"
import { createSlicer, createProduct } from "../../utils"
import {
  a0,
  a1,
  a2,
  a3,
  a4,
  addr1,
  isPurchaseAllowedSignature,
  onProductPurchaseSignature,
  productsModule,
  sliceCore,
  slx,
} from "../setup"
import { SLXAddress } from "../../utils/deployJB/deployJB"

describe("{MSVoxelsGate}", () => {
  let slicerAddr: string
  let msvoxels: MerchSquadVoxelsGate
  let merkleTree: MerkleTree
  let slicerId: number

  it("MerchSquadVoxelsGate contract is deployed and initialized", async () => {
    const MSVOXELS = await ethers.getContractFactory("MerchSquadVoxelsGate")

    const { slicerAddress, tokenId } = await createSlicer(
      [
        { account: a0, shares: 90 },
        { account: a1, shares: 10 },
      ],
      20,
      0,
      0,
      [],
      false
    )
    slicerAddr = slicerAddress
    slicerId = tokenId

    msvoxels = (await MSVOXELS.deploy(
      productsModule.address,
      slicerId
    )) as MerchSquadVoxelsGate
    await msvoxels.deployed()

    await msvoxels._setGate(1, SLXAddress, 10)

    await createProduct(slicerId, slicerAddr, 1, 62, [], true, false, [], {
      externalAddress: msvoxels.address,
      checkFunctionSignature: isPurchaseAllowedSignature,
      execFunctionSignature: onProductPurchaseSignature,
      data: [],
      value: ethers.utils.parseEther("0"),
    })

    await slx.transfer(a1, 10)
  })

  describe("isPurchaseAllowed", () => {
    it("Product #1 - Returns true if allowed, false if not", async () => {
      const isAllowedA1 = await msvoxels.isPurchaseAllowed(
        slicerId,
        1,
        a1,
        1,
        [],
        []
      )

      const isAllowedA4 = await msvoxels.isPurchaseAllowed(
        slicerId,
        1,
        a4,
        1,
        [],
        []
      )

      expect(isAllowedA1).to.be.equal(true)
      expect(isAllowedA4).to.be.equal(false)
    })
  })

  describe("onProductPurchase", () => {
    it("Product #1 - NFT transferred on purchase to a1", async () => {
      await expect(
        productsModule.payProducts(a1, [
          {
            slicerId,
            productId: 1,
            quantity: 1,
            currency: ethers.constants.AddressZero,
            buyerCustomData: [],
          },
        ])
      ).to.not.be.reverted
    })
  })

  describe("Reverts", () => {
    it("onProductPurchase - Not allowed", async () => {
      await expect(
        productsModule.payProducts(a4, [
          {
            slicerId,
            productId: 1,
            quantity: 1,
            currency: ethers.constants.AddressZero,
            buyerCustomData: "",
          },
        ])
      ).to.be.reverted
    })
  })

  it("Only contract owner can set Merkle root", async () => {
    await expect(msvoxels.connect(addr1)._setGate(1, SLXAddress, 20)).to.be
      .reverted
  })
})
