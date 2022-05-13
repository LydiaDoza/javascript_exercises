let input = document.getElementById('inputfile');
let wordlist = document.getElementById('wordlist');

function previewFile(){
    let files = input.files;
    if (files.length == 0) return;
    const file = files [0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        analyzeFile(file);
    };
    reader.readAsText(file);
};

function analyzeFile(str){
    // remove punctuation and lowercase letters
    let noPunctuation = str.replace(/[.,\/#\'\"\”\’\“!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    let myArray = noPunctuation.split(/\s+/);
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
    // take only first 100 entries or sorted array
    const hundredTop = frequencyArray.slice(0,100);
    var strWordList = "";
    hundredTop.forEach((arrayPair) => {
        strWordList = strWordList.concat("\n",`${arrayPair[0]} - ${arrayPair[1]}`);
        });

    wordlist.textContent = strWordList;
};