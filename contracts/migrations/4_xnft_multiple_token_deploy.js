var XNftMultipleToken = artifacts.require("XNftMultipleToken");

module.exports = function(deployer) {
  deployer.then(function() {
    const admin = "0x12BF04C691F0b782E7E7CF47b67cbdfc98A91263";
    return deployer
      .deploy(XNftMultipleToken, "XNft", "VINC", admin, "https://ipfs.io/ipfs/", "https://ipfs.io/ipfs/")
      .then(function(token) {
        console.log(`XNftMultipleToken is deployed at ${token.address}`);
      });
  });
};
