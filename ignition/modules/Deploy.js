const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
module.exports = buildModule("LoanDappBasicModule", (m) => {
    const CoreLoanPlatform = m.contract("CoreLoanPlatform");
    return { CoreLoanPlatform };
});