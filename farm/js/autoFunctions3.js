
let rewardPerYear;	

$(document).ready(function() {
	autoContract()
})

async function autoContract() {
	//try{
		const HttpProvider = Web3.providers.HttpProvider;
		const fullNode = new HttpProvider(network);
		const solidityNode = new HttpProvider(network);
		const eventServer = new HttpProvider(network);
		
		let web3 = new Web3(fullNode, solidityNode, eventServer)
			
		for(let i = 0; i < pools.length; i++){
			await (pools[i].contract = new web3.eth.Contract(pools[i].ABI, pools[i].addr))
			await (pools[i].swapContract = new web3.eth.Contract(pools[i].swapABI, pools[i].swapAddr))
		}
			
		await (farmAuto = new web3.eth.Contract(farmABI, farmAddress))
		await (farmAuto2 = new web3.eth.Contract(farm2ABI, farmAddress2))
		await (farmAuto3 = new web3.eth.Contract(farm2ABI, farmAddress3))
		await (defyAuto = new web3.eth.Contract(defyABI, defy))
		await (morphAuto = new web3.eth.Contract(defyABI, morph))
		await (tombAuto = new web3.eth.Contract(defyABI, tomb))
		await (spiritAuto = new web3.eth.Contract(defyABI, spirit))
		await (wethAuto = new web3.eth.Contract(defyABI, weth))
		await (elkAuto = new web3.eth.Contract(defyABI, elk))
		await (wbnbAuto = new web3.eth.Contract(wbnbABI, wbnb))
		await (mesoAuto = new web3.eth.Contract(defyABI, meso))
		await (rndmAuto = new web3.eth.Contract(defyABI, rndm))
		await (plazaAuto = new web3.eth.Contract(defyABI, plaza))
		await (oliveAuto = new web3.eth.Contract(defyABI, olive))
		await (scareAuto = new web3.eth.Contract(defyABI, scare))
		await (busdAuto = new web3.eth.Contract(wbnbABI, busd))
		await (ilpAuto = new web3.eth.Contract(ilpABI, ilp))
		
    
		await (priceFeed = new web3.eth.Contract(priceFeedABI, priceFeedAddress))
		
		await (defyBnbApeAuto = new web3.eth.Contract(apePoolABI, defyBnbApeAddress))
		await (morphFtmApeAuto = new web3.eth.Contract(apePoolABI, morphFtmApeAddress))
		await (kinsMorphApeAuto = new web3.eth.Contract(apePoolABI, kinsMorphApeAddress))
		await (tombFtmAuto = new web3.eth.Contract(apePoolABI, tombFtmAddress))
		await (kinsTombAuto = new web3.eth.Contract(apePoolABI, kinsTombAddress))
        await (spiritFtmAuto = new web3.eth.Contract(apePoolABI, spiritFtmAddress))
		await (kinsSpiritAuto = new web3.eth.Contract(apePoolABI, kinsSpiritAddress))
        await (wethFtmAuto = new web3.eth.Contract(apePoolABI, wethFtmAddress))
		await (kinsWethAuto = new web3.eth.Contract(apePoolABI, kinsWethAddress))
        await (elkFtmAuto = new web3.eth.Contract(apePoolABI, elkFtmAddress))
		await (kinsElkAuto = new web3.eth.Contract(apePoolABI, kinsElkAddress))
		await (rndmFtmAuto = new web3.eth.Contract(apePoolABI, rndmFtmAddress))
		await (kinsRndmAuto = new web3.eth.Contract(apePoolABI, kinsRndmAddress))
        await (mesoFtmAuto = new web3.eth.Contract(apePoolABI, mesoFtmAddress))
		await (plazaFtmAuto = new web3.eth.Contract(apePoolABI, plazaFtmAddress))
		await (oliveFtmAuto = new web3.eth.Contract(apePoolABI, oliveFtmAddress))
		await (kinsPlazaAuto = new web3.eth.Contract(apePoolABI, kinsPlazaAddress))
		await (scareFtmAuto = new web3.eth.Contract(apePoolABI, scareFtmAddress))
		await (kinsScareAuto = new web3.eth.Contract(apePoolABI, kinsScareAddress))
		await (defyBusdApeAuto = new web3.eth.Contract(apePoolABI, defyBusdApeAddress))
		
    
		await (apeContract = new web3.eth.Contract(apeABI, apeAddress))
		
		await getApePrices()
		
		for(let i = 0; i < pools.length; i++){
			await autoBalances(i)
			getLiqTotals(i)
		}
	let totalInt	
        clearInterval(totalInt)
		setTimeout(() => { 
			totalInt = setInterval(() => {
				
				$('.tvl-total')[0].innerHTML = '$'+
				(
					pools[0].lpTokenValueTotal+
					pools[1].lpTokenValueTotal+
					pools[2].lpTokenValueTotal+
					pools[3].lpTokenValueTotal+
					pools[4].lpTokenValueTotal+
					pools[5].lpTokenValueTotal+
					pools[6].lpTokenValueTotal+
					pools[7].lpTokenValueTotal+
					pools[8].lpTokenValueTotal+
					pools[9].lpTokenValueTotal+
					pools[10].lpTokenValueTotal+
					pools[12].lpTokenValueTotal+
					pools[15].lpTokenValueTotal
				).toLocaleString(undefined, { maximumFractionDigits: 0 })
			}, 250)
		}, 1000)
    
	//	getSupply()
		setInterval(() => {
			refreshStats()
		}, 1000 * 8)
	/*
	}catch(e){
		console.log(e)
		setTimeout(() => {
			autoContract()
		}, 750)
	}
	*/
}
function refreshStats(){
//	getSupply()
	getApePrices()
	for(i = 0; i < pools.length; i++){
		autoBalances(i)
		getLiqTotals(i)
	}
}	
/*
async function getSupply(){
//	let totalSupply = parseInt(await (defyAuto.methods.totalSupply().call()) / 1e18)
//	$('.total-supply')[0].innerHTML = '' +totalSupply.toFixed()
		
//	let totalBurn = await (defyAuto.methods.totalBurn().call() / 1e18)
//	$('.total-burned')[0].innerHTML = '' +totalBurn.toFixed()

	//let ilpBalance = await defyAuto.methods.balanceOf(ilp).call() / 1e18
	//$('.ilp-defy-balance')[0].innerHTML = '' +ilpBalance
    
    let Ttvl 
    for(let i = 0; i < pools.length; i++){
			await autoBalances(i)
			getLiqTotals(i)
		}
}*/


