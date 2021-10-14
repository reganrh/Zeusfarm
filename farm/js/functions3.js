const farmABI = [{"inputs":[{"internalType":"contract PumpKinsFarm","name":"_kins","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"contract IERC20","name":"_token0","type":"address"},{"internalType":"contract IERC20","name":"_token1","type":"address"},{"internalType":"bool","name":"_offerILP","type":"bool"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"address","name":"userAddr","type":"address"}],"name":"checkForIL","outputs":[{"internalType":"uint256","name":"extraKins","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"farmsender","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"address","name":"userAddr","type":"address"}],"name":"getDaysSinceDeposit","outputs":[{"internalType":"uint256","name":"daysSinceDeposit","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"address","name":"userAddr","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"uint256","name":"deposit","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"daysSinceDeposit","type":"uint256"},{"internalType":"uint256","name":"depVal","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ilp","outputs":[{"internalType":"contract ImpermanentLossProtection","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"kins","outputs":[{"internalType":"contract PumpKinsFarm","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"kinsPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingkins","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"acckinsPerShare","type":"uint256"},{"internalType":"contract IERC20","name":"token0","type":"address"},{"internalType":"contract IERC20","name":"token1","type":"address"},{"internalType":"bool","name":"impermanentLossProtection","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"address","name":"_lpToken","type":"address"},{"internalType":"contract IERC20","name":"_token0","type":"address"},{"internalType":"contract IERC20","name":"_token1","type":"address"},{"internalType":"bool","name":"_offerILP","type":"bool"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_farmsender","type":"address"}],"name":"setFarmsender","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_ilp","type":"address"}],"name":"setImpermanentLossProtection","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"sblock","type":"uint256"}],"name":"setstartblock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"updateReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"depositTime","type":"uint256"},{"internalType":"uint256","name":"depVal","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const farm2ABI = [{"inputs":[{"internalType":"contract IERC20","name":"_rewardToken","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"address","name":"_feeAddress","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"feeAddressUpdated","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint256","name":"_depositFee","type":"uint256"},{"internalType":"uint256","name":"_withdrawalFee","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"uint256","name":"_rewardEndBlock","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"address","name":"userAddr","type":"address"}],"name":"getDaysSinceDeposit","outputs":[{"internalType":"uint256","name":"daysSinceDeposit","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid","type":"uint256"},{"internalType":"address","name":"userAddr","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"uint256","name":"deposit","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"daysSinceDeposit","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"depositFee","type":"uint256"},{"internalType":"uint256","name":"withdrawalFee","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"acckinsPerShare","type":"uint256"},{"internalType":"uint256","name":"lpSupply","type":"uint256"},{"internalType":"uint256","name":"rewardEndBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint256","name":"_depositFee","type":"uint256"},{"internalType":"uint256","name":"_withdrawalFee","type":"uint256"},{"internalType":"uint256","name":"_rewardEndBlock","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"name":"setFeeAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"sblock","type":"uint256"}],"name":"setstartblock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_reward","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"}],"name":"updateReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tax","type":"uint256"}],"name":"updateTaxRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"depositTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawRemainder","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const defyABI = [{"inputs":[{"internalType":"address","name":"_WKinsIlp","type":"address"},{"internalType":"address","name":"_WDev","type":"address"},{"internalType":"address","name":"_WFarm","type":"address"},{"internalType":"address","name":"_WMarketing","type":"address"},{"internalType":"bool","name":"_takeFee","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"ExcludeFromFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"IncludeInFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"NewDeveloper","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"TakeFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WDev","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WFarm","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WKinsIlp","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WKinsmaster","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WMarketing","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_Wdev","type":"address"}],"name":"setDev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_takefee","type":"bool"}],"name":"setTakeFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_WKinsIlp","type":"address"}],"name":"setWKinsIlp","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_kinsmaster","type":"address"}],"name":"setWKinsmaster","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_wmarketing","type":"address"}],"name":"setWMarketing","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"totalBurn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const wbnbABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"PauserAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"PauserRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"constant":true,"inputs":[],"name":"ERR_INVALID_ZERO_VALUE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ERR_NO_ERROR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addPauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isPauser","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renouncePauser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]
const ilpABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_lpToken",
				"type": "address"
			},
			{
				"internalType": "contract IERC20",
				"name": "_token0",
				"type": "address"
			},
			{
				"internalType": "contract IERC20",
				"name": "_token1",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_offerILP",
				"type": "bool"
			}
		],
		"name": "add",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_devAddr",
				"type": "address"
			}
		],
		"name": "dev",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "kinsTransfer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pid",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_lpToken",
				"type": "address"
			},
			{
				"internalType": "contract IERC20",
				"name": "_token0",
				"type": "address"
			},
			{
				"internalType": "contract IERC20",
				"name": "_token1",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_offerILP",
				"type": "bool"
			}
		],
		"name": "set",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_kins",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_kinsMaster",
				"type": "address"
			}
		],
		"name": "setAddresses",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_kins",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_kinsMaster",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "devAddr",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_pid",
				"type": "uint256"
			}
		],
		"name": "getDepositValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "userDepValue",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pid",
				"type": "uint256"
			}
		],
		"name": "getKinsPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "kinsPrice",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pid",
				"type": "uint256"
			}
		],
		"name": "getReserves",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "r0",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "r1",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "kins",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "kinsMaster",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "poolInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "lpToken",
				"type": "address"
			},
			{
				"internalType": "contract IERC20",
				"name": "token0",
				"type": "address"
			},
			{
				"internalType": "contract IERC20",
				"name": "token1",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "token0_decimal",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "token1_decimal",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "impermanentLossProtection",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


const poolABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]

