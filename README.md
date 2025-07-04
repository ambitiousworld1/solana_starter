# Solana Starter Project

A Solana Starter project for Q3 2025 Builder Program that demonstrates creating, minting, and transferring SPL tokens and NFTs using TypeScript, UMI, and Metaplex libraries.

## ✅ Completed Files 

The following TypeScript files were completed as part of Assignment 1:

- `spl_init.ts` – Initializes the Solana wallet and connection  
- `spl_mint.ts` – Mints new SPL tokens  
- `spl_metadata.ts` – Adds metadata to SPL tokens  
- `spl_transfer.ts` – Transfers SPL tokens between accounts

### 🔥 Bonus NFT Files Added
The following NFT-related scripts were added to enhance functionality:

- `nft_image.ts` – Uploads an image to Irys and returns the image URI  
- `nft_metadata.ts` – Creates and uploads metadata JSON for the NFT  
- `nft_mint.ts` – Mints an NFT using the uploaded metadata URI  

## 📁 Folder Structure
```
ts/
├── cluster1/
│ ├── spl_init.ts
│ ├── spl_mint.ts
│ ├── spl_metadata.ts
│ ├── spl_transfer.ts
│ ├── nft_image.ts
│ ├── nft_metadata.ts
│ └── nft_mint.ts
├── Turbin3-wallet.json
└── package.json
```

## 🛠️ Requirements

- Solana CLI  
- Node.js  
- TypeScript  
- `@solana/web3.js`  
- `@solana/spl-token`  
- `@metaplex-foundation/umi`  
- `@metaplex-foundation/umi-uploader-irys`  
- `@metaplex-foundation/mpl-token-metadata`  
- `bs58`


## 🚀 How to Run

1. Install dependencies:

   ```bash
   yarn install
    ```

2. Compile TypeScript files (if using tsc):

   ```bash
   yarn tsc
   ```

3. Run a specific TypeScript file using:

  ```bash
   yarn spl_init.ts
yarn spl_mint.ts
yarn spl_metadata.ts
yarn spl_transfer.ts
yarn nft_image.ts
yarn nft_metadata.ts
yarn nft_mint.ts
   ```
📌 Notes
Make sure your wallet is correctly loaded in Turbin3-wallet.json.

Update image path (cluster1/pengu.png) and metadata accordingly.

Ensure you are connected to the Solana Devnet for all transactions.
