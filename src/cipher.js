window.cipher = {
  //Codificar
  encode: (msgToCode, key) => {
    //Variables
    let msg = msgToCode;
    let asciiMsg = "";
    let newAscii = "";
    let codedMsg = "";
    //Métodos
    for (let i = 0; i < msg.length; i++) {
      asciiMsg = msg.charCodeAt(i);
      if (asciiMsg >= 65 && asciiMsg <= 90) {
        newAscii = (asciiMsg - 65 + key) % 26 + 65;
        codedMsg += String.fromCharCode(newAscii);
      } else if (asciiMsg >= 32 && asciiMsg <= 64) {
        codedMsg += String.fromCharCode(asciiMsg);
      } else if (asciiMsg >= 97 && asciiMsg <=  122) {
        newAscii = (asciiMsg - 97 + key) % 26 + 97;
        codedMsg += String.fromCharCode(newAscii);
      }
    }
    return codedMsg;
  },

  //Decodificar
  decode: (msgToDecode, key) => {
    //Variables
    let msg2 = msgToDecode;
    let asciiMsg2 = "";
    let newAscii2 = "";
    let decodedMsg = "";
    //Métodos
    for (let i = 0; i < msg2.length; i++) {
      asciiMsg2 = msg2.charCodeAt(i);
      if (asciiMsg2 >= 65 && asciiMsg2 <= 90) {
        newAscii2 = (asciiMsg2 + 65 - key) % 26 + 65;
        decodedMsg += String.fromCharCode(newAscii2);
      } else if (asciiMsg2 >= 32 && asciiMsg2 <= 64) {
        decodedMsg += String.fromCharCode(asciiMsg2);
      } else if (asciiMsg2 >= 97 && asciiMsg2 <= 122) {
        newAscii2 = (asciiMsg2 - 122 - key) % 26 + 122;
        decodedMsg += String.fromCharCode(newAscii2);
      }
    }
    return decodedMsg;
  }
};
