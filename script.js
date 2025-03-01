const domain = "hetesaus.github.io";

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get channels from URL parameters
const channel1Name = getQueryParam("channel1");
const channel2Name = getQueryParam("channel2");

// Load the Twitch Player API script dynamically
const script = document.createElement("script");
script.src = "https://embed.twitch.tv/embed/v1.js";
script.onload = initializePlayers;
document.body.appendChild(script);

// Global player variables
let player1, player2;

function initializePlayers() {
    if (channel1Name) {
        player1 = new Twitch.Player("player1", {
            channel: channel1Name,
            width: "100%",
            height: "100%",
            parent: [domain]
        });

        player1.addEventListener(Twitch.Player.READY, () => {
            player1.setMuted(false); // Player 1 starts unmuted
        });
    }

    if (channel2Name) {
        player2 = new Twitch.Player("player2", {
            channel: channel2Name,
            width: "100%",
            height: "100%",
            parent: [domain]
        });

        player2.addEventListener(Twitch.Player.READY, () => {
            player2.setMuted(true); // Player 2 starts muted
        });
    }
}

// Function to switch mute states
function switchMute() {
    if (player1 && player2) {
        const isPlayer1Muted = player1.isMuted();
        player1.setMuted(!isPlayer1Muted);
        player2.setMuted(isPlayer1Muted);
    }
}
