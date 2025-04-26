function encrypt(data) {
    return 'encrypted data';
}

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`Sending data to ${url}: ${encryptedData}`);
}

module.exports = {  // Corrected from module.export to module.exports
    send,
};
