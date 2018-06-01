window.onload = () => {
  //Cifrado
  document.getElementById("codeBtn").addEventListener("click", () => { 
    let msgToCode = document.getElementById("codeBox").value;
    let key = parseInt(document.getElementById("keyBtn").value);
    let codedMsg = window.cipher.encode(msgToCode, key);
    document.getElementById("codedText").innerHTML = codedMsg;
  });

  //Descrifrado
  document.getElementById("decodeBtn").addEventListener("click", () => {
    let msgtoDecode = document.getElementById("decodeBox").value;
    let key = parseInt(document.getElementById("keyBtn").value);
    let decodedMsg = window.cipher.decode(msgtoDecode, key);
    document.getElementById("decodedText").innerHTML = decodedMsg;
  });
}
