import { expect } from "chai"
import { ethers } from "hardhat"
import { MerkleTree } from "merkletreejs"
import keccak256 from "keccak256"
import { MerchSquadVoxelsAL } from "../../typechain-types/MerchSquadVoxelsAL"
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
} from "../setup"

describe("{MSVoxelsAL}", () => {
  let slicerAddr: string
  let msvoxels: MerchSquadVoxelsAL
  let merkleTree: MerkleTree
  let slicerId: number

  it("MerchSquadVoxelsAL contract is deployed and initialized", async () => {
    const MSVOXELS = await ethers.getContractFactory("MerchSquadVoxelsAL")

    const allowedAddresses = [a1, a2]
    const leafNodes = allowedAddresses.map((addr) => keccak256(addr))
    merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
    const merkleRoot = merkleTree.getHexRoot()

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
    )) as MerchSquadVoxelsAL
    await msvoxels.deployed()

    await msvoxels._setMerkleRoot(1, merkleRoot)

    await createProduct(slicerId, slicerAddr, 1, 62, [], true, false, [], {
      externalAddress: msvoxels.address,
      checkFunctionSignature: isPurchaseAllowedSignature,
      execFunctionSignature: onProductPurchaseSignature,
      data: [],
      value: ethers.utils.parseEther("0"),
    })

    await sliceCore.safeTransferFrom(a0, msvoxels.address, tokenId, 10, [])
    await msvoxels.setTokenIdToProduct(1, sliceCore.address, [tokenId])
  })

  describe("isPurchaseAllowed", () => {
    it("Product #1 - Returns true if in allowlist, false if not", async () => {
      const proofA1 = merkleTree.getHexProof(keccak256(a1))
      const buyerCustomDataA1 = ethers.utils.defaultAbiCoder.encode(
        ["bytes32[]"],
        [proofA1]
      )
      const isAllowedA1 = await msvoxels.isPurchaseAllowed(
        slicerId,
        1,
        a1,
        1,
        [],
        buyerCustomDataA1
      )

      const proofA4 = merkleTree.getHexProof(keccak256(a4))
      const buyerCustomDataA4 = ethers.utils.defaultAbiCoder.encode(
        ["bytes32[]"],
        [proofA4]
      )
      const isAllowedA4 = await msvoxels.isPurchaseAllowed(
        slicerId,
        1,
        a4,
        1,
        [],
        buyerCustomDataA4
      )

      expect(isAllowedA1).to.be.equal(true)
      expect(isAllowedA4).to.be.equal(false)
    })
  })

  describe("onProductPurchase", () => {
    it("Product #1 - NFT transferred on purchase to a1", async () => {
      const proofA1 = merkleTree.getHexProof(keccak256(a1))
      const buyerCustomDataA1 = ethers.utils.defaultAbiCoder.encode(
        ["bytes32[]"],
        [proofA1]
      )
      const initBalance = await sliceCore.balanceOf(a1, slicerId)

      await expect(
        productsModule.payProducts(a1, [
          {
            slicerId,
            productId: 1,
            quantity: 1,
            currency: ethers.constants.AddressZero,
            buyerCustomData: buyerCustomDataA1,
          },
        ])
      ).to.not.be.reverted

      const finalBalance = await sliceCore.balanceOf(a1, slicerId)
      expect(finalBalance.sub(initBalance)).to.be.equal(1)
    })
  })

  describe("Reverts", () => {
    it("onProductPurchase - Not in allowlist", async () => {
      const proofA4 = merkleTree.getHexProof(keccak256(a4))
      const buyerCustomDataA4 = ethers.utils.defaultAbiCoder.encode(
        ["bytes32[]"],
        [proofA4]
      )

      await expect(
        productsModule.payProducts(a4, [
          {
            slicerId,
            productId: 1,
            quantity: 1,
            currency: ethers.constants.AddressZero,
            buyerCustomData: buyerCustomDataA4,
          },
        ])
      ).to.be.reverted
    })

    it("onProductPurchase - Wrong proof", async () => {
      const proofA1 = merkleTree.getHexProof(keccak256(a1))
      const buyerCustomDataA1 = ethers.utils.defaultAbiCoder.encode(
        ["bytes32[]"],
        [proofA1]
      )

      await expect(
        productsModule.payProducts(a2, [
          {
            slicerId,
            productId: 1,
            quantity: 1,
            currency: ethers.constants.AddressZero,
            buyerCustomData: buyerCustomDataA1,
          },
        ])
      ).to.be.reverted
    })
  })

  it("Only contract owner can set Merkle root", async () => {
    const bytes32String = ethers.utils.formatBytes32String("asd")
    await expect(msvoxels.connect(addr1)._setMerkleRoot(5, bytes32String)).to.be
      .reverted
  })
})
