window.cipher = {
  encode: (msgToCode, key) => {
    
    let msg = msgToCode.toUpperCase();
    let asciiMsg = "";
    let newAscii = "";
    let codedMsg = "";
    
    for (let i = 0; i < msg.length; i++) {
     // console.log('hola')
      asciiMsg = msg.charCodeAt(i);
      if (asciiMsg >= 65 && asciiMsg <= 90) {
        newAscii = (asciiMsg - 65 + key) % 26 + 65;
        codedMsg += String.fromCharCode(newAscii);
      }  
    }
    return codedMsg;
    
  },


  decode: () => {
    /* Acá va tu código. Otro metodo*/
  }
}

/* Acá va tu código. Estos son metodos del objeto cipher. 
    Son acciones o comportamientos que puede tener un objeto*/

/*
function code() {
  let msgToCode = document.getElementById("codeBox").value;
  let key = document.getElementById("keyBtn").value;
  let asciiMsg = "";
  for (let i = 0; i < msgToCode.length; i++) {
    asciiMsg = msgToCode.charCodeAt(i);
    /*console.log(asciiMsg)*/
  


/*
const str = "HOLA ESTE ES UN STRING";
let result = "";

for (let i = 0; i < str.length; i++) {

console.log('Esta es la iteración número: ' + i + ',letra: ' + str[i]);

result += str[i].toLowerCase();
console.log('El nuevo string: '+ result);

}*/