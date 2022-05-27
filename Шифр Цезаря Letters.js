document.getElementById('in').oninput = function() {
    let help = document.getElementById('help');
    help.innerHTML = String.fromCharCode(112);
    let str = this.value;
    console.log(str.charCodeAt(0)); 
};

let code = 'hello';

let code1 = 'abc';

function cezar (sting) {
    const count = 2;
    let clone = '';
    for(let value in sting){
       let code = sting.charCodeAt(value);
       code = code + count;
       clone += String.fromCharCode(code);
    }
 return clone;
}
console.log(cezar(code1));