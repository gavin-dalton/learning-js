var player = {
    playerName : "",
    playerHealth : 100,
    giveHealthTo : (targetPlayer) => {
        targetPlayer.playerHealth += 1;
        console.log(this.playerName + " gave health to " + targetPlayer.playerName);
    }
}

var Rocky = new player;
var Andy = player;

Rocky.playerName = "Rocky";
Andy.playerName = "Andy";

Rocky.giveHealthTo(Andy);

console.log(Rocky.playerName + " has " + Rocky.playerHealth + " health");
console.log(Andy.playerName + " has " + Andy.playerHealth + " health");
