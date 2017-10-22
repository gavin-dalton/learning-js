function Player(n) {
    this.playerName = n;
    this.playerHealth = 100;
    this.giveHealth = (targetPlayer) => {
        targetPlayer.playerHealth += 1;
        console.log(this.playerName + " gave health to " + targetPlayer.playerName);
    };
}

var Rocky = new Player("Rocky");
var Andy = new Player("Andy");

Rocky.giveHealth(Andy);

console.log(Rocky.playerName + " has " + Rocky.playerHealth + " health");
console.log(Andy.playerName + " has " + Andy.playerHealth + " health");
