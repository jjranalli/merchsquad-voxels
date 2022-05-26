import { ethers } from "hardhat"
import addresses from "../addresses.json"

// Set these before proceeding
const env = "mainnet"
const slicerId = 2 // The ID of the slicer that will be able to interact with this contract

// const env = "testnet"
// const slicerId = 31 // The ID of the slicer that will be able to interact with this contract

async function main() {
  // console.log("deploying AL")

  // const CONTRACT1 = await ethers.getContractFactory("MerchSquadVoxelsAL")
  // const contract1 = await CONTRACT1.deploy(
  //   addresses[env]["ProductsModule"],
  //   slicerId
  // )
  // await contract1.deployed()

  // console.log("deploying completed successfully! Address: " + contract1.address)

  console.log("deploying Gated")

  const CONTRACT2 = await ethers.getContractFactory("MerchSquadVoxelsGate")
  const contract2 = await CONTRACT2.deploy(
    addresses[env]["ProductsModule"],
    slicerId
  )
  await contract2.deployed()

  console.log("deploying completed successfully! Address: " + contract2.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
