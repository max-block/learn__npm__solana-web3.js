import {Keypair} from "@solana/web3.js"
// @ts-ignore
import bs58 from "bs58"


const base58PrivateKey = "5tRNQk3xevBYRcYqaFyNKe2NSENaQAWw3wdcr9MZd8PZKoCwdib2BpRXG6N9zTrSiSMWDwPoASbAHyqMxoBohxvL"
const keypair = Keypair.fromSecretKey(Buffer.from(bs58.decode(base58PrivateKey)))
console.log(keypair.publicKey.toBase58())
// 4NEquK8pDRgBfZu6y9nEyyQDEjNQZmMMZFLR16KAwGjJ
