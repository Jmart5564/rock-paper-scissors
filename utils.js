export function getRandomItem(array) {
    const random = Math.floor(Math.random() * array.length);
    const item = array[random];
    return item;
}

export function score(thrown, computer) {
    // *** Implement score function ***
    // See test/tests.js for tests you need to 
    // make pass!
    if (thrown === 'rock' && computer === 'scissors') {
        return 1;
    }
    if (thrown === 'scissors' && computer === 'paper') {
        return 1;
    } 
    if (thrown === 'paper' && computer === 'rock') {
        return 1;
    }
    if (thrown === 'rock' && computer === 'paper') {
        return -1;
    }
    if (thrown === 'scissors' && computer === 'rock') {
        return -1;
    }
    if (thrown === 'paper' && computer === 'scissors') {
        return -1;
    }
    return 0;
}