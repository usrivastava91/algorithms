var anagram = (string1,string2) => {

//   var s1 = string1.split('').sort().join();
//   var s2 = string2.split('').sort().join();
//   return s1 === s2;

    const charCount = new Map();  //map with keys of type string to stor the character, and value of type number to store number of occurance of char

    string1.split('').map((char) => {
          charCount.set(char,(charCount.get(char) || 0 ) +1);
        })
    string2.split('').map((char) => {
        if(!charCount.has(char)) 
            return false;
        charCount.set(char,charCount.get(char) - 1);
    })

    return Array.from(charCount.values()).every(val => val === 0)
}



module.exports=anagram;