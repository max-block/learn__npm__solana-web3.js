import {PublicKey} from "@solana/web3.js"


async function main() {
    const seed1 = "seed111"
    const seed2 = "seed22"
    const programId = new PublicKey("D8mKxaBrjSBDDB5mXBWvrVeT4Y8YsuFAjLnFBXEGueVP")


    const pda1 = await PublicKey.createProgramAddress([Buffer.from(seed1, "utf-8")], programId)
    console.log("pda1", pda1.toBase58())
    // pda1 3E3HXDXDQMaLgYNHy4rmPZZ9AReShZW2oybgVmSCR7GD


    // This func has a high chance to fail with such an error: throw new Error(`Invalid seeds, address must fall off the curve`);
    try {
        const pda2 = await PublicKey.createProgramAddress([Buffer.from(seed2, "utf-8")], programId)
        console.log(pda2.toBase58())
    } catch (err) {
        console.error("pda2 error", err.toString())
        // pda2 error Error: Invalid seeds, address must fall off the curve
    }


}

main().catch(err => console.error(err))