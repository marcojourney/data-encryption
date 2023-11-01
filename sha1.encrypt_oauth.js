const crypto = require('crypto');

// const inputString = 'a6083b27-7a85-4fbf-9ae0-123ee76d3b29:xXPXzHWBKWImPJToOdzckwb2CWFl7ErcQf0lGCuGQb0EVSwTwkEKztzo1Eic12FwkI1xMuPcME6QpsbmxXAhOhsQwnjTBOqc58u5rREusXNUpkpow22SazYBJgD7in2D';
const inputString = '5423999b-f2a3-447b-a1aa-d8dd56436a09:lJ1VQUY9ScB2Zv0Me4zGBA6DEu3AoztPqqcJA7VH1J2gka4EuGxOD4yn7xEKaCZymv7ah2T3KjOVLv1Cc6FGy5zASUTkxXwzY_iOOhOXSyx9lZYx4eEqQlelx6l8C8pX';

// Create a SHA-1 hash object
const sha1Hash = crypto.createHash('sha1');

// Update the hash object with the input string
sha1Hash.update(inputString, 'utf8');

// Calculate the digest (the hash) in hexadecimal format
const hashResult = sha1Hash.digest('hex');

console.log('SHA-1 Hash:', hashResult);
