import {Keypair} from "@solana/web3.js"


const privateKey = [210, 158, 180, 28, 148, 115, 100, 87, 103, 205, 49, 169, 241, 120, 23, 143, 201, 255, 188, 252, 139, 54, 254, 106, 53, 210, 93, 161, 66, 52, 162, 80, 226, 182, 39, 225, 93, 86, 32, 218, 104, 70, 192, 162, 60, 159, 107, 26, 234, 211, 125, 55, 137, 153, 219, 155, 143, 6, 13, 17, 4, 236, 139, 2];
const keypair = Keypair.fromSecretKey(Buffer.from(privateKey))
console.log(keypair.publicKey.toBase58())
// GFzEse95rh1hkbXWyTijPtFJhyedYfK386UsiTJWv91j