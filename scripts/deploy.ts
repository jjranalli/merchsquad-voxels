import { ethers } from "hardhat"
import addresses from "../addresses.json"

// Set these before proceeding
const env = "mainnet"
const slicerId = 2 // The ID of the slicer that will be able to interact with this contract
const voxelAddress = "0xa58b5224e2FD94020cb2837231B2B0E4247301A6" // Cryptovoxel address

async function main() {
  console.log("deploying")

  const CONTRACT = await ethers.getContractFactory("MerchSquadVoxels")
  const contract = await CONTRACT.deploy(
    addresses[env]["ProductsModule"],
    slicerId,
    voxelAddress
  )
  await contract.deployed()

  console.log("deploying completed successfully! Address: " + contract.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
