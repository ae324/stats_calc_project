const seedrandom = require('seedrandom');

class Random {
    //Gets a random integer (seedless)
    static randomIntNoSeed(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    //Gets a random float number (seedless)
    static randomFlNoSeed(min, max) {
        let x = Math.random() * (max - min) + min;
        return Math.floor(x * 100.00) / 100.00;
    }

    //Get a random integer (seed)
    static randomIntSeed(seed, min, max) {
        seedrandom(seed, {global: true});
        return Math.floor(Math.random() * (max - min) + min);
    }

    //Generates a random float number (seed)
    static randomFlSeed(seed, min, max) {
        seedrandom(seed, {global: true});
        let x = Math.random() * (max - min) + min;
        return Math.floor(x * 100.00) / 100.00;
    }

    //Creates a decimal list (seed)
    static randomFlListSeeded(seed, min, max, n) {
        let randArray = [];
        seedrandom(seed, {global: true});

        for (let i = 0; i < n; i++) {
            let randNo = Math.random() * (max - min) + min;
            randArray[i] = Math.floor(randNo * 100.00) / 100.00;
        }
        return randArray;
    }

    //Creates a int list (seed)
    static randomIntListSeeded(seed, min, max, len) {
        let randArray = [];
        seedrandom(seed, {global: true});

        for (let i = 0; i < len; i++) {
            randArray.push(Math.floor(Math.random() * (max - min) + min));
        }
        return randArray;
    }

    //Selects random Item
    static selectRandomItem(list) {
        let randItem = Math.floor(Math.random() * list.length);
        return list[randItem];
    }

    //Selects a random item (seed)
    static selectRandomSeededItem(seed, list) {
        seedrandom(seed, {global: true});
        let randItem = Math.floor(Math.random() * list.length);
        return list[randItem];
    }

    //Selects N amount of random items, with replacement
    static selectNItems(list, n) {
        let returnList = [];
        while (returnList.length < n) {
            let item = Math.floor(Math.random() * list.length) + 0;
            returnList.push(list[item]);
        }
        return returnList;
    }


    //Selects N amount of seeded items, with replacement
    static selectNItemsSeeded(seed, list, n) {
        seedrandom(seed, {global: true});
        let returnList = [];
        while (returnList.length < n) {
            let item = Math.floor(Math.random() * list.length) + 0;
            returnList.push(list[item]);
        }
        return returnList;
    }

}

module.exports = Random;
