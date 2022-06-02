
document.getElementById('in').oninput = function() {
    //Шифровка
    let help = document.getElementById('help');
    help.innerHTML = String.fromCharCode(54);
    let str = this.value;
    let count = 2;
    let out = '';
    // console.log (str.charCodeAt(3));
    for(let i = 0; i < str.length; i++ ){
        let cezar = str.charCodeAt(i);
            cezar = cezar + count;
            out += String.fromCharCode(cezar);
    }
    document.getElementById('out').innerHTML = out;
};

document.getElementById('out2').oninput = function() {
    let count = 2;
    let str = this.value;
    let out = '';
        for(let i = 0; i < str.length; i++ ){
          let    cezar = str.charCodeAt(i);
                 cezar = cezar - count;
                 out += String.fromCharCode(cezar);
    }
    document.getElementById('out3').innerHTML = out;
};
 



// let code = 'hello';

// let code1 = 'abc';

// function cezar (sting) {
//     const count = 2;
//     let clone = '';
//     for(let value in sting){
//        let code = sting.charCodeAt(value);
//        code = code + count;
//        clone += String.fromCharCode(code);
//     }
//  return clone;
// }
// console.log(cezar(code1));
// console.log(cezar(code));