const apeABI = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
const apePoolABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]

const priceFeedABI = [{"inputs":[{"internalType":"address","name":"_aggregator","type":"address"},{"internalType":"address","name":"_accessController","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"int256","name":"current","type":"int256"},{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"updatedAt","type":"uint256"}],"name":"AnswerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":true,"internalType":"address","name":"startedBy","type":"address"},{"indexed":false,"internalType":"uint256","name":"startedAt","type":"uint256"}],"name":"NewRound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"accessController","outputs":[{"internalType":"contract AccessControllerInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aggregator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_aggregator","type":"address"}],"name":"confirmAggregator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_roundId","type":"uint256"}],"name":"getAnswer","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_roundId","type":"uint256"}],"name":"getTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestAnswer","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"}],"name":"phaseAggregators","outputs":[{"internalType":"contract AggregatorV2V3Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"phaseId","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_aggregator","type":"address"}],"name":"proposeAggregator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"proposedAggregator","outputs":[{"internalType":"contract AggregatorV2V3Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"proposedGetRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proposedLatestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_accessController","type":"address"}],"name":"setController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const priceFeedAddress = "0xf4766552D15AE4d256Ad41B6cf2933482B0680dc";
let priceFeed = undefined

let farmAuto = undefined
let farmAuto2 = undefined
let farmAuto3 = undefined
let defyAuto = undefined
let morphAuto = undefined
let wbnbAuto = undefined
let busdAuto = undefined
let ilpAuto = undefined


//
const apeAddress = "0x16327E3FbDaCA3bcF7E38F5Af2599D2DDc33aE52"
let apeContract = undefined

const defyBnbApeAddress = "0xD24cf15F02D1cC4C868C303925aDF247118CAd9B"
let defyBnbApeAuto = undefined

const morphFtmApeAddress = "0x7D42442f764985F208E6fa6A7CD0e253CB447D58"
let morphFtmApeAuto = undefined

const kinsMorphApeAddress = "0x865740c62ec992893a835AbA138cD3cec9b126E0"
let kinsMorphApeAuto = undefined

const tombFtmAddress = "0x2A651563C9d3Af67aE0388a5c8F89b867038089e"
let tombFtmAuto = undefined

const kinsTombAddress = "0x9eEab00fB6BBFC4d75f34196DffE537325f8E45A"
let kinsTombAuto = undefined

const spiritFtmAddress = "0x30748322B6E34545DBe0788C421886AEB5297789"
let spiritFtmAuto = undefined

const kinsSpiritAddress = "0x102Dc0a06a7A9fDAe5c18847Dfcfed52Feb50e3F"
let kinsSpiritAuto = undefined

const elkFtmAddress = "0xA69409Ecb11bab2f443F204e6bB55cBafFca4B58"
let elkFtmAuto = undefined

const kinsElkAddress = "0x72644252881f4da278ca811906eea5768c6bd781"
let kinsElkAuto = undefined

const wethFtmAddress = "0x613BF4E46b4817015c01c6Bb31C7ae9edAadc26e"
let wethFtmAuto = undefined

const mesoFtmAddress = "0x0Dd94754C2BC621Ef8De2fd7A9DF2BC5283e9479"
let mesoFtmAuto = undefined

const kinsWethAddress = "0x5E01faB296bB3C5bF9B65Cf3D04442dC02bc15b4"
let kinsWethAuto = undefined

const rndmFtmAddress = "0xD0a0F6dDb378A9945A758c00B157b8F2d1E707a3"
let rndmFtmAuto = undefined

const kinsRndmAddress = "0xdfebbeabbc16285c1b3e1928f3a410e578ae09e1"
let kinsRndmAuto = undefined

const plazaFtmAddress = "0x00Ee503A551094bc6d5Cf0dc57B738929EBb2B0E"
let plazaFtmAuto = undefined

const kinsPlazaAddress = "0xF7143bbF34170222eCF7ef5a12973C69Dd432c50"
let kinsPlazaAuto = undefined

const defyBusdApeAddress = "0x27A2c9CF757424142d262fc6A736C69aF62F1159"
let defyBusdApeAuto = undefined

const kinsFtmPaintAddress = "0xe64f282c657e2cbaccbdce4c973e08c168049920"
let kinsFtmPaintAuto = undefined

const kinsUsdtPaintAddress = "0xaab5a826e5edcd06c21bd4f914cbd656fbb196bb"
let kinsUsdtPaintAuto = undefined

const oliveFtmAddress = "0xf1D412010EDA1bbf09A2BCC938bc8d9EBbDc5889"
let oliveFtmAuto = undefined

const network = 'https://rpc.ftm.tools'

const defy = '0x6ECED8E16eDA61E65292f019B165542A5906ecD6'
let defyContract = undefined

const morph = '0x0789ff5ba37f72abc4d561d00648acadc897b32d'
let morphContract = undefined

const tomb = '0x6c021ae822bea943b2e66552bde1d2696a53fbb7'
let tombContract = undefined

const spirit = '0x5Cc61A78F164885776AA610fb0FE1257df78E59B'
let spiritContract = undefined

const elk = '0xE1C110E1B1b4A1deD0cAf3E42BfBdbB7b5d7cE1C'
let elkContract = undefined

const weth = '0x74b23882a30290451A17c44f4F05243b6b58C76d'
let wethContract = undefined

const meso = '0x4D9361A86D038C8adA3db2457608e2275B3E08d4'
let mesoContract = undefined

const rndm = '0x49ac072c793fb9523f0688a0d863aadfbfb5d475'
let rndmContract = undefined

const plaza = '0xc1e9d0d0a5353dee8b0fb23f1e03b21fc91566ef'
let plazaContract = undefined

const olive = '0xa9937092c4e2b0277c16802cc8778d252854688a'
let oliveContract = undefined

const ilp = '0x566477676926e17D11885b0424986dd7fD2027C3'
let ilpContract = undefined

const wbnb = '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
let wbnbContract = undefined

const busd = '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75'
let busdContract = undefined

const farmAddress = "0x690af18466607997c247B539381ed87c1cC78a0C"
let farmContract = undefined

const farmAddress2 = "0xaA06cdBD62e7f6FAb2063b1cE30aCbe6544fFd3C"
let farm2Contract = undefined

const farmAddress3 = "0xC178315843C4F434f2d6903b47b5cEe0D9c1C561"
let farm3Contract = undefined

var pools = []
//ApeSwap Pools	
pools.push( { name: 'KINS', addr: "0x6ECED8E16eDA61E65292f019B165542A5906ecD6", ilp: false,
	token0: defy, token1: defy, contract: '', swapContract: '', swapAddr: apeAddress, token0Dec: 1e18, token1Dec: 1e18, lpTokenValueTotal: 0, 
		pid: 0, userDep: 0, defyBal: 0, ABI: apePoolABI, swapABI: apeABI } )
		

pools.push( { name: 'APE-DEFY-BNB', addr: "0xD24cf15F02D1cC4C868C303925aDF247118CAd9B", ilp: true,
	token0: wbnb, token1: defy, contract: '', swapContract: '', swapAddr: apeAddress, token0Dec: 1e18, token1Dec: 1e18, lpTokenValueTotal: 0,
		pid: 1, userDep: 0, defyBal: 0, ABI: apePoolABI, swapABI: apeABI } )
		
pools.push( { name: 'APE-DEFY-BUSD', addr: "0x27A2c9CF757424142d262fc6A736C69aF62F1159", ilp: true,
	token0: busd, token1: defy, contract: '', swapContract: '', swapAddr: apeAddress, token0Dec: 1e18, token1Dec: 1e6, lpTokenValueTotal: 0, 
		pid: 2, userDep: 0, defyBal: 0, ABI: apePoolABI, swapABI: apeABI } )
		
pools.push( { name: 'APE-DEFY-MORPH', addr: "0x865740c62ec992893a835AbA138cD3cec9b126E0", ilp: true,
	token0: morph, token1: defy, contract: '', swapContract: '', swapAddr: apeAddress, token0Dec: 1e18, token1Dec: 1e18, lpTokenValueTotal: 0, 
		pid: 3, userDep: 0, defyBal: 0, ABI: apePoolABI, swapABI: apeABI } )
	
pools.push( { name: 'PAINT-KINS-FTM', addr: "0xe64f282c657e2cbaccbdce4c973e08c168049920", ilp: true,
	token0: wbnb, token1: defy, contract: '', swapContract: '', swapAddr: apeAddress, token0Dec: 1e18, token1Dec: 1e18, lpTokenValueTotal: 0, 
		pid: 4, userDep: 0, defyBal: 0, ABI: apePoolABI, swapABI: apeABI } )
		
pools.push( { name: 'PAINT-KINS-USDC', addr: "0xaab5a826e5edcd06c21bd4f914cbd656fbb196bb", ilp: true,
	token0: busd, token1: defy, contract: '', swapContract: '', swapAddr: apeAddress, token0Dec: 1e18, token1Dec: 1e18, lpTokenValueTotal: 0, 
		pid: 5, userDep: 0, defyBal: 0, ABI: apePoolABI, swapABI: apeABI } )

pools.push( { name: 'KINS-TOMB', addr: "0x9eEab00fB6BBFC4d75f34196DffE537325f8E45A", ilp: true,
	token0: tomb, token1: defy, contract: '', swapContract: '', swapAddr: apeAddress, token0Dec: 1e18, token1Dec: 1e18, lpTokenValueTotal: 0, 
		pid: 6, userDep: 0, defyBal: 0, ABI: apePoolABI, swapABI: apeABI } )

pools.push( { name: 'KINS-SPIRIT', addr: "0x102Dc0a06a7A9fDAe5c18847Dfcfed52Feb50e3F", ilp: false,
	token0: spirit, token1: defy, contract: '', swapContract: '', swapAddr: apeAddress, token0Dec: 1e18, token1Dec: 1e18, lpTokenValueTotal: 0, 
		pid: 7, userDep: 0, defyBal: 0, ABI: apePoolABI, swapABI: apeABI } )

pools.push( { name: 'KINS-WETH', addr: "0x5E01faB296bB3C5bF9B65Cf3D04442dC02bc15b4", ilp: false,
	token0: weth, token1: defy, contract: '', swapContract: '', swapAddr: apeAddress, token0Dec: 1e18, token1Dec: 1e18, lpTokenValueTotal: 0, 
		pid: 8, userDep: 0, defyBal: 0, ABI: apePoolABI, swapABI: apeABI } )

pools.push( { name: 'KINS-ELK', addr: "0x72644252881f4da278ca811906eea5768c6bd781", ilp: false,
	token0: elk, token1: defy, contract: '', swapContract: '', swapAddr: apeAddress, token0Dec: 1e18, token1Dec: 1e18, lpTokenValueTotal: 0, 
		pid: 9, userDep: 0, defyBal: 0, ABI: apePoolABI, swapABI: apeABI } )
pools.push( { name: 'KINS-RNDM', addr: "0xdfebbeabbc16285c1b3e1928f3a410e578ae09e1", ilp: false,
	token0: rndm, token1: defy, contract: '', swapContract: '', swapAddr: apeAddress, token0Dec: 1e18, token1Dec: 1e18, lpTokenValueTotal: 0, 
		pid: 0, userDep: 0, defyBal: 0, ABI: apePoolABI, swapABI: apeABI } )
pools.push( { name: 'MESO-FTM', addr: "0x0Dd94754C2BC621Ef8De2fd7A9DF2BC5283e9479", ilp: false,
	token0: wbnb, token1: meso, contract: '', swapContract: '', swapAddr: apeAddress, token0Dec: 1e18, token1Dec: 1e18, lpTokenValueTotal: 0, 
		pid: 10, userDep: 0, defyBal: 0, ABI: apePoolABI, swapABI: apeABI } )
pools.push( { name: 'KINS-PLAZA', addr: "0xF7143bbF34170222eCF7ef5a12973C69Dd432c50", ilp: false,
	token0: defy, token1: plaza, contract: '', swapContract: '', swapAddr: apeAddress, token0Dec: 1e18, token1Dec: 1e9, lpTokenValueTotal: 0, 
		pid: 0, userDep: 0, defyBal: 0, ABI: apePoolABI, swapABI: apeABI } )
pools.push( { name: 'PLAZA-FTM', addr: "0x00Ee503A551094bc6d5Cf0dc57B738929EBb2B0E", ilp: false,
	token0: wbnb, token1: plaza, contract: '', swapContract: '', swapAddr: apeAddress, token0Dec: 1e18, token1Dec: 1e9, lpTokenValueTotal: 0, 
		pid: 1, userDep: 0, defyBal: 0, ABI: apePoolABI, swapABI: apeABI } )

pools.push( { name: 'OLIVE-FTM', addr: "0xf1D412010EDA1bbf09A2BCC938bc8d9EBbDc5889", ilp: false,
	token0: wbnb, token1: olive, contract: '', swapContract: '', swapAddr: apeAddress, token0Dec: 1e18, token1Dec: 1e18, lpTokenValueTotal: 0, 
		pid: 11, userDep: 0, defyBal: 0, ABI: apePoolABI, swapABI: apeABI } )

const user = {
    address: undefined,
	bnb: 0,
	defy: 0,
	harvestable: 0,
	depositAmount: undefined
}
$(document).ready(function() {
	window.addEventListener('load', async function () {
		await ethereum.request( {method: 'eth_requestAccounts'} )
		ethereum.request({ method: 'eth_accounts' }).then(function (result) {
			user.address = result[0]
			console.log("User wallet: " + user.address)
			$('.user-address')[0].innerHTML = '' + user.address
			$('.user-address')[0].style.display = ''
			$('.connect-button')[0].innerHTML = 'Connected!'
			web3 = new Web3(window.web3.currentProvider)
		})
		if(user.address != undefined)
			initContracts()
		else 
			beginLogins()
	})
})

let attempts = 0
async function beginLogins(){
	await ethereum.request({method: 'eth_requestAccounts'})
	await userLoginAttempt()
	setTimeout(() => {
		if(user.address == undefined && attempts < 3){
			setTimeout(() => {
				if(user.address == undefined && attempts < 3){
					attempts++
					beginLogins()
				}
			}, 300)
		}
	}, 300)
}

let web3
let loginInt
async function userLoginAttempt(){
	await ethereum.request({method: 'eth_requestAccounts'})
	ethereum.request({ method: 'eth_accounts' }).then(function (result) {
		user.address = result[0]
		$('.user-address')[0].innerHTML = '' + user.address
		$('.user-address')[0].style.display = ''
		$('.connect-button')[0].innerHTML = 'Connected!'
		web3 = new Web3(window.web3.currentProvider)
		
		web3 = new Web3(window.web3.currentProvider)
		initContracts()
	})
	loginInt = setInterval(async () => {
		ethereum.request({ method: 'eth_accounts' }).then(function (result) {
			if (window.ethereum && user.address !== result[0]) location.reload()
		})
	}, 50000)

}

async function initContracts(){
	try{
		for(let i = 0; i < pools.length; i++){
			await (pools[i].contract = new web3.eth.Contract(pools[i].ABI, pools[i].addr))
			autoBalances(i)
		}
		await (defyContract = new web3.eth.Contract(defyABI, defy))
		await (morphContract = new web3.eth.Contract(defyABI, morph))
		await (tombContract = new web3.eth.Contract(defyABI, tomb))
		await (elkContract = new web3.eth.Contract(defyABI, elk))
        await (spiritContract = new web3.eth.Contract(defyABI, spirit))
        await (wethContract = new web3.eth.Contract(defyABI, weth))
        await (mesoContract = new web3.eth.Contract(defyABI, meso))
		await (rndmContract = new web3.eth.Contract(defyABI, rndm))
		await (plazaContract = new web3.eth.Contract(defyABI, plaza))
		await (oliveContract = new web3.eth.Contract(defyABI, olive))
		await (wbnbContract = new web3.eth.Contract(poolABI, wbnb))
		await (busdContract = new web3.eth.Contract(poolABI, busd))
		await (ilpContract = new web3.eth.Contract(ilpABI, ilp))
		await (farmContract = new web3.eth.Contract(farmABI, farmAddress))
		await (farm2Contract = new web3.eth.Contract(farm2ABI, farmAddress2))
		await (farm3Contract = new web3.eth.Contract(farm2ABI, farmAddress3))
		runUserStats()

	}catch(e){
		console.log(e)
		setTimeout(() => {
			initContracts()
		}, 250)
	}
}

function runUserStats() {
	user.harvestable = 0
	for(let i = 0; i < pools.length; i++){
		pendingDefy(i)
		poolBalance(i)
		userInfo(i)
		checkAllowance(i)
	}
    setTimeout(() => {
        runUserStats()
    }, 1000 * 5)
}

// get balance of user and set it on the header 
/*
async function getUserBalance() {
	if(user.address != undefined){
		//user.bnb = (await web3.eth.getBalance(user.address) / 1e18).toFixed(6)
		//$('.user-bnb')[0].innerHTML = user.bnb
		user.defy = (await defyContract.methods.balanceOf(user.address).call() / 1e18).toFixed(6)
		$('.user-defy')[0].innerHTML = user.defy
	}else
		setTimeout(() => {
			getUserBalance()
		}, 2000)
} */
function toHexString(number){
	return '0x'+number.toString(16)
}
async function checkAllowance(pid){
	let contract = pools[pid].contract
    let allowance
    if(pid < 10 || pid == 11 || pid > 13){
	allowance = await contract.methods.allowance(user.address, farmAddress).call()
    }
    if(pid == 10){
	allowance = await contract.methods.allowance(user.address, farmAddress2).call()
    }
    if(pid == 12 || pid == 13){
	allowance = await contract.methods.allowance(user.address, farmAddress3).call()
    }
	//console.log("Pool "+pools[pid].name+" allowance: "+allowance/1e18+'.')
	if(allowance > 1000000 * 1e18)
		$('.approve-button-'+pid)[0].style.display = "none" ,
		$('.deposit-button-'+pid)[0].style.display = ""
	 if(allowance <= 1000000 * 1e18)
		$('.deposit-button-'+pid)[0].style.display = "none" ,
		$('.approve-button-'+pid)[0].style.display = "" 
}
async function approve(pid){
	let contract = pools[pid].contract
	let amount = toHexString(100000000 * 1e18)
    if(pid < 10 || pid == 11 || pid > 13){
	await contract.methods.approve(farmAddress, amount).send({
		from: user.address,
		shouldPollResponse: true,
	}, function(error, res){
		if(error)
			console.log(error)
		else{
			console.log(res)
			return res
		}
	})
    }
    if(pid == 10){
	await contract.methods.approve(farmAddress2, amount).send({
		from: user.address,
		shouldPollResponse: true,
	}, function(error, res){
		if(error)
			console.log(error)
		else{
			console.log(res)
			return res
		}
	})
    }
    if(pid == 12 || pid == 13){
	await contract.methods.approve(farmAddress3, amount).send({
		from: user.address,
		shouldPollResponse: true,
	}, function(error, res){
		if(error)
			console.log(error)
		else{
			console.log(res)
			return res
		}
	})}
	
}
let depositAmount = 0
function updateDepositAmount(pid){
	depositAmount = $('.deposit-input-'+pid)[0].value * 1e18
	console.log(depositAmount)
}
async function maxDeposit(pid){
	$('.deposit-input-'+pid)[0].value = pools[pid].userBal / 1e18
	depositAmount = pools[pid].userBal
}
async function deposit(pid){
	let amount = toHexString(depositAmount)
    if(pid < 10 || pid == 11 || pid > 13){
	await farmContract.methods.deposit(pools[pid].pid, amount).send({
		from: user.address,
		shouldPollResponse: true,
	}, function(error, res){
		if(error)
			console.log(error)
		else{
			console.log(res)
			return res
		}
	})
    }
    if(pid == 10){
	await farm2Contract.methods.deposit(0, amount).send({
		from: user.address,
		shouldPollResponse: true,
	}, function(error, res){
		if(error)
			console.log(error)
		else{
			console.log(res)
			return res
		}
	})
    }

    if(pid == 12 || pid == 13){
	await farm3Contract.methods.deposit(pools[pid].pid, amount).send({
		from: user.address,
		shouldPollResponse: true,
	}, function(error, res){
		if(error)
			console.log(error)
		else{
			console.log(res)
			return res
		}
	})}
    
	
}
async function harvest(pid){
    if(pid < 10 || pid == 11 || pid > 13){
	await farmContract.methods.deposit(pools[pid].pid, 0).send({
		from: user.address,
		shouldPollResponse: true,
	}, function(error, res){
		if(error)
			console.log(error)
		else{
			console.log(res)
			return res
		}
	})
    }
    if(pid == 10){
	await farm2Contract.methods.deposit(0, 0).send({
		from: user.address,
		shouldPollResponse: true,
	}, function(error, res){
		if(error)
			console.log(error)
		else{
			console.log(res)
			return res
		}
	})
    }

    if(pid == 12 || pid == 13){
	await farm3Contract.methods.deposit(pools[pid].pid, 0).send({
		from: user.address,
		shouldPollResponse: true,
	}, function(error, res){
		if(error)
			console.log(error)
		else{
			console.log(res)
			return res
		}
	})}
    
	
}
let withdrawAmount = 0
function updateWithdrawAmount(pid){
	withdrawAmount = $('.withdraw-input-'+pid)[0].value * 1e18
	console.log(withdrawAmount)
}
async function withdraw(pid){
	let amount = toHexString(withdrawAmount)
    
    if(pid < 10 || pid == 11 || pid > 13){
	await farmContract.methods.withdraw(pools[pid].pid, amount).send({
		from: user.address,
		shouldPollResponse: true,
	}, function(error, res){
		if(error)
			console.log(error)
		else{
			console.log(res)
			return res
		}
	})
    }
    if(pid == 10){
	await farm2Contract.methods.withdraw(0, amount).send({
		from: user.address,
		shouldPollResponse: true,
	}, function(error, res){
		if(error)
			console.log(error)
		else{
			console.log(res)
			return res
		}
	})
    }

    if(pid == 12 || pid == 13){
	await farm3Contract.methods.withdraw(pools[pid].pid, amount).send({
		from: user.address,
		shouldPollResponse: true,
	}, function(error, res){
		if(error)
			console.log(error)
		else{
			console.log(res)
			return res
		}
	})
    }
    
	
}
async function maxWithdraw(pid){
	$('.withdraw-input-'+pid)[0].value = pools[pid].userDep / 1e18
	withdrawAmount = pools[pid].userDep
}

async function pendingDefy(pid){
    let pedingReward
    if(pid < 10 || pid == 11 || pid > 13){
	pendingReward= (parseInt(await farmContract.methods.pendingkins(pools[pid].pid, user.address).call()) / 1e18)
    }
    if(pid == 10){
	pendingReward = (parseInt(await farm2Contract.methods.pendingReward(0, user.address).call()) / 1e18)
    }
    if(pid == 12 || pid == 13){
	pendingReward = (parseInt(await farm3Contract.methods.pendingReward(pools[pid].pid, user.address).call()) / 1e9)
    }
    
	
/*	user.harvestable += pendingDefy
	$('.harvestable')[0].innerHTML = user.harvestable.toFixed(6) */
	$('.pending-kins-'+pid)[0].innerHTML = " " +pendingReward.toFixed(6)
}

async function poolBalance(pid){
	let contract = pools[pid].contract
	let lpBalance = await contract.methods.balanceOf(user.address).call()
    
    if(pid < 10 || pid == 11 || pid > 13){
	pools[pid].lpInFarm = parseInt(await contract.methods.balanceOf(farmAddress).call()) / 1e18
    }
    if(pid == 10){
	pools[pid].lpInFarm = parseInt(await contract.methods.balanceOf(farmAddress2).call()) / 1e18
    }

    if(pid == 12 || pid == 13){
	pools[pid].lpInFarm = parseInt(await contract.methods.balanceOf(farmAddress3).call()) / 1e18
    }
	
	//$('.pool-liq-'+pid)[0].innerHTML = "Total Staked: " +(pools[pid].lpInFarm).toFixed(4) + " " + pools[pid].name
	
	pools[pid].wbnbBal = await wbnbContract.methods.balanceOf(pools[pid].addr).call() / 1e18
	pools[pid].busdBal = await busdContract.methods.balanceOf(pools[pid].addr).call() / 1e18
			
	pools[pid].userBal = lpBalance 
	$('.user-lp-'+pid)[0].innerHTML = " " +(lpBalance/1e18).toFixed(9)
}

let userInfoInt
async function userInfo(pid){
    let userInfo
    if(pid < 10 || pid == 11 || pid > 13){
	userInfo = await farmContract.methods.getUserInfo(pools[pid].pid, user.address).call()
    }
    if(pid == 10){
	userInfo = await farm2Contract.methods.getUserInfo(0, user.address).call()
    }
    if(pid == 12 || pid == 13){
	userInfo = await farm3Contract.methods.getUserInfo(pools[pid].pid, user.address).call()
    }
	
	let amount = (parseInt(userInfo.deposit) / 1e18)
	pools[pid].userDep = parseInt(userInfo.deposit)
	let userShare = amount / pools[pid].lpInFarm * 100
	$('.userInfo-amount-'+pid)[0].innerHTML = " " +amount.toFixed(9)
	if(pid > 0){
	$('.userInfo-value-'+pid)[0].innerHTML = " " +(amount * (pools[pid].lpTokenValueTotal*1e18) / (pools[pid].totalSupply*1e18)).toFixed(2)+"$" 
	}
	//$('.userInfo-share-'+pid)[0].innerHTML = ' ' +userShare.toFixed(4)+"%"  
	
	if(pid == 0){

			$('.userInfo-value-'+pid)[0].innerHTML =  " " +(amount * currentApeBusdToDefy).toFixed(2)+"$"
			/*if(!$('.my-pool-'+pid)[0])
				/*$('.my-lp-pools')[0].innerHTML += '<option class="my-pool-'+pid+'" value="'+pid+'">' +pools[pid].name+ ': '+amount.toFixed(4)+' (~'+(amount * (pools[pid].lpTokenValueTotal*1e18) / (pools[pid].totalSupply*1e18)).toFixed(2)+'$)</option>' *
			$('.my-pool-'+pid)[0].innerHTML = ' ' + pools[pid].name+ ': '+amount.toFixed(4)+' (~'+(amount * (pools[pid].lpTokenValueTotal*1e18) / (pools[pid].totalSupply*1e18)).toFixed(2)+'$)'
		*/
	} 
	
	if(6 > pid && pid > 0 ){
	//ILP Stuff
	if(userInfo.daysSinceDeposit > 10000 )
		$('.userInfo-days-'+pid)[0].innerHTML = ' 0'
	else{
		let daysLeft = 30 - userInfo.daysSinceDeposit
		if(pools[pid].ilp){
			if(userInfo.daysSinceDeposit >= 30)
				$('.userInfo-days-'+pid)[0].innerHTML = 'ILP Active'
			else
				$('.userInfo-days-'+pid)[0].innerHTML = ' ' +(daysLeft)+ " Days Left"
		}else
			$('.userInfo-days-'+pid)[0].innerHTML = ' ' +(userInfo.daysSinceDeposit)
	}
	let extraDefy = await farmContract.methods.checkForIL(pid, user.address).call() / 1e18
	
	if(pools[pid].ilp){
		$('.userInfo-extra-'+pid)[0].innerHTML = ' ' +extraDefy.toFixed(2)
//		$('.userInfo-depVal-'+pid)[0].innerHTML = ' ~$' +(parseInt(userInfo.depVal) / 1e36 ).toFixed(2)
	}else{
	//	if($('.userInfo-depVal-'+pid)[0] != undefined)
	//		$('.userInfo-depVal-'+pid)[0].innerHTML = ' ~$' +parseInt(userInfo.depVal)
		if($('.userInfo-extra-'+pid)[0] != undefined)
			$('.userInfo-extra-'+pid)[0].innerHTML = " N/A"
	}
}
}
/*function slideToFarm(pid){
	console.log($('.my-pool-'+pid)[0].value)
	console.log(pid)
	$('#pool-'+pid)[0].scrollIntoView();
}*/

let i2 = 0
let stakedOnly = false
/*function stakedToggle(){
	i2++
	for(let i = 0; i < pools.length; i++){
		if(stakedOnly){
			$('#pool-'+i)[0].style.display = ""
		}else if(pools[i].userDep == 0){
			$('#pool-'+i)[0].style.display = "none"
		}
		
	}
	if(stakedOnly)
		$('.staked-toggle-text')[0].innerHTML = "Show Staked Farms Only"
	else
		$('.staked-toggle-text')[0].innerHTML = "Display All Farms"
	
	stakedOnly = !stakedOnly
}
function tradeToggle(){
	if($('.trade-and-chart')[0].style.display == "none"){
		$('.trade-text')[0].innerHTML = "Hide Swap & Price Chart"
		$('.trade-and-chart')[0].style.display = ""
	}else{
		$('.trade-text')[0].innerHTML = "Show Swap & Price Chart"
		$('.trade-and-chart')[0].style.display = "none"
	}
	
}*/