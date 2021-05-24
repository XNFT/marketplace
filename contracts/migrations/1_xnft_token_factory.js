var XNftTokenFactory = artifacts.require("XNftTokenFactory");

module.exports = function(deployer) {
  deployer.then(function() {
    return deployer.deploy(XNftTokenFactory).then(function(token) {
      console.log(`XNftTokenFactory is deployed at ${token.address}`);
    });
  });
};
