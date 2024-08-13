const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
module.exports = buildModule("BTCfi", (m) => {
    const CoreLoanPlatform = m.contract("CoreLoanPlatform");
    return { CoreLoanPlatform };
});