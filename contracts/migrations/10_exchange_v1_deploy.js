var ExchangeV1 = artifacts.require("ExchangeV1");
var TransferProxy = artifacts.require("TransferProxy");
var TransferProxyForDeprecated = artifacts.require("TransferProxyForDeprecated");
var ERC20TransferProxy = artifacts.require("ERC20TransferProxy");
var ExchangeStateV1 = artifacts.require("ExchangeStateV1");
var ExchangeOrdersHolderV1 = artifacts.require("ExchangeOrdersHolderV1");

module.exports = function(deployer) {
  deployer.then(async () => {
    const beneficiary = "0x3B672013e595fff33F5BB2A55d27A48b58D32AC7";
    const buyerFeeSigner = "0x12BF04C691F0b782E7E7CF47b67cbdfc98A91263";

    const tranferProxy = await TransferProxy.deployed();
    const transferProxyForDeprecated = await TransferProxyForDeprecated.deployed();
    const erc20TransferProxy = await ERC20TransferProxy.deployed();
    const exchangeStateV1 = await ExchangeStateV1.deployed();
    const exchangeOrderHolderV1 = await ExchangeOrdersHolderV1.deployed();

    return deployer
      .deploy(
        ExchangeV1,
        tranferProxy.address,
        transferProxyForDeprecated.address,
        erc20TransferProxy.address,
        exchangeStateV1.address,
        exchangeOrderHolderV1.address,
        beneficiary,
        buyerFeeSigner
      )
      .then((exchange) => {
        console.log(`ExchangeV1 is deployed at ${exchange.address}`);
      });
  });
};
