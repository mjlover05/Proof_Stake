const { ethers } = require("hardhat");

async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFTContract");
  const myNFT = await MyNFT.attach("0x3439E67c5FE9B1c668fb897439903d6cA18112aD");

  // Generate an array of recipient addresses
  const recipients = [
    "0xBeEFE0874FFAC2908881a165082c5047165Ca81e",
    "0x6478d6F8f95C9b47157Be453c77Ea1762c30413d",
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "0xBcd4042DE499D14e55001CcbB24a551F3b954096",
    "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
    // Add more recipient addresses as needed
  ];

  // Generate an array of token URIs corresponding to the recipients
  const tokenURIs = [
    "QmSGJKiXfifsnqtAkqU7kFdhjZpYuqZheBxRQDHm1c9nnF",
    "QmTdgKuG4pnFXeRd9YeENkLFKqqxdUzTEJRUSpqvz5fijF",
    "QmPyuD7FTdQ3Y1FaQqRGa5NBTKvEuSEeM6WdVZbXuKSyNh",
    "QmXSCmNG8rJoRw4WJBS7e6UBiJgXdx6A6AtF6Xi3N2pXv4",
    "QmSuWGo5AkAh18FhEvkB9B83ATrU3c6UVc4NBTx6x1Boo6",
    // Add more token URIs as needed
  ];

  // Batch mint NFTs
  const batchMint = await myNFT.batchMint(recipients, tokenURIs);

  // Wait for the transaction to be mined
  await batchMint.wait();

  console.log("Batch Minting Completed!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
