class WordScrambler {
    constructor(el) {
        this.el = document.querySelector('.bio').innerHTML;
        this.words = this.el.split(" ");
        this.buffer = [];

        // Runs program
        for (let i = 0; i < this.words.length; i++) {
            this.buffer.push(this.scramble(this.words[i]));
        } 
        // Returns scrambled words and adds them to markup
        document.querySelector('.bio').innerHTML = '<p>' + this.buffer.join(" ") + '</p>';
    }

    // Main function that performs all
    scramble(letters) {
        let tmp;
        let allSymbols = []

        // Splits the content into an array
        letters = letters.split("");

        // Loops through the array and removes symbols
        for (let i = 0; i < letters.length; i++) {
            function removeSymbols (letters,idx) {
                if ( letters[idx] === "," 
                || letters[idx] === "." 
                || letters[idx] === "!" 
                || letters[idx] === "'"
                || letters[idx] === "-"  
                || letters[idx] === '"'
                ){
                    // Stores symbols in an array
                    allSymbols.push({symbol:letters[idx], index:idx});
                    letters.splice(idx, 1);
                } 
                return letters;
            }
            removeSymbols(letters, i);
        }
    
        // Loops through the words and randomizes the letters except the first and last
        for (let i = 1; i < letters.length - 1; i++) {
            let randomInt = Math.floor(Math.random() * (letters.length - 2) + 1);
    
            tmp = letters[randomInt];
            letters[randomInt] = letters[i];
            letters[i] = tmp;
        };
    
        // Loops through the stored symbols and adds them back
        for (let i = 0; i < allSymbols.length; i++) {
            // Adds allSymbols
            function addSymbols(letters, i) {
                letters.splice(allSymbols[i].index, 0, allSymbols[i].symbol);
                return letters;
            }
            addSymbols(letters, i);
        }
        return letters.join("");
    } 
}

let ws = new WordScrambler("article");