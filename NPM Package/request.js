function encrypt(data) {
    return 'encrypted data';
}

const REQUEST_TIMEOUT = 10000;

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`Sending data to ${url}: ${encryptedData}`);
}

module.exports = { // Corrected from module.export to module.exports export {  // Corrected from module.export to module.exports
    send,
    REQUEST_TIMEOUT
};
