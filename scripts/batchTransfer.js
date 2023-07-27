const hre = require("hardhat");
const { ethers } = hre;
const { FXRootContractAbi } = require("../artifacts/FXRootContractAbi.js");

async function main() {
  // Set up connections to network and wallet
  const networkAddress =
    "https://eth-goerli.g.alchemy.com/v2/8WGUENAN28G7VW2TC5DHPFDSRQAUQ1TYZ5";
  const privateKey =
    "6b16f9c40a50b61e7cab952555082e1fa003926e30fbe50f84bbac0af0cb6a02";
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a wallet instance
  const wallet = new ethers.Wallet(privateKey, provider);

  // Get the signer instance
  const [signer] = await ethers.getSigners();

  // Retrieve the deployed ERC721 contract on Ethereum
  const ERC721Contract = await ethers.getContractFactory("MyNFTContract");
  const erc721 = await ERC721Contract.attach(
    "0x3439E67c5FE9B1c668fb897439903d6cA18112aD"
  );

  // Get FXRoot contract instance
  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  // TokenIds to transfer
  const tokenIds = [0, 1, 2, 3, 4];

  // Approve the nfts for transfer
  const approveTx = await erc721
    .connect(signer)
    .setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log("Approval Done");

  // Deposit the nfts to the FXRoot contracts
  for (let i = 0; i < tokenIds; i++) {
    const depositTx = await fxRoot
      .connect(signer)
      .deposit(erc721.address, wallet.address, tokenIds[i], "0x6566");

    // Wait for the deposit to be confirmed
    await depositTx.wait();
  }

  console.log("Deposited");

  // Test balanceOf
  const balance = await erc721.balanceOf(wallet.address);

  // Retrieve the balance of a recipient on Mumbai
  console.log(
    "Mumbai's Recieptant balance : ",
    wallet.address,
    "is    : ",
    balance.toString()
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
