let input = document.getElementById('inputfile');
let output = document.getElementById('output');

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
    let noPunctuation = str.replace(/[.,\/#\'!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    
    let myArray = noPunctuation.split(/\s+/);
    console.log(myArray);
    let map = new Map();
    for(var i = 0; i < myArray.length-3;i++){
        let hashindex = myArray[i] + " " + myArray[i+1] + " " + myArray[i+2];
        let hashval = 1;
        if(map.has(hashindex)){
            hashval= map.get(hashindex) + 1;
        } else {
            hashval = 1;
        }
        map.set(hashindex, hashval);
    }

    
    console.log(map);
};