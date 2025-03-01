const domain = "hetesaus.github.io";

function getQueryParam(param) {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(param);
}

const channel1Name = getQueryParam("channel").split(",")[0];
const channel2Name = getQueryParam("channel2").split(",")[1];

if (channel1Name) {
	const player1 = document.getElementById("player1");
	player1.src = `https://player.twitch.tv/?channel=${channel1Name}&parent=${domain}`;
}

if (channel2Name) {
	const player2 = document.getElementById("player2");
	player2.src = `https://player.twitch.tv/?channel=${channel2Name}&parent=${domain}`;
}

document.title = "multi-twitch";