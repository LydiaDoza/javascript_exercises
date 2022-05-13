/**
 * prints to console log the following for numbers 0 to 100:
 *  fizz for numbers divisible by 2
 *  buzz for numbers divisible by 3
 *  the number if it is divisble by neither
 */
function fizzbuzz(){
    for(let i = 0; i <= 100; i++){
        var str_output = "";
        if(i % 2 === 0){
            str_output += "fizz";
        }
        if(i % 3 === 0){
            str_output += "buzz";
        }
        if(str_output === ""){
            str_output = i.toString();
        }
        console.log(str_output);
    }
}


fizzbuzz();