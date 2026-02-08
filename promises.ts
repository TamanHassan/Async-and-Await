// Part 1
function coinFlip(): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log("Coin flip started");
    const isHeads = Math.random() < 0.5;

    if (isHeads) {
        resolve("You win! Heads!");
    } else {
        reject("You lose! Tails!");
    }
    });
}


    

// Part 2
function fetchAdvice(query: string): Promise<void> {
    return fetch(`https://api.adviceslip.com/advice/search/${query}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch advice");
            }
            return response.json ();
        })
        .then((data) => {
            if (data.slips && data.slips.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.slips.length);
                console.log("Advice:", data.slips[randomIndex].advice);
            } else {
                console.log("No advice found for the query:", query);
            }
        })
        .catch((error) => {
            console.error("Error fetching advice:", error);
        });
}

coinFlip()
    .then((winMessage) => {
        console.log(winMessage);
        console.log("Fetching advice for you...");
        return fetchAdvice("success");
    })
    .catch((loseMessage) => {
        console.error(loseMessage);
        console.log("Better luck next time");

    });





