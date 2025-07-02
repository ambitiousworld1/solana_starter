import { Commitment, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"
import wallet from "../Turbin3-wallet.json"
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";

// We're going to import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

// Mint address
const mint = new PublicKey("99kmQqg5Wxidd2L3khAtfeTLhzp3YzDgjZukVffuj2K6");

// Recipient address
const to = new PublicKey("HCR3xpRDEQvjZW9Z3m8RvsBczEXnNhGUjRNH4GwoatDU");
const token_decimals = 1_000_000; // Adjust this based on your token's decimals
(async () => {
    try {
        // Get the token account of the fromWallet address, and if it does not exist, create it
        const ata_from = await getOrCreateAssociatedTokenAccount(
            connection,
            keypair,
            mint,
            keypair.publicKey,
        );

        // Get the token account of the toWallet address, and if it does not exist, create it
        const ata_to = await getOrCreateAssociatedTokenAccount(
            connection,
            keypair,
            mint,
            to,
        );
        // Transfer the new token to the "toTokenAccount" we just created

        const tx = await transfer(
            connection,
            keypair,
            ata_from.address,
            ata_to.address,
            keypair.publicKey,
            100*token_decimals, // Adjust the amount as needed
        );
        console.log(tx);
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();