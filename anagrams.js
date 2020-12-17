/*
ANAGRAMS
Given two strings, write a function to determine if the second string 
is an anagram of the first. An anagram is a word, phrase, or name 
formed by rearranging the letters of another, such as cinema, formed from iceman.

anagramChecker("windmill", 'mindwill'); // windmill & mindwill are anagram
anagramChecker("windmill", 'mIndwiLl'); // windmill & mIndwiLl are anagram
anagramChecker("windmill", 'mindwilm'); // windmill & mindwilm aren't anagram
anagramChecker("windmill", 'mindwilll'); // lengths of windmill & mindwilll don't match
anagramChecker("", ''); //  &  are anagram
*/

let anagramChecker = (arr1, arr2) =>{
    if(arr1.length != arr2.length){
        return console.log(`lengths of ${arr1} & ${arr2} don't match`);
    }
    let frequencyCounter1 = {} 
    // O(n)
    for (let i of arr1){
        let letter = i.toLowerCase();
        //if letter exists, increment, otherwise set to 1
        if (frequencyCounter1[letter] > 0){
            frequencyCounter1[letter] += 1
        } else {
            frequencyCounter1[letter] = 1
        };
    };

    //console.log(frequencyCounter1);
    //O(n)
    for(let i of arr2){
        let letter = i.toLowerCase();
        /*
        if can't find the letter or letter count is zero then 
        it's not an anagram, otherwise minus 1 from the count
        */
        if(!(frequencyCounter1[letter])){
            return console.log(`${arr1} & ${arr2} aren't anagram`);
        }
        frequencyCounter1[letter] -= 1
    }
    //console.log(frequencyCounter1);
    return console.log(`${arr1} & ${arr2} are anagram`);
};

// the solution is O(n) in time complexity
//test cases
anagramChecker("windmill", 'mindwill');
anagramChecker("windmill", 'mIndwiLl');
anagramChecker("windmill", 'mindwilm');
anagramChecker("windmill", 'mindwilll');
anagramChecker("", '');