//let currentDefyToBusd

let currentBnbPriceToUsd

let walletInt

let currentApeBnbToDefy
let currentApeDefyToBnb

let currentApeBusdToDefy = 0
let currentFtmToMorph = 0
let currentFtmToTomb = 0

async function getApePrices(){
	let resDefyBnb = await defyBnbApeAuto.methods.getReserves().call()	
	let resDefyBusd = await defyBusdApeAuto.methods.getReserves().call()
	let resMorphFtm = await morphFtmApeAuto.methods.getReserves().call()
	let resTombFtm = await tombFtmAuto.methods.getReserves().call()
	let resSpiritFtm = await spiritFtmAuto.methods.getReserves().call()	
	let resWethFtm = await wethFtmAuto.methods.getReserves().call()	
	let resElkFtm = await elkFtmAuto.methods.getReserves().call()
	let resRndmFtm = await rndmFtmAuto.methods.getReserves().call()
	let resPlazaFtm = await plazaFtmAuto.methods.getReserves().call()
	let resMesoFtm = await mesoFtmAuto.methods.getReserves().call()
	let resOliveFtm = await oliveFtmAuto.methods.getReserves().call()
	let resScareFtm = await scareFtmAuto.methods.getReserves().call()
	let roundData = await priceFeed.methods.latestRoundData().call()
	currentBnbPriceToUsd = roundData.answer / 1e8
	
	currentApeBnbToDefy = await apeContract.methods.quote(toHexString(1e18), resDefyBnb._reserve1, resDefyBnb._reserve0).call() / 1e18
	currentApeDefyToBnb = await apeContract.methods.quote(toHexString(1e18), resDefyBusd._reserve0, resDefyBusd._reserve1).call() / 1e18
/* 	console.log(currentApeBnbToDefy)
	console.log(currentApeDefyToBnb) */
	
     let totalSupply = await defyAuto.methods.totalSupply().call() / 1e18
      let totalBurn = await defyAuto.methods.totalBurn().call() / 1e18
    
	currentApeBusdToDefy = await ilpAuto.methods.getKinsPrice(2).call() / 1e18
    let currentKinsFTM = await ilpAuto.methods.getKinsPrice(1).call() / 1e18
    	currentPrice = currentKinsFTM * currentBnbPriceToUsd
	if(currentApeBusdToDefy > currentPrice){
		currentPrice = currentApeBusdToDefy }
	$('.kins-price')[0].innerHTML = '$ '+currentPrice.toFixed(2)
    $('.total-supply')[0].innerHTML = '' +totalSupply.toLocaleString(undefined, { maximumFractionDigits: 0 })
    $('.total-burned')[0].innerHTML = '' +totalBurn.toLocaleString(undefined, { maximumFractionDigits: 0 })
    
	
    currentFtmToMorph = await apeContract.methods.quote(toHexString(1e18), resMorphFtm._reserve0, resMorphFtm._reserve1).call() / 1e18
    
    currentFtmToTomb = await apeContract.methods.quote(toHexString(1e18), resTombFtm._reserve1, resTombFtm._reserve0).call() / 1e18
    
    currentFtmToSpirit = await apeContract.methods.quote(toHexString(1e18), resSpiritFtm._reserve1, resSpiritFtm._reserve0).call() / 1e18
    
    currentFtmToWeth = await apeContract.methods.quote(toHexString(1e18), resWethFtm._reserve1, resWethFtm._reserve0).call() / 1e18
    
    currentFtmToElk = await apeContract.methods.quote(toHexString(1e18), resElkFtm._reserve1, resElkFtm._reserve0).call() / 1e18
    
    currentFtmToRndm = await apeContract.methods.quote(toHexString(1e18), resRndmFtm._reserve1, resRndmFtm._reserve0).call() / 1e18
    
    currentFtmToMeso = await apeContract.methods.quote(toHexString(1e18), resMesoFtm._reserve1, resMesoFtm._reserve0).call() / 1e18
    
    currentFtmToPlaza = await apeContract.methods.quote(toHexString(1e18), resPlazaFtm._reserve1, resPlazaFtm._reserve0).call() / 1e27
    
    currentFtmToPlaza = await apeContract.methods.quote(toHexString(1e18), resOliveFtm._reserve1, resOliveFtm._reserve0).call() / 1e18
    
    currentFtmToScare = await apeContract.methods.quote(toHexString(1e18), resScareFtm._reserve1, resScareFtm._reserve0).call() / 1e18
   
//	$('.defy-bnb-price')[0].innerHTML = '1 BNB = ~'+currentApeBnbToDefy.toFixed(2)+' DEFY'
//	$('.kins-price')[0].innerHTML = '$'+currentApeBusdToDefy.toFixed(2)
	
/*	walletInt = setInterval(() => {
		$('.wallet-balance')[0].innerHTML = (currentApeBusdToDefy * user.defy)+'$'
	}, 1000) */
}
async function autoBalances(pid){
	let contract = pools[pid].contract
    let swapContract = pools[pid].swapContract
    
    if(pools[pid].master == 1){

	rewardPerYear = parseInt(await farmAuto.methods.kinsPerBlock().call()) * 60 * 60 * 24 * 365 / 1e18
    
	pools[pid].lpInFarm = parseInt(await contract.methods.balanceOf(farmAddress).call()) / 1e18
	if(pid >0){
	let resLpToken = await contract.methods.getReserves().call()
	let currentLpTokenPrice = await swapContract.methods.quote(toHexString(1e18), resLpToken._reserve1, resLpToken._reserve0).call() / 1e18
		
	pools[pid].totalSupply = parseInt(await contract.methods.totalSupply().call()) / 1e18
    }
    }
    if(pools[pid].master == 2 ){
        
    rewardPerYear2 = parseInt(await farmAuto2.methods.rewardPerBlock().call()) * 60 * 60 * 24 * 365 / 1e18
    
	pools[pid].lpInFarm = parseInt(await contract.methods.balanceOf(farmAddress2).call()) / 1e18

	let resLpToken = await contract.methods.getReserves().call()
	let currentLpTokenPrice = await swapContract.methods.quote(toHexString(1e18), resLpToken._reserve1, resLpToken._reserve0).call() / 1e18
		
	pools[pid].totalSupply = parseInt(await contract.methods.totalSupply().call()) / 1e18

    }
    if(pools[pid].master == 3){
        
    rewardPerYear3 = parseInt(await farmAuto3.methods.rewardPerBlock().call()) * 60 * 60 * 24 * 365 / 1e9
    
	pools[pid].lpInFarm = parseInt(await contract.methods.balanceOf(farmAddress3).call()) / 1e18

	let resLpToken = await contract.methods.getReserves().call()
	let currentLpTokenPrice = await swapContract.methods.quote(toHexString(1e18), resLpToken._reserve1, resLpToken._reserve0).call() / 1e18
		
	pools[pid].totalSupply = parseInt(await contract.methods.totalSupply().call()) / 1e18

    }
        
    let totalAlloc = 770 *2
    
	if(pid == 0){
		$('.pool-apy-'+pid)[0].innerHTML = '' + (rewardPerYear / ( totalAlloc/200 * (pools[pid].lpInFarm)) * 100).toFixed(2) + '%'
	}
	if(pid == 1){
		pools[pid].defyBal = parseInt(await defyAuto.methods.balanceOf(pools[pid].addr).call()) / 1e18
		$('.pool-apy-'+pid)[0].innerHTML = '' + (rewardPerYear / ( totalAlloc/200 * (pools[pid].lpInFarm / pools[pid].totalSupply) * pools[pid].defyBal) * 100).toFixed(2) + '%'
	}
    if(pid == 2){
		pools[pid].defyBal = parseInt(await defyAuto.methods.balanceOf(pools[pid].addr).call()) / 1e18
		$('.pool-apy-'+pid)[0].innerHTML = '' + (rewardPerYear / ( totalAlloc/200 * (pools[pid].lpInFarm / pools[pid].totalSupply) * pools[pid].defyBal) * 100).toFixed(2) + '%'
	}
    if(pid == 5){
		pools[pid].defyBal = parseInt(await defyAuto.methods.balanceOf(pools[pid].addr).call()) / 1e18
		$('.pool-apy-'+pid)[0].innerHTML = '' + (rewardPerYear / ( totalAlloc/35 * (pools[pid].lpInFarm / pools[pid].totalSupply) * pools[pid].defyBal) * 100).toFixed(2) + '%'
	}
    if(pid == 6){
		pools[pid].defyBal = parseInt(await defyAuto.methods.balanceOf(pools[pid].addr).call()) / 1e18
		$('.pool-apy-'+pid)[0].innerHTML = '' + (rewardPerYear / ( totalAlloc/40 * (pools[pid].lpInFarm / pools[pid].totalSupply) * pools[pid].defyBal) * 100).toFixed(2) + '%'
	}
    if(10 > pid && pid >= 7 ){
		pools[pid].defyBal = parseInt(await defyAuto.methods.balanceOf(pools[pid].addr).call()) / 1e18
		$('.pool-apy-'+pid)[0].innerHTML = '' + (rewardPerYear / ( totalAlloc/25 * (pools[pid].lpInFarm / pools[pid].totalSupply) * pools[pid].defyBal) * 100).toFixed(2) + '%'
	}
    if( 5 > pid && pid >2){
		pools[pid].defyBal = parseInt(await defyAuto.methods.balanceOf(pools[pid].addr).call()) / 1e18
		$('.pool-apy-'+pid)[0].innerHTML = '' + (rewardPerYear / ( totalAlloc/25 * (pools[pid].lpInFarm / pools[pid].totalSupply) * pools[pid].defyBal) * 100).toFixed(2) + '%'
	}
    if(pid == 10){
		pools[pid].defyBal = parseInt(await rndmAuto.methods.balanceOf(pools[pid].addr).call()) / 1e18
		$('.pool-apy-'+pid)[0].innerHTML = '' + (rewardPerYear2 / ( 1000/1000 * (pools[pid].lpInFarm / pools[pid].totalSupply) * pools[pid].defyBal) * 100).toFixed(2) + '%'
	}
    if(pid == 11){
		pools[pid].defyBal = parseInt(await wbnbAuto.methods.balanceOf(pools[pid].addr).call()) / currentApeBnbToDefy / 1e18
		$('.pool-apy-'+pid)[0].innerHTML = '' + (rewardPerYear / ( totalAlloc/20 * (pools[pid].lpInFarm / pools[pid].totalSupply) * pools[pid].defyBal) * 100).toFixed(2) + '%'
	}
    if(pid == 12 || pid == 13){
		pools[pid].defyBal = parseInt(await plazaAuto.methods.balanceOf(pools[pid].addr).call()) / 1e9
		$('.pool-apy-'+pid)[0].innerHTML = '' + (rewardPerYear3 / ( 4000/1000 * (pools[pid].lpInFarm / pools[pid].totalSupply) * pools[pid].defyBal) * 100).toFixed(2) + '%'
	}
    if(pid == 14){
		pools[pid].defyBal = parseInt(await wbnbAuto.methods.balanceOf(pools[pid].addr).call()) / currentApeBnbToDefy / 1e18
		$('.pool-apy-'+pid)[0].innerHTML = '' + (rewardPerYear / ( totalAlloc/25 * (pools[pid].lpInFarm / pools[pid].totalSupply) * pools[pid].defyBal) * 100).toFixed(2) + '%'
	}
    if(pid == 15 ){
		pools[pid].defyBal = parseInt(await defyAuto.methods.balanceOf(pools[pid].addr).call()) / 1e18
		$('.pool-apy-'+pid)[0].innerHTML = '' + (rewardPerYear / ( totalAlloc/25 * (pools[pid].lpInFarm / pools[pid].totalSupply) * pools[pid].defyBal) * 100).toFixed(2) + '%'
	}

}
function getLiqTotals(pid){
	if(pid == 0)
		getKinsLiq(pid)
	if(pid == 1)
		getApeDefyBnbLiq(pid)
    if(pid == 2)
		getApeDefyBusdLiq(pid)
    if(pid == 3)
		getApeKinsMorphLiq(pid)
    if(pid == 4)
		getPaintKinsFtmLiq(pid)
    if(pid == 5)
		getPaintKinsUsdcLiq(pid)
    if(pid == 6)
		getKinsTombLiq(pid)
    if(pid == 7)
		getKinsSpiritLiq(pid)
    if(pid == 8)
		getKinsWethLiq(pid)
    if(pid == 9)
		getKinsElkLiq(pid)
    if(pid == 10)
		getKinsRndmLiq(pid)
    if(pid == 11)
		getMesoFtmLiq(pid)
    if(pid == 12)
		getKinsPlazaLiq(pid)
    if(pid == 13)
		getPlazaFtmLiq(pid)
    if(pid == 14)
		getOliveFtmLiq(pid)
    if(pid == 15)
		getKinsScareLiq(pid)

}


