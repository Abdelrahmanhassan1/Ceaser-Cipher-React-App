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

function InputArea() {
  const [msg, setMsg] = useState({
    message: "",
    shift: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMsg((prevValue) => {
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
        new_message += letters[new_position];
      } else {
        new_message += letter;
      }
    }
    return new_message;
  }

  function handleSubmit(event) {
    if (msg.shift !== "" && msg.message !== "") {
      encoded_msg = encryptMessage(msg.shift, msg.message);
      setMsg({
        message: "",
        shift: "",
      });
    } else {
      alert("Must Enter shift amount and Message");
    }
    event.preventDefault();
  }

  return (
    <div>
      <form className="encrypt-container">
        <h3>Enter Message to be Encrypted</h3>
        <textarea
          name="message"
          rows={3}
          placeholder={"Hello World!"}
          onChange={handleChange}
          value={msg.message}
        ></textarea>
        <h3>Enter shift</h3>
        <input
          name="shift"
          placeholder={"4"}
          onChange={handleChange}
          type="number"
          value={msg.shift}
        ></input>

        <button onClick={handleSubmit}>Encrypt</button>

        <h1>Encoded Message:{encoded_msg}</h1>
      </form>
    </div>
  );
}

export default InputArea;
