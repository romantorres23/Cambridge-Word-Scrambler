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
    // Adds allSymbols
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