async function getKinsLiq(pid){

	let totalLiqInFarm = currentApeBusdToDefy * (pools[pid].lpInFarm)
	
//	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
}
async function getApeDefyBnbLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await wbnbAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
			
	pools[pid].lpTokenValueTotal = (currentApeBusdToDefy * token0Pool) + (token1Pool * currentBnbPriceToUsd)

	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}
async function getApeDefyBusdLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await busdAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
		
	pools[pid].lpTokenValueTotal = (currentApeBusdToDefy*token0Pool)*2
	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}
async function getApeKinsMorphLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await morphAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
			
	pools[pid].lpTokenValueTotal = (currentBnbPriceToUsd * currentFtmToMorph * token1Pool) + (token0Pool * currentApeBusdToDefy)

	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}

async function getPaintKinsFtmLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await wbnbAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
			
	pools[pid].lpTokenValueTotal = (currentApeBusdToDefy * token0Pool) + (token1Pool * currentBnbPriceToUsd)

	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}
async function getPaintKinsUsdcLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await busdAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
		
	pools[pid].lpTokenValueTotal = (currentApeBusdToDefy*token0Pool)*2
	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}
async function getKinsTombLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await tombAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
			
	pools[pid].lpTokenValueTotal = (currentBnbPriceToUsd * currentFtmToTomb * token1Pool) + (token0Pool * currentApeBusdToDefy)

	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}
