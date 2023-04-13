import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {/* <Entry emoji = {emojipedia[0].emoji} name = {emojipedia[0].name} meaning = {emojipedia[0].meaning}/>
        <Entry emoji = {emojipedia[1].emoji} name = {emojipedia[1].name} meaning = {emojipedia[1].meaning}/>
        <Entry emoji = {emojipedia[2].emoji} name = {emojipedia[2].name} meaning = {emojipedia[2].meaning}/>
        <Entry emoji = {emojipedia[3].emoji} name = {emojipedia[3].name} meaning = {emojipedia[3].meaning}/> */}
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
