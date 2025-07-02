import wallet from "../Turbin3-wallet.json"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { 
    createMetadataAccountV3, 
    CreateMetadataAccountV3InstructionAccounts, 
    CreateMetadataAccountV3InstructionArgs,
    DataV2Args
} from "@metaplex-foundation/mpl-token-metadata";
import { createSignerFromKeypair, signerIdentity, publicKey } from "@metaplex-foundation/umi";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
import { sign } from "crypto";
// Define our Mint address
const mint = publicKey("99kmQqg5Wxidd2L3khAtfeTLhzp3YzDgjZukVffuj2K6")

// Create a UMI connection
const umi = createUmi('https://api.devnet.solana.com');
const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);
umi.use(signerIdentity(createSignerFromKeypair(umi, keypair)));

(async () => {
    try {
        // Start here
        let accounts: CreateMetadataAccountV3InstructionAccounts = {
            mint,
            mintAuthority: signer,
        }
        let data: DataV2Args = {
            name: "resiquents",
            symbol: "hehe",
            uri: "",
            sellerFeeBasisPoints: 0, // 5% royalty
            creators: null, // No creators for this example
            collection: null, // No collection for this example
            uses: null, // No uses for this example
        }

        let args: CreateMetadataAccountV3InstructionArgs = {
            data : data,
            isMutable: true, // Set to true if you want to allow updates
            collectionDetails: null, // No collection details for this example
        }

        let tx = createMetadataAccountV3(
            umi,
            {
                ...accounts,
                ...args
            }
        )

        let result = await tx.sendAndConfirm(umi);
        console.log(`Metadata account created successfully! Transaction signature: ${bs58.encode(result.signature)}`);     

    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();
