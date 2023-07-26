## Proof_of_Stake
## Description
We were asked to generate 5 items collection.
We took 5 images and stored it in Pinata.cloud.
Then we deploy an ERC721 or ERC1155 to the Goerli Ethereum Testnet.
Then we showed the functioning of some functions:
Approve the NFTs to be transferred
Deposit the NFTs to the Bridge
Test balanceOf on Mumbai
## Getting Started
Download the zip file from the github and unzip it.
Run npm i to get all dependencies of the program.
deploy the contract and provide your wallet private key where required i.e. "PRIVATE_KEY= 'your wallet private key'". 
Run the following command to deploy the ERC721 contract to the Goerli Ethereum Testnet:
npx hardhat run scripts/deploy.js --network goerli.
## Testing
Connect to the Ethereum Goerli Testnet and wallet using the network address and private key.
Set up a connection to the Goerli Testnet using a provider like Alchemy or Infura.
Use the private key of your wallet to sign transactions and interact with the network.
Retrieve the deployed ERC721 contract on Ethereum using the contract's address.
Use the contract address to instantiate the ERC721 smart contract in your script.
Get the FXRoot contract instance by providing the contract ABI and address.
Use the contract ABI and address to create an instance of the FXRoot contract in your script.
Define the token IDs to transfer in the tokenIds array.
Prepare an array containing the token IDs of the NFTs you want to transfer.
Approve the NFTs for transfer by calling the setApprovalForAll function on the ERC721 contract.
Approve the FXRoot contract address as the operator for transferring the NFTs on your behalf.
Iterate over the token IDs and deposit each NFT to the FXRoot contract using the deposit function.
For each token ID in the tokenIds array, call the deposit function on the FXRoot contract.
Provide the ERC721 contract address, recipient wallet address on the Polygon Mumbai network, token ID, and any additional data required.
Wait for the transaction to be confirmed after each deposit.
After calling the deposit function, wait for the transaction to be confirmed on the Ethereum network before proceeding to the next deposit.
Once all NFTs are approved and deposited, output the balance of the recipient wallet on the Mumbai network.
Use the balanceOf function of the ERC721 contract to check the NFT balance of the recipient wallet on the Polygon Mumbai network.
## Authors
Manish kumar
## License
This project is licensed under the [MIT License].