async function getKinsSpiritLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await spiritAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
			
	pools[pid].lpTokenValueTotal = (currentBnbPriceToUsd * currentFtmToSpirit * token1Pool) + (token0Pool * currentApeBusdToDefy)

	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}
async function getKinsWethLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await wethAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
			
	pools[pid].lpTokenValueTotal = (currentBnbPriceToUsd * currentFtmToWeth * token1Pool) + (token0Pool * currentApeBusdToDefy)

	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}

async function getKinsElkLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await elkAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
			
	pools[pid].lpTokenValueTotal = (currentBnbPriceToUsd * currentFtmToElk * token1Pool) + (token0Pool * currentApeBusdToDefy)

	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}

async function getKinsRndmLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await rndmAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
			
	pools[pid].lpTokenValueTotal = (currentBnbPriceToUsd * currentFtmToRndm * token1Pool) + (token0Pool * currentApeBusdToDefy)

	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}
async function getMesoFtmLiq(pid){
//	let token0Pool = await mesoAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await wbnbAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
			
	pools[pid].lpTokenValueTotal = 2 * (token1Pool * currentBnbPriceToUsd)

	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}
async function getPlazaFtmLiq(pid){
	let token0Pool = await wbnbAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await plazaAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
			
	pools[pid].lpTokenValueTotal = (currentBnbPriceToUsd * currentFtmToPlaza * token1Pool) + (token0Pool * currentBnbPriceToUsd)

	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}

async function getKinsPlazaLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await plazaAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
			
	pools[pid].lpTokenValueTotal = (currentBnbPriceToUsd * currentFtmToPlaza * token1Pool) + (token0Pool * currentApeBusdToDefy)

	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}
async function getOliveFtmLiq(pid){
//	let token0Pool = await mesoAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
	let token1Pool = await wbnbAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
			
	pools[pid].lpTokenValueTotal = 2 * (token1Pool * currentBnbPriceToUsd)

	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}
async function getKinsScareLiq(pid){
	let token0Pool = await defyAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token0Dec
	let token1Pool = await scareAuto.methods.balanceOf(pools[pid].addr).call() / pools[pid].token1Dec
			
	pools[pid].lpTokenValueTotal = (currentBnbPriceToUsd * currentFtmToScare * token1Pool) + (token0Pool * currentApeBusdToDefy)

	let totalLiqInFarm = pools[pid].lpTokenValueTotal * (pools[pid].lpInFarm*1e18) / (pools[pid].totalSupply*1e18)
	
	$('.pool-liq-'+pid)[0].innerHTML = "" + totalLiqInFarm.toFixed(2)+'$'
	$('.total-pool-liq-'+pid)[0].innerHTML = "" + pools[pid].lpTokenValueTotal.toFixed(2)+'$'
}