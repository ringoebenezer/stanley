"use client";
import { useState } from "react";

export default function LocalStorage() {
  const [inputValue, setInputValue] = useState();

  const savedValue = localStorage.getItem("savedValue");

  return (
    <main className="flex min-h-screen text-black flex-col items-center justify-between p-24 bg-white">
      <input
        type="text"
        required
        className="border-b w-[80%] p-5 text-black"
        onChange={event => setInputValue(event.target.value)}
        placeholder="Just type in what you want to save in the localstorage and click the save button when done"
      />

      <button
        className="border p-2 bg-gray-500"
        onClick={() => {
          if (!inputValue) {
            alert("Please just write something in the input");
          } else {
            localStorage.setItem("savedValue", inputValue);
            alert("Value saved in localStorage!");
          }
        }}>
        Save
      </button>

      {savedValue && (
        <button
          className="border p-2 bg-gray-500"
          onClick={() => {
            // localStorage.getItem("savedValue");  used to get the thing saved kwenye localStorage
            // sometimes a refresh is required to get a new saved value in the locastorage

            // localStorage.removeItem('savedValue');
            // Used to remove an item from the localStorage
            alert(savedValue);
          }}>
          Get Saved item
        </button>
      )}
    </main>
  );
}
