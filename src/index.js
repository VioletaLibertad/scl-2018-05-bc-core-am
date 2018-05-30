function code() {
  let msgToCode = document.getElementById("codeBox").value;
  document.getElementById("codedText").innerHTML = msgToCode;

}

function decode() {
  let msgtoDecode = document.getElementById("decodeBox").value;
  document.getElementById("decodedText").innerHTML = msgtoDecode;
}




/*
const str = "HOLA ESTE ES UN STRING";
let result = "";

for = (let i = 0; i < str.length; i++) {

console.log('Esta es la iteración número: ' + i + ',letra: ' + str[i]);

result += str[i].toLowerCase();
console.log('El nuevo string: '+ result);

}*/