import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { createSignerFromKeypair, signerIdentity, generateSigner, percentAmount } from "@metaplex-foundation/umi"
import { createNft, mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";

import wallet from "../Turbin3-wallet.json"
import base58 from "bs58";

const RPC_ENDPOINT = "https://api.devnet.solana.com";
const umi = createUmi(RPC_ENDPOINT);

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const myKeypairSigner = createSignerFromKeypair(umi, keypair);
umi.use(signerIdentity(myKeypairSigner));
umi.use(mplTokenMetadata())

const mint = generateSigner(umi);

(async () => {
     let tx = createNft(umi, {
        mint,
        name: "Penguin",
        symbol: "PNFT",
        uri: "https://gateway.irys.xyz/5NW3nU5S9bxEG5QU85bE2YTg7qDhcwdA67WEJuTncy8L",
        sellerFeeBasisPoints: percentAmount(5), 
     });
     let result = await tx.sendAndConfirm(umi);
     const signature = base58.encode(result.signature);
    
     console.log(`Succesfully Minted! Check out your TX here:\nhttps://explorer.solana.com/tx/${signature}?cluster=devnet`)
     //Succesfully Minted! Check out your TX here:
https://explorer.solana.com/tx/512MgeruHzyZZXNnAm5p9WSjayEZEkvC3MsQYq1qaN9Q9mYMAAaYeLyMh5DB58rcNgp9BFjiku8NArod4qWGhHzF?cluster=devnet
    console.log("Mint Address: ", mint.publicKey);
    //Mint Address:  DiRys2atFKvHcthyAaJGng7WZZ9ksiHRxQbz84RZ1uWR
})();
