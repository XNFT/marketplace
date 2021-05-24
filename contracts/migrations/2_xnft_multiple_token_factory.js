var XNftMultipleTokenFactory = artifacts.require("XNftMultipleTokenFactory");

module.exports = function(deployer) {
  deployer.then(function() {
    return deployer.deploy(XNftMultipleTokenFactory).then(function(token) {
      console.log(`XNftMultipleTokenFactory is deployed at ${token.address}`);
    });
  });
};
