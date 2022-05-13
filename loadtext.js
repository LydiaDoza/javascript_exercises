let input = document.getElementById('inputfile');
let output = document.getElementById('output');
let wordlist = document.getElementById('wordlist');

function previewFile(){
    let files = input.files;
    console.log("words");
    if (files.length == 0) return;
    const file = files [0];

    let reader = new FileReader();
    
    reader.onload = (e) => {
        const file = e.target.result;
        output.textContent = file;
        printFile(file);
    };
    reader.readAsText(file);

};

function printFile(str){
    console.log(str);
    // remove punctuation and lowercase letters
    let noPunctuation = str.replace(/[.,\/#\'!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    
    let myArray = noPunctuation.split(/\s+/);
    console.log(myArray);
    let map = {};
    // populate associated array with 3 words: count
    for(var i = 0; i < myArray.length-2;i++){
        let hashindex = myArray[i] + " " + myArray[i+1] + " " + myArray[i+2];
        if(map.hasOwnProperty(hashindex)){
            map[hashindex]++;
        } else {
            map[hashindex] = 1;
        }
    }

    // convert object into an array of 2-element arrays with [(3 words), count]
    const frequencyArray = Object.keys(map).map(key => [key, map[key]]);
    // sort the array by descending order
    frequencyArray.sort((a,b) => b[1] - a[1]);
    console.log(frequencyArray);

    // take only first 100 entries or sorted array
    const hundredTop = frequencyArray.slice(0,100);
    console.log(hundredTop);
    var strWordList = "";
    hundredTop.forEach((arrayPair) => {
        var line = arrayPair[0] + " - " + arrayPair[1];
        console.log(line);
        strWordList = strWordList.concat("\n",`${arrayPair[0]} - ${arrayPair[1]}`);
        });

    wordlist.textContent = strWordList;
};