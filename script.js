const domain = "hetesaus.github.io";

function getQueryParam(param) {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(param);
}

const channel1Name = getQueryParam("channel1");
const channel2Name = getQueryParam("channel2");

if (channelName) {
	const player1 = document.getElementById("player1");
	const player2 = document.getElementById("player2");
	
	player1.src = `https://player.twitch.tv/?channel=${channelName1}&parent=${domain}`;
	player1.src = `https://player.twitch.tv/?channel=${channelName2}&parent=${domain}`;
	
	document.title = "multi-twitch";
}