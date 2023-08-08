//Advanced Encryption Standard (AES): AES is a symmetric encryption algorithm that is considered to be very secure. It is used by many different organizations, including the US government.
'use strict';
const CryptoJS = require('crypto-js');

module.exports = {
    aesEncrypt: aesEncrypt,
    aesDecrypt: aesDecrypt
};

const secret_key = 'this_is_a_secret_key';
const your_secret_iv = 'this_is_an_iv';

function aesEncrypt(content) {
    const parsedkey = CryptoJS.enc.Utf8.parse(secret_key);
    const iv = CryptoJS.enc.Utf8.parse(your_secret_iv);
    const encrypted = CryptoJS.AES.encrypt(content, parsedkey, { iv: iv, mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.toString();
};

function aesDecrypt(word) {
    var keys = CryptoJS.enc.Utf8.parse(secret_key);
    let base64 = CryptoJS.enc.Base64.parse(word);
    let src = CryptoJS.enc.Base64.stringify(base64);
    var decrypt = CryptoJS.AES.decrypt(src, keys, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return decrypt.toString(CryptoJS.enc.Utf8);
};

const bankAcccNo = '123456789';
const amount = 100;

const encryptedBankAcc = aesEncrypt(bankAcccNo);
const encryptedAmount = aesEncrypt(amount.toString());

console.log('Encrypted Bank Acc.', encryptedBankAcc);
console.log('Decrypted Bank Acc.', aesDecrypt(encryptedBankAcc));

console.log('Encrypted Amount.', encryptedAmount);
console.log('Decrypted Amount.', aesDecrypt(encryptedAmount));