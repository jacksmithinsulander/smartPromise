function landingPage() {
	let header = document.createElement("header")
	header.innerHTML="";
	header.id = "header"
	header.innerHTML = `<figure id="homeBtn">
		<img src="imgs/logoTransparentBackground.webp"
		id="homeBtnImg"></img></figure>`;

/*
const walletConnecrBtn = document.createElement("button");
walletConnectBtn.id = "walletConnectBtn";
walletConnectBtn.innerText = "Launch dApp"
*/

	const dappLaunchBtn = document.createElement("button");
	dappLaunchBtn.id = "dappLaunchBtn";
	dappLaunchBtn.innerText = "Launch dApp"


	let main = document.createElement("main")
	main.innerHTML="";
	main.id = "main"

	let sectionOne = document.createElement("section");
	sectionOne.id = "sectionOne"
	sectionOne.classList.add("section")
	sectionOne.innerHTML = `
        	<h1 class="sectionTitles" id="sectionOneTitle">Setting a new standard for promises.</h1>
        	<p id="sectionOneSmallText">We believe in a revolution within the DeFi space, and for that trustworthy tools are needed to engage a trustless world of finance.`;

	let sectionTwo = document.createElement("section");
	sectionTwo.id = "sectionTwo"
	sectionTwo.classList = "section"
	sectionTwo.innerHTML = `
		<h1 class="sectionTitles" id="sectionTwoTitle">Two</h1>
		<p id="sectionOneSmallText">two</p>`;

	let sectionThree = document.createElement("section");
	sectionThree.id = "sectionTwo"
	sectionThree.classList = "section"
	sectionThree.innerHTML = `<h1 class="sectionTitles" id="sectionThreeTitle">Check one Three</h1>`

	let footer = document.createElement("footer")
	let footerInfo = document.createElement("h1")
	footer.id = "footer"
	footerInfo.id = "footerInfo"
	footerInfo.innerText = "this is the footer"

	document.body.append(header, main, footer)
	header.append(dappLaunchBtn)
	main.append(sectionOne, sectionTwo, sectionThree)

	footer.append(footerInfo)
	
	dappLaunchBtn.addEventListener("click", async () => {
		launchApp();
	})
}

function launchApp() {
	main.innerHTML = "";
	header.innerHTML = `<figure id="homeBtn">
		<img src="imgs/logoTransparentBackground.webp"
		id="homeBtnImg"></img></figure>`;
	let homeBtn = document.getElementById("homeBtn");
	homeBtn.addEventListener("click", () => {
		landingPage();
	});
	document.body.id = "bodyApp";
	let interfaceSection = document.createElement("section");
	interfaceSection.id = "interfaceSection"
	let createSmartPromiseInterface = document.createElement("details");
	createSmartPromiseInterface.id = "createSmartPromiseInterface";
	createSmartPromiseInterface.innerHTML = `<summary class="menuTitles fontTitle" >Create</summary>
		<form id="createSmartPromiseInterface" class="bottomInterface font">
			
			<input  type="text" id="promiseTitle" name="promiseTitle" class="inputStyling"> </input>
			<input type="text" id="promiseCollateral" name="promiseCollateral" class="inputStyling"> </input>
			<button id="createPromiseBtn" class="interfaceBtns">Create Promise </button>
			</form>`;
	let joinPromiseInterface = document.createElement("details");
	joinPromiseInterface.id = "joinPromiseInterface";
	joinPromiseInterface.classlist = "menuTitles";
	joinPromiseInterface.innerHTML = `<summary class="menuTitles fontTitle">Join</summary>
		<form id="joinSmartPromiseInterface" class="bottomInterface font">
			<input  type="text" id="promiseID" class="font inputStyling"> </input>
			<input type="text" id="promiseMatchCollateral" class="inputStyling font"></input>
			<button id="joinPromiseBtn" class="interfaceBtns">Join Promise </button>
		</form>`;
	let endPromiseInterface = document.createElement("details");
	endPromiseInterface.id = "endPromiseInterface";
	endPromiseInterface.classlist = "menuTitles";
	endPromiseInterface.innerHTML = `<summary class="menuTitles fontTitle">End</summary>
		<form id="endSmartPromiseInterface" class="bottomInterface font">
			<input  type="text" id="promiseIDToEnd" class="font inputStyling"> </input>
			<button id="endPromiseBtn" class="interfaceBtns">End Promise </button>
		</form>`;

	main.append(interfaceSection);
	interfaceSection.append(createSmartPromiseInterface, joinPromiseInterface, endPromiseInterface);
	
	let menuTitles = document.getElementsByClassName("menuTitles");
	
	createSmartPromiseInterface.open = true;
	
	const details = document.querySelectorAll("details");

	details.forEach(function(detail) {
		const summary = detail.querySelector("summary");
		summary.addEventListener("click", function() {
			// Close all other open details elements
    			details.forEach(function(otherDetail) {
      				if (otherDetail !== detail) {
        				otherDetail.removeAttribute("open");
      				}
    			});
		});
	});
}

landingPage();

/*
dappLaunchBtn.addEventListener("click", async () => {
	launchApp();

})
*/

