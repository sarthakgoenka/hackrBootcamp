const   jwt = require('jswonwebtoken');

const {SHA256} = require('crypto-js'); 

const yargs = require('yargs');
const argv = yargs.argv;
var command = process.argv[2];
if(command == 'encrypting'){
    var message = argv.message;
    var key = argv.key;
}
else{
    var key = argv.key;
    var encrypted = argv.encrypted;
}

//using a library (jwt)

var encryptedValue = jwt.sign(message,key)
console.log(encrypted)

//Using cryptoJs Library

var encrypted = CryptoJS.AES.encrypt("Message", "key");
console.log(encrypted);
var decrypted = CryptoJS.AES.decrypt(encrypted, "key");
console.log(decrypted);

const salt = 100;

//Without Using a Library

function Encrypt(message,key,salt) 
{
  var result="";
  for(i=0;i<message.length;i++)
  {
    if(i<message.length-1)
    {
        result+=message.charCodeAt(i)+key;
        result+="";
    }
    else
    {
        result+=message.charCodeAt(i)+key;
    }
  }
  return result;
}
function Decrypt(encrypted,key)
{
  var result="";
  var array = encrypted.split("");

  for(i=0;i<encrypted.length;i++)
  {
    result+=String.fromCharCode(array[i]-key);
  }
  return result;
} 



//alter method


function Encrypt(message,key,salt) 
{
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var newMessage = '';
  for(i=0;i<message.length;i++)
  {
      if(alphabet.includes(message[i])){
          position = message.charCodeAt(i)-96;
          newPosition = (position+key)%26;
          newCharacter = alphabet[newPosition];
          newMessage = newMessage + newCharacter;
        //   console.log(newMessage);
      }
      else{
          newMessage = newMessage+message[i]
        //   console.log(newMessage);
      }
  }
  console.log(newMessage);
}

function Decrypt(encrypted,key)
{
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var newMessage="";
  var array = encrypted.split("");
  for(i=0;i<encrypted.length;i++)
  {
    newMessage+=String.fromCharCode(array[i].charCodeAt(0)-key+96);
  }
  console.log(newMessage);
} 