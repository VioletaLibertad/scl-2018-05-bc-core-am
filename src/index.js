window.onload = () => {
  document.getElementById("codeBtn").addEventListener("click", () => { 
    let msgToCode = document.getElementById("codeBox").value;
    let key = parseInt(document.getElementById("keyBtn").value);
    let codedMsg = window.cipher.encode(msgToCode, key);
    document.getElementById("codedText").innerHTML = codedMsg;
  });
}

  
/*HOLA en key=3 es KROD*/


function decode() {
  let msgtoDecode = document.getElementById("decodeBox").value;
  document.getElementById("decodedText").innerHTML = msgtoDecode;
}
