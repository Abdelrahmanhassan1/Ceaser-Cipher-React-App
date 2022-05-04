import React, { useState } from "react";

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var encoded_msg = "";
var decoded_msg = "";

// main function
function InputArea() {
  const [encryptMsg, setEncryptMsg] = useState({
    message: "",
    shift: "",
  });

  function handleEncryptChange(event) {
    const { name, value } = event.target;
    setEncryptMsg((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function encryptMessage(shift, message) {
    shift = parseInt(shift);
    var new_message = "";
    for (let i = 0; i < message.length; i++) {
      let letter = message.charAt(i).toLowerCase();
      if (letters.includes(letter)) {
        let current_position = letters.indexOf(letter);
        let new_position = current_position + shift;
        while (new_position > letters.length - 1) {
          new_position -= letters.length;
        }
        // want to make the upper and lower characters as inserted
        // here the letter inserted is in lower case
        if (message.charAt(i) === message.charAt(i).toLowerCase()) {
          new_message += letters[new_position];
        }
        // other wise the letter is capital
        else {
          new_message += letters[new_position].toUpperCase();
        }
      } else {
        new_message += letter;
      }
    }
    return new_message;
  }

  function handleEncryptSubmit(event) {
    if (encryptMsg.shift !== "" && encryptMsg.message !== "") {
      encoded_msg = encryptMessage(encryptMsg.shift, encryptMsg.message);
      setEncryptMsg({
        message: "",
        shift: "",
      });
    } else {
      alert("Must Enter shift amount and Message");
    }
    event.preventDefault();
  }

  // Decrypt Methods
  const [decryptMsg, setDecryptMsg] = useState({
    message: "",
    shift: "",
  });

  function handleDecryptChange(event) {
    const { name, value } = event.target;
    setDecryptMsg((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function DecryptMessage(shift, message) {
    shift = parseInt(shift);
    var new_message = "";
    for (let i = 0; i < message.length; i++) {
      let letter = message.charAt(i).toLowerCase();
      if (letters.includes(letter)) {
        let current_position = letters.indexOf(letter);
        let new_position = current_position - shift;
        while (new_position < 0) {
          new_position += letters.length;
        }
        // want to make the upper and lower characters as inserted
        // here the letter inserted is in lower case
        if (message.charAt(i) === message.charAt(i).toLowerCase()) {
          new_message += letters[new_position];
        }
        // other wise the letter is capital
        else {
          new_message += letters[new_position].toUpperCase();
        }
      } else {
        new_message += letter;
      }
    }
    return new_message;
  }

  function handleDecryptSubmit(event) {
    if (decryptMsg.shift !== "" && decryptMsg.message !== "") {
      decoded_msg = DecryptMessage(decryptMsg.shift, decryptMsg.message);

      setDecryptMsg({
        message: "",
        shift: "",
      });
    } else {
      alert("Must Enter shift amount and Message");
    }
    event.preventDefault();
  }

  return (
    <div className="container">
      {/* encrypt container  */}
      <form className="encrypt-container">
        <h3>Enter Message to be Encrypted</h3>
        <textarea
          name="message"
          rows={3}
          placeholder={"Hello World!"}
          onChange={handleEncryptChange}
          value={encryptMsg.message}
        ></textarea>
        <h3>Enter shift</h3>
        <input
          name="shift"
          placeholder={"4"}
          onChange={handleEncryptChange}
          type="number"
          value={encryptMsg.shift}
        ></input>

        <button onClick={handleEncryptSubmit}>Encrypt</button>

        <h1>Encoded Message</h1>
        <h2>{encoded_msg}</h2>
      </form>
      {/* decrypt container  */}
      <form className="decrypt-container">
        <h3>Enter Message to be Decrypted</h3>
        <textarea
          name="message"
          rows={3}
          placeholder={"Lipps Asvph!"}
          onChange={handleDecryptChange}
          value={decryptMsg.message}
        ></textarea>
        <h3>Enter shift</h3>
        <input
          name="shift"
          placeholder={"4"}
          onChange={handleDecryptChange}
          type="number"
          value={decryptMsg.shift}
        ></input>

        <button onClick={handleDecryptSubmit}>Decrypt</button>

        <h1>Decoded Message</h1>
        <h2>{decoded_msg}</h2>
      </form>
    </div>
  );
}

export default InputArea;
