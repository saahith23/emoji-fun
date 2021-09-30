import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😉": "winking face",
  "😔": "sad",
  "😭": "crying",
  "🤒": "Ill face",
  "🤣": "Laughing",
  "🤭": "Blushing",
  "😠": "Angry",
  "🤔": "Thinking",
  "😪": "sleeping",
  "😵": "dizzy"
};
var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }

    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 class="heading">Emoji fun</h1>
      <input placeholder="enter your emoji here" onChange={emojiInputHandler} />
      <h2> Output will appear here👇</h2>
      <h2 class="result"> 👉"{meaning}" 👈</h2>

      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            class="box"
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}