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
console.log(cezar(code));