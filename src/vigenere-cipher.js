const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
   
  constructor(isDirect = true) {
      this.isDirect = isDirect
  }

  encrypt(message, key) {
    if (!message || !key){
      throw Error("Incorrect arguments!");
    } 
    let encryptResult = [];
    let counter = 0;
    message = message.toUpperCase().split('');
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++) {
        if (message[i].charCodeAt(0) >= 65 && message[i].charCodeAt(0) <= 90) {
          let value = counter++ % key.length
          let code = message[i].charCodeAt(0) - 65 + key[value].charCodeAt(0)
          message[i] = String.fromCharCode((code - 65) % 26 + 65);
        }
        encryptResult.push(message[i]);
    }
    if(this.isDirect){
      return encryptResult.join('')
    }
    return encryptResult.reverse().join('')
  }

  decrypt(message, key) {
    if (!message || !key){
      throw Error("Incorrect arguments!");
    } 
    let decryptResult = [];
    let counter = 0;
    message = message.toUpperCase().split('');
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++) {
        if (message[i].charCodeAt(0) >= 65 && message[i].charCodeAt(0) <= 90) {
          let value = counter++ % key.length
          let code = message[i].charCodeAt(0) + 65 - key[value].charCodeAt(0)
          message[i] = String.fromCharCode((code + 65) % 26 + 65);
        }
        decryptResult.push(message[i]);
    }
    if(this.isDirect){
      return decryptResult.join('')
    }
    return decryptResult.reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
