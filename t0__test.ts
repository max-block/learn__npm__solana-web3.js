import {Connection} from "@solana/web3.js"

async function main() {
    const conn = new Connection("http://localhost:8899")
    const res = await conn.getMinimumBalanceForRentExemption(100);
    console.log(res)

}

main().then(() => process.exit()).catch(err => console.error(err))