import {PublicKey} from "@solana/web3.js"


async function main() {
    const seed1 = "seed111"
    const seed2 = "seed2211"
    const programId = new PublicKey("D8mKxaBrjSBDDB5mXBWvrVeT4Y8YsuFAjLnFBXEGueVP")

    const pda1 = await PublicKey.createProgramAddress([Buffer.from(seed1, "utf-8")], programId)
    console.log(pda1.toBase58())


    const pda2 = await PublicKey.createProgramAddress([Buffer.from(seed2, "utf-8")], programId)
    console.log(pda2.toBase58())


}

main().catch(err => console.error(err))