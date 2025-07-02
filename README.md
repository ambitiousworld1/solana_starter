# Solana Starter Project

This repository contains the implementation of the **1st assignment** for the Q3 2025 Builder Program.

## ✅ Completed Files in Assignment 1

The following TypeScript files were completed as part of Assignment 1:

- `spl_init.ts` – Initializes the Solana wallet and connection  
- `spl_mint.ts` – Mints new SPL tokens  
- `spl_metadata.ts` – Adds metadata to SPL tokens  
- `spl_transfer.ts` – Transfers SPL tokens between accounts

## 📁 Folder Structure
```
ts/
├── cluster1/
│ ├── spl_init.ts
│ ├── spl_mint.ts
│ ├── spl_metadata.ts
│ └── spl_transfer.ts
├── package.json
└── Turbin3-wallet.json
```

## 🛠️ Requirements

- Solana CLI 
- Node.js 
- TypeScript 
- @solana/web3.js 
- @solana/spl-token 

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
   yarn ts-node ts/cluster1/spl_init.ts
   ```
