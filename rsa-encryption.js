const fs = require("fs");
const crypto = require("crypto");

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
    // The length of our RSA keys is 3072 bits
    modulusLength: 3072
});

// console.log(publicKey.export({
//     type: "pkcs1",
//     format: "pem",
// }));

// console.log(privateKey.export({
//     type: "pkcs1",
//     format: "pem",
// }));

const bankAcccNo = '123456789';

const encryptedData = crypto.publicEncrypt(
    {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha512",
    },
    Buffer.from(bankAcccNo, 'utf-8')
);

console.log("Encrypted Bank Acc No.", encryptedData.toString("base64"));

const decryptedData = crypto.privateDecrypt(
    {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha512",
    },
    encryptedData
)

console.log("\n\nBecrypt Bank Acc No.", decryptedData.toString());