// class WordScrambler {
//     constructor(el) {
//         this.el = document.querySelector(el);
//         this.bio = this.el.innerHTML;

//         this.splitAndScramble(this.bio);
//     }


//     ///**Defines function that splits the elements into spans */
//     splitAndScramble(bio) {
//         // console.log(bio);
//         let arr = bio.split(" ");
//         console.log(arr);
//         let buffer = [];

//         for (let i = 0; i < arr.length; i++) {
//             buffer.push(this.scramble(arr[i]));
//         };

//         document.querySelector('.bio').innerHTML = '<p>' + buffer.join(' ') + '</p>';
//     };

//     scramble(word) {
//         let scrambled = "";
//         let tmp = "";
//         console.log(word);

//         for (let i = 1; i < word.length - 1; i++) {
//             let randomInt = Math.floor(Math.random() * (word.length - 2) + 1);

//             tmp = word[randomInt];
//             word[i] = word[randomInt];
//             tmp = word[i];
            
//         } 
//         return 
//     }

// }

// let ws = new WordScrambler(".bio");

let el = document.querySelector('.bio').innerHTML;

let words = el.split(" ");

let buffer = [];

// Loops through letters
function scramble(letters) {
    let tmp;
    let allSymbols = []
    
    // Removes allSymbols
    function removeSymbols(letters,idx) {
        if ( letters[idx] === "," 
        || letters[idx] === "." 
        || letters[idx] === "!" 
        || letters[idx] === "'"
        || letters[idx] === "-"  
        || letters[idx] === '"'
        ){
            allSymbols.push({symbol:letters[idx], index:idx});
            letters.splice(idx, 1);
        } 
        return letters;
    }

    function addSymbols(letters, i) {
        letters.splice(allSymbols[i].index, 0, allSymbols[i].symbol);

        return letters;
    }
    letters = letters.split("");

    for (let i = 0; i < letters.length; i++) {
        letters = removeSymbols(letters, i);
    }

    for (let i = 1; i < letters.length - 1; i++) {
        // console.log(letters[i]);
        let randomInt = Math.floor(Math.random() * (letters.length - 2) + 1);

        tmp = letters[randomInt];
        letters[randomInt] = letters[i];
        letters[i] = tmp;
    };

    for (let i = 0; i < allSymbols.length; i++) {
        letters = addSymbols(letters, i);
    }

    return letters.join("");
}

// Loops through words
for (let i = 0; i < words.length; i++) {
    // console.log(words[i]);
    buffer.push(scramble(words[i]));
} 
document.querySelector('.bio').innerHTML = '<p>' + buffer.join(" ") + '</p>';