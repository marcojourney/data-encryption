const crypto = require('crypto');

// const inputString = 'a6083b27-7a85-4fbf-9ae0-123ee76d3b29:xXPXzHWBKWImPJToOdzckwb2CWFl7ErcQf0lGCuGQb0EVSwTwkEKztzo1Eic12FwkI1xMuPcME6QpsbmxXAhOhsQwnjTBOqc58u5rREusXNUpkpow22SazYBJgD7in2D';
const inputString = 'a6083b27-7a85-4fbf-9ae0-123ee76d3b29:xXPXzHWBKWImPJToOdzckwb2CWFl7ErcQf0lGCuGQb0EVSwTwkEKztzo1Eic12FwkI1xMuPcME6QpsbmxXAhOhsQwnjTBOqc58u5rREusXNUpkpow22SazYBJgD7in2D';

// Create a SHA-1 hash object
const sha1Hash = crypto.createHash('sha1');

// Update the hash object with the input string
sha1Hash.update(inputString, 'utf8');

// Calculate the digest (the hash) in hexadecimal format
const hashResult = sha1Hash.digest('base64');

console.log('SHA-1 Hash:', hashResult);


var moment = require('moment-timezone');
console.log(moment('2023-09-19T10:00:00.000Z').tz("Asia/Phnom_Penh").format('YYYY-MM-DD HH:mm:ss'));