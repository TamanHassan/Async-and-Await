function coinFlip() {
    return new Promise(function (resolve, reject) {
        console.log("Coin flip started");
        var isHeads = Math.random() < 0.5;
        if (isHeads) {
            resolve("You win! Heads!");
        }
        else {
            reject("You lose! Tails!");
        }
    });
}
coinFlip()
    .then(function (result) { return console.log(result); })
    .catch(function (error) { return console.error(error); });
