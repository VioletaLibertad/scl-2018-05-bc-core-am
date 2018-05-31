window.cipher = {
  //Codificar
  encode: (msgToCode, key) => {
    //Variables
    let msg = msgToCode.toUpperCase();
    let asciiMsg = "";
    let newAscii = "";
    let codedMsg = "";
    //Métodos
    for (let i = 0; i < msg.length; i++) {
      asciiMsg = msg.charCodeAt(i);
      if (asciiMsg >= 65 && asciiMsg <= 90) {
        newAscii = (asciiMsg - 65 + key) % 26 + 65;
        codedMsg += String.fromCharCode(newAscii);
      }  
    }
    return codedMsg;
  },

  //Decodificar
  decode: (msgToDecode, key) => {
    //Variables
    let msg2 = msgToDecode.toUpperCase();
    let asciiMsg2 = "";
    let newAscii2 = "";
    let decodedMsg = "";
    //Métodos
    for (let i = 0; i < msg2.length; i++) {
      asciiMsg2 = msg2.charCodeAt(i);
      if (asciiMsg2 >= 65 && asciiMsg2 <= 90) {
        newAscii2 = (asciiMsg2 - 65 - key) % 26 + 65;
        decodedMsg += String.fromCharCode(newAscii2);
      }
    }
    return decodedMsg;
  }
};
