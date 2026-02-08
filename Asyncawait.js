async function coinFlip() {
    console.log("Coin flip started");
    const isHeads = Math.random() < 0.5;

    if (isHeads) {
        return "You win! Heads!";
    } else {
        throw new Error("You lose! Tails!");
    }
}

const fetchAdvise = async (query) => {
    try {
        const response = await fetch(`https://api.adviceslip.com/advice/search/${query}`);
        if (!response.ok) {
            throw new Error("Failed to fetch advice");
        }

        const data = await response.json();
        if (data.slips && data.slips.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.slips.length);
            console.log("Advice:", data.slips[randomIndex].advice);
        } else {
            console.log("No advice found for the query:", query);
        }
    } catch (error) {
        console.error("Error fetching advice:", error);
    }
};

const playGame = async () => {
    try {
        const winMessage = await coinFlip();
        console.log(winMessage);
        console.log("Fetching advice for you..");
        await fetchAdvise("success");
    } catch (error) {
        console.error(error.message);
        console.log("Better luck next time");
    }
    };

playGame();