// Appen
/* 
const walletConnectBtn = document.createElement("button");
let createPromiseBtn = document.createElement("button");
let joinPromiseBtn = document.createElement("button");
let endPromiseBtn = document.createElement("button");


let titleInput = document.createElement("input");
let valueInput = document.createElement("input");
let uidInput = document.createElement("input");
let joinPromiseValue = document.createElement("input");
let endPromiseUidValue = document.createElement("input");

titleInput.id = "titleInput";
valueInput.id = "valueInput";
uidInput.id = "uidInput";
endPromiseUidValue.id = "endPromiseUidValue";
joinPromiseValue.id = "joinPromiseValue";
createPromiseBtn.id = "createPromiseBtn";
joinPromiseBtn.id = "joinPromiseBtn";
endPromiseBtn.id = "endPromiseBtn";
walletConnectBtn.id = "walletConnectBtn";

titleInput.placeholder = "Title for promise";
valueInput.placeholder = "ETH amount";
uidInput.placeholder = "Promise ID";
joinPromiseValue.placeholder = "ETH amount (join)";
endPromiseUidValue.placeholder = "ID of promise you want to end";


createPromiseBtn.innerText = "Create SmartPromise";
joinPromiseBtn.innerText = "Join SmartPromise";
endPromiseBtn.innerText = "End SmartPromise";
walletConnectBtn.innertext = "Connect Wallet"

document.body
.append(mainHeader, titleInput, valueInput, createPromiseBtn, joinPromiseBtn, uidInput, joinPromiseValue, joinPromiseBtn, endPromiseBtn, endPromiseUidValue, walletConnectBtn)
 */
//----------- RIKTAR JS -> SMART CONTRACT ----------------//

const smartContractInteraction = document.createElement("form");

const smartPromiseAddress = "0x7E989e0c8e43B488F2B820Ab0A4c38Fd1cD86620";

const smartPromiseAbi = [{ "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "promiseIdentifier", "type": "uint256" }], "name": "SmartPromiseCreated", "type": "event" }, { "inputs": [{ "internalType": "string", "name": "_promiseTitle", "type": "string" }], "name": "createSmartPromise", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "emptyPromiseData", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_promiseUID", "type": "uint256" }], "name": "endSmartPromise", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_promiseUID", "type": "uint256" }], "name": "joinPromise", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_promiseUID", "type": "uint256" }], "name": "showPromiseParticipants", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_promiseUID", "type": "uint256" }], "name": "signFullfilledPromise", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "smartPromises", "outputs": [{ "internalType": "address", "name": "initialDepositor", "type": "address" }, { "internalType": "uint256", "name": "promiseCollateral", "type": "uint256" }, { "internalType": "string", "name": "promiseTitle", "type": "string" }, { "internalType": "uint256", "name": "promiseIdentifier", "type": "uint256" }, { "internalType": "uint256", "name": "promiseAcceptDeadline", "type": "uint256" }], "stateMutability": "view", "type": "function" }]


const provider = new ethers.providers.Web3Provider(window.ethereum);

const smartPromiseContract = new ethers.Contract(smartPromiseAddress, smartPromiseAbi, provider);

const filter = smartPromiseContract.filters.SmartPromiseCreated(null);

const results = await smartPromiseContract.queryFilter(filter, 8327570, 8328820)

let signer;

const listenToEvent = () => {
	const contract = new ethers.Contract(
		smartPromiseAddress,
		smartPromiseAbi,
		signer
	);
	contract.on("SmartPromiseCreated", (promiseIdentifier) => {
		let data = {
			promiseIdentifier: promiseIdentifier.toString()
		};
		console.log("listenToEvent", data);

		let newPromiseDiv = document.createElement("div")
		let newPromisePara = document.createElement("p")
		newPromiseDiv.id = "newPromiseDiv"
		newPromisePara.id = "newPromisePara"
		newPromisePara.innerHTML = `Your promise ID is: ${data.promiseIdentifier} <br><br> Please send this to promise participants`
		otherContentWrapper.append(newPromiseDiv);
		newPromiseDiv.append(newPromisePara);
	});
}

const connect = async () => {
	if (typeof window.ethereum !== "undefined") {
		await window.ethereum.request({
			method: "eth_requestAccounts",
		});
		signer = provider.getSigner();
		smartPromiseContract.connect(signer);
		listenToEvent();
	} else {
		console.log("No metamask");
	}
};
/*
walletConnectBtn.addEventListener("click", async () => {
	await connect();

})
*/

console.log("senast log", results);

//----------FUNKTIONER TILL KEDJAN-----------//

async function createSmartPromiseJS() {
	await connect();

	let smartPromiseTitle = titleInput.value;
	let smartPromiseValue = valueInput.value;
	const payableValue = { value: ethers.utils.parseEther(smartPromiseValue) }
	const txResponse = await smartPromiseContract.connect(signer).createSmartPromise(smartPromiseTitle, payableValue);
	await txResponse.wait();
	console.log("Transaction hash: ", txResponse);
	if (txResponse) {
		let completedPromiseDiv = document.createElement("div");
		let completedPromisePara = document.createElement("p");

		completedPromisePara.innerText = "finished transac"
		completedPromiseDiv.appendChild(completedPromisePara)
	}

}
createPromiseBtn.addEventListener("click", () => {
	createSmartPromiseJS();
});

async function joinPromiseJS() {
	await connect();
	let uidInputValue = uidInput.value;
	let joinValue = joinPromiseValue.value;
	const payableValue = { value: ethers.utils.parseEther(joinValue) }
	const txResponse = await smartPromiseContract.connect(signer).joinPromise(uidInputValue, payableValue);
	await txResponse.wait()
}

joinPromiseBtn.addEventListener("click", () => {
	joinPromiseJS();
});

async function endPromiseJS() {
	await connect();
	let endValueID = endPromiseUidValue.value;
	const payableValue = { value: ethers.utils.parseEther("0") };
	const txResponse = await smartPromiseContract.connect(signer).endSmartPromise(endValueID, payableValue);
	await txResponse.wait()
}
endPromiseBtn.addEventListener("click", () => {
	endPromiseJS();
});

//----------EVENTLISTENERS TYP